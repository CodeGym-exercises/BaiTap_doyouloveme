let bnt_y = document.getElementById("yes");
let bnt_n = document.getElementById("no");
let random_num = 0;
let heightBrowser = window.innerHeight;
let widthBrowser = window.innerWidth;
bnt_y.onclick = function(){
	alert("oh! you are right");
};
bnt_n.onclick = function(){
	alert("This button doesn't exist, please choose again!! ");
};
bnt_n.onmouseover = function(){
	bnt_n.style.top = Math.random()*heightBrowser + "px";
	bnt_n.style.left = Math.random()*widthBrowser + "px";
};
