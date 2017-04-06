/* Fak yeah zombies */

zombieGame()

function zombieGame() {

alert("It is the zombie apocalypse. You are looting a store when suddenly a zombie bursts through the door!");

var weapon = prompt("You search around frantically for a weapon. What do you choose? Bow and arrow, axe or rubber chicken?");
var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if (randomNumber === 0) {
	alert("The zombie bites you. You lose!");
} else if (randomNumber === 1) {
	alert("You kill the zombie with your" + " " + weapon + "!");
}

function restartGame() {
	var response = confirm("Do you want to play again?");

	if (response === true) {
		zombieGame()
	}

	else {
		alert("Thanks for playing!");
	}
}

restartGame()

}