var menu = document.querySelector("ul");
var animefirst= document.querySelector(".first");
var animesecond = document.querySelector(".second");
var animethird = document.querySelector(".third");
function myfunction()
{
	console.log("working");
	animefirst.classList.toggle("changefirst");
	animesecond.classList.toggle("changesecond");
	animethird.classList.toggle("changethird");
	menu.classList.toggle("show");

	}