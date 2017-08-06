// global variables

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins ()
var losses ()
var GuessesLeft ()
var letters ()

// generates random letter
function setRandomletter() {
	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(answer);

//get the letter user types
function getUserInput(event) {
	var key = event.keyCode || event.which;
	var letter = String.fromCharCode(key).toLowerCase();
	var check = answer.toLowerCase();

	console.log(key);