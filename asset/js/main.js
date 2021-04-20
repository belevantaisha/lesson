//alert("Hello world!")

/* comment */

var colorArray = [
				 "#5a9C6E",
				 "#A8BF5A", 
				 "#CCC", 
				 "#000", 
				 "#00ff00"
				 ];
var i = 0;

function changeColor() {
	document.body.style.background = colorArray[i];
	i++;
	console.log(colorArray[i]);
	if (i > colorArray.length - 1) {
		i = 0} }
		
function selectColor() {
	let color = document.getElementById("color").value;
	console.log(color);
	document.body.style.background = color;
}

