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
	restartGame();

	} 
	else if (crossRoads == "Left") {
	alert("You start walking to your left. The world feels really empty. Almost like nobody bothered to continue shaping it.");
	var answer = confirm("Do you want to turn back?");
		if (answer === true) {
		postDoor();
		}
		else {

		alert("Whelp. Well, there you go.")
		restartGame();
		}
} 

else if (crossRoads == "Forward") {
	alert("You have encountered a big blob!");
	var choice = prompt("What do you want to do? \n(Attack, Run, Surrender)");
	if (choice === "Attack") {
		if (randomNumber === 1) {
			alert("You have defeated the ogre with your" + " " + weapon + "!");
			restartGame();
		}
		else {
			alert("Unfortunately, your" + " " + weapon + " " + "was too weak to handle this big boy. It broke. You can probably figure out what happened next.");
			restartGame();
			}
		}

		else if (choice === "Run") {
		alert("You ran away.");
		postDoor()
		}

		else if (choice === "Surrender") {
		alert("You surrender to the might of the blob. You are dead.");
		restartGame();
		}

}

else {
	alert("Please enter a valid direction. \n(Right, Left, Forward)");
	postDoor();
}

}

postDoor()

restartGame()

}