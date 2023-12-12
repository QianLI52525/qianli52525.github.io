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
