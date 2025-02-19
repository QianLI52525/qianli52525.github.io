var imgw = 1;
var imgh = 1;
var imgwhratio = 1;
var img = new Image();

// 默认图片 URL
const defaultImgUrl = "https://qianli52525.github.io/bgpic/defaultBgpic.jpeg";

function displayBgpic(imgsrc) {
    img.src = imgsrc; // 设置图片源
    img.onload = function() {
        imgw = img.width;
        imgh = img.height;
        imgwhratio = imgw / imgh;
        updateDisplay();
    };
    img.onerror = function() {
        // 如果图片加载失败，切换到默认图片
        displayBgpic(defaultImgUrl);
    };
}

let logTimeoutId;

function updateDisplay() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var whratio = w / h;

    if (imgwhratio >= whratio) {
        document.getElementById("bgpic").innerHTML = `<img class="bgpich" src="${img.src}">`;
    } else {
        document.getElementById("bgpic").innerHTML = `<img class="bgpicw" src="${img.src}">`;
    }

    clearTimeout(logTimeoutId);
    logTimeoutId = setTimeout(function() {
        console.log("图片宽高比：", imgwhratio, "窗口宽高比：", whratio);
    }, 200);
}

// 监听窗口大小变化
window.addEventListener("resize", function() {
    updateDisplay();
});
