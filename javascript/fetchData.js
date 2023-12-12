function fetchData(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('资源获取失败');
            }
            return response.text();
        })
        .then(htmlContent => {
            // 将加载的HTML内容插入到页面中
            document.getElementById('loadedContent').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            // 将错误消息插入到页面中
            document.getElementById('loadedContent').innerHTML ='资源获取失败';
        });
}

function traverseFolder(folderPath) {
        fetch(folderPath)
            .then(response => response.text())
            .then(htmlContent => {
                document.getElementById('loadedFolder').innerHTML += htmlContent;
                const links = htmlContent.match(/<a [^>]*href="([^"]*)"/);
                if (links) {
                    for (const link of links) {
                        const match = link.match(/<a [^>]*href="([^"]*)"/);
                        if (match) {
                            const filePath = match[1];
                            if (filePath.endsWith('/')) {
                                traverseFolder(folderPath + filePath);
                            }
                        }
                    }
                }
            })
            .catch(error => {
                console.error('Error loading content:', error);
                document.getElementById('loadedFolder').innerHTML += '文件获取失败';
            });
    }

function fetchFile(folderPath){
    fetch('files/')
        .then(response => response.text())
        .then(htmlContent => {
            // 创建一个临时div，用于解析HTML内容
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            // 提取所有<a>标签并生成文件链接
            const fileLinks = tempDiv.querySelectorAll('a');
            const fileLinksDiv = document.getElementById('fileLinks');

            // 如果有文件链接，则将它们插入到页面中
            if (fileLinks.length > 0) {
                fileLinks.forEach(link => {
                    const fileLink = document.createElement('a');
                    fileLink.href = `files/${link.getAttribute('href')}`;
                    fileLink.textContent = link.textContent;
                    fileLink.setAttribute('target', '_blank'); // 在新窗口中打开链接
                    fileLinksDiv.appendChild(fileLink);
                    fileLinksDiv.appendChild(document.createElement('br')); // 添加换行
                });
            } else {
                fileLinksDiv.textContent = '文件提取失败';
            }
        })
        .catch(error => {
            console.error('Error loading file links:', error);
            // 如果发生错误，将错误消息插入到页面中
            document.getElementById('fileLinks').textContent = '文件提取失败';
        });
}
