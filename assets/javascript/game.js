var wins = 0;
var loses = 0;
var left = 9;
var guesses = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var computer;

document.querySelector(".total").innerHTML = "Guesses Left: " + left;

var length = alphabet.length;
var i = Math.floor(Math.random()*length);
computer = alphabet[i];

function reset() {
	left = 9;
	document.querySelector(".total").innerHTML = "Guesses Left: " + left;
	guesses = [];
	document.querySelector(".current").innerHTML = "Current Guesses: " + guesses;
}

document.onkeyup = function(event) {
	//console.log(event);
	//found out that the key value is under keyCode, set keyCode to a variable.
	var pressed = String.fromCharCode(event.keyCode)
	//console.log(pressed);
	//console.log(guesses);
	//push keyCode to guesses array
	guesses.push(pressed);
	//set array to "numG"
	document.querySelector(".current").innerHTML = "Current Guesses: " + guesses;
	//decrement guesses left
	left = left - 1;
	document.querySelector(".total").innerHTML = "Guesses Left: " + left;
	//set if/else statement using the keyCode
	//
	if (computer===pressed) {
		//increment win
		wins = wins + 1;
		document.querySelector(".wins").innerHTML = "Wins: " + wins;
		console.log(left);
		//resets the game
		reset();
	};
	if (left === 0) {
		loses = loses + 1;
		document.querySelector(".loses").innerHTML = "Loses: " + loses;
		reset();
	};
}


