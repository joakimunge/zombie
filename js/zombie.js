/* Fak yeah zombies */

zombieGame()

function zombieGame() {

alert("It is the zombie apocalypse. You are looting a store when suddenly a zombie bursts through the door!");

var weapon = prompt("You search around frantically for a weapon. What did you find?");
var randomNumber = Math.round(Math.random());

function restartGame() {
	var response = confirm("Do you want to play again?");

	if (response === true) {
		zombieGame()
	}

	else {
		alert("Thanks for playing this short ass game!");
	}
}

alert("You attack the zombie with your" + " " + weapon);

if (randomNumber === 0) {
	alert("The zombie bites you. You lose!");
} else if (randomNumber === 1 && weapon === "hammer") {
	alert("Zombie is smashed into a puddle of ass.");
} else if (randomNumber === 1 && weapon === "knife") {
	alert("You absolutely murder zombie");
}else if (randomNumber === 1) {
	alert("You kill the zombie with your" + " " + weapon + "!");
}




restartGame()

}
