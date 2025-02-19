var imgw = 1;
var imgh = 1;
var imgwhratio = 1;
var img = new Image();

function displayBgpic(imgsrc) {
    img.src = imgsrc;
    img.onerror = function() {
        console.warn("Image not found. Using default image.");
        img.src = "https://qianli52525.github.io/bgpic/defaultBgpic.jpeg";
    };
    img.onload = function() {
        imgw = img.width;
        imgh = img.height;
        imgwhratio = imgw / imgh;
        updateDisplay();
    };
}

let logTimeoutId;
let imgSelected = "https://qianli52525.github.io/bgpic/defaultBgpic.jpeg";

function updateDisplay() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var whratio = w / h;
    
    if (imgwhratio >= whratio) {
        document.getElementById("bgpic").innerHTML = "<img class=\"bgpich\" src=\"" + img.src +  "\">";
    } else {
        document.getElementById("bgpic").innerHTML = "<img class=\"bgpicw\" src=\"" + img.src +  "\">";
    } 
    
    clearTimeout(logTimeoutId);
    logTimeoutId = setTimeout(function() {
        console.log("图片： ", imgwhratio, "窗口：", whratio);
    }, 200);
}

displayBgpic(imgSelected);

window.addEventListener("resize", function() {
    updateDisplay();
});
