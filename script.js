//your code here
var btn = document,getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;

function randomNumberGenerator(){
	randomNumber = Math.floar(Math.random() * 41) - 20;
	document.getElementById("num").innerText = randomNumber;
	guessNumber();
	printValue();
}
function guessNumber (){
	input = Number(document.getElementById("guess").value);
}
function printValue () {
	if(Math.abs(randomNumber - input) <= 5){
		document.getElementById("respond").innerText = "Hot";
	}
	else{
		document.getElementById("respond").innerHTML = "Cold";
	}
	
}
btn.addEventListener("click" randomNumberGenerator);

