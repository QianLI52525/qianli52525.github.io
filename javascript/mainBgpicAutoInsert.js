var imgw = 1;
var imgh = 1;
var imgwhratio = 1;
var img = new Image();

function displayBgpic(imgsrc) {
	if (imgw === 1 && imgh === 1) {
		img.src = imgsrc;
		img.onload = function() {
			imgw = img.width;
			imgh = img.height;
			imgwhratio = imgw / imgh;
			updateDisplay();
		};
	} else {
		updateDisplay();
	}
}

let logTimeoutId;

function updateDisplay() {
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	var whratio = w / h;
	
	if (imgwhratio >= whratio){
		document.getElementById("result").innerHTML = "<img class=\"bgpich\" src=\"" + img.src +  "\">";
	} else {
		document.getElementById("result").innerHTML = "<img class=\"bgpicw\" src=\"" + img.src +  "\">";
	} 
	
	clearTimeout(logTimeoutId);
	logTimeoutId = setTimeout(function() {
		console.log("图片： ", imgwhratio, "窗口：", whratio);
	}, 200);
}

displayBgpic("https://qianli52525.github.io/bgpic/venti6.jpeg");

window.addEventListener("resize", function() {
	updateDisplay();
});
