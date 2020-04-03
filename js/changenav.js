document.querySelector(".changeNav").addEventListener("click", () => {
	document.querySelector("nav").style.animationName = "addNav";
});
document.querySelector(".removeNav").addEventListener("click", () => {
	document.querySelector("nav").style.animationName = "removeNav";
});