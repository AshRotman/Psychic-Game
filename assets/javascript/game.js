// global variables

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessleft = 6;
var letters = [];

var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer);


document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	document.querySelector('#letters').innerHTML = userGuess;
	console.log(userGuess);


if (userGuess === answer){
 	alert('win');
	wins++;
 }
 else  {
 	alert('guess again')
 	guessleft--;
 }
} 

// function guessleft(num) {
// 	document.getElementById("#guessLeft").innerHTML = num;

 
// // generates random letter
// function setRandomletter() {
// 	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
// 	console.log(answer);
// }
// //get the letter user types
// $("input").keyup(function(event){ 
//         $("div").html("Key: " + event.which);
//     });
// function getUserInput(event) {
// 	var key = event.keyCode || event.which;
// 	var letter = String.fromCharCode(key).toLowerCase();
// 	var check = answer.toLowerCase();

// 	console.log(key);

