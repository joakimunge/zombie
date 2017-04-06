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
	restartGame()
} else if (randomNumber === 1 && weapon === "hammer") {
	alert("Zombie is smashed into a puddle of ass.");
} else if (randomNumber === 1 && weapon === "dick") {
	alert("You rape zombie");
}else if (randomNumber === 1) {
	alert("You kill the zombie with your" + " " + weapon + "!");
}

function postDoor() {

var crossRoads = prompt("You exit the door and find yourself at a crossroads. Which way do you go?");

if (crossRoads == "Right") {
	alert("You start walking to your right. Suddenly the game just fucking ends");
	restartGame()

	} else if (crossRoads == "Left") {
	alert("You start walking to your left. The world feels really empty. Almost like nobody bothered to continue shaping it.");
	var answer = confirm("Do you want to turn back?");

	if (answer === true) {
		postDoor();
	}

	else {
		alert("Whelp. Well, there you go.")
		restartGame()
	}


}

}

postDoor()

restartGame()

}