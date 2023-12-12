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
