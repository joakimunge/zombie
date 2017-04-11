/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

Adventures of DickButt

Adventure game starring DickButt working his way through scenarios within the meme-world.
Game should include:

Starting scenario (random?)
Pathing
Combat - Dice-rolling
Win/Lose-scenario
-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Figure out how to print every game paragraph to the page


document.querySelector('.output').innerHTML = randomNumber(14);

document.querySelector('.output').innerHTML = scenarios[startScenario];


-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

randomNumber function that takes range as a parameter.

switch-cases / if-else statements that use the randomNumber function to return a random scenario.

toLowerCase to force prompt inputs into lower case to easily return an existing scenario and less
frequently return errors.



-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.  
After, look for ways you might improve your code! 
*/

var scenarios = [
'You wake up in the Pepe Hospital with a dickbutt. Your name is now DickButt. What do? \n(Go out, search bed, kill self)', 
'You wake up on the floor as DickButt. What do? \n(Go out, search bed, kill self)', 
'You barely wake up. What do you do? \n(Go out, search bed, kill self)'
];

var playerInput = "";

function randomNumber(range) {
	return Math.round( Math.random() * range);
}

function newParagraph(text) {
	var content = text;
	var np = document.createElement("p");
	np.textContent = content;
	document.getElementById("gameField").appendChild(np);
}

var btn = document.getElementById('btnSubmit');
btn.addEventListener('click', getInput);

function getInput() {
	playerInput = document.getElementById('inputField').value;
	console.log(playerInput);
	return playerInput;
}

function startGame() {
	var randomScenario = randomNumber(scenarios.length -1);
	newParagraph(scenarios[randomScenario]);
}

startGame();

function () {
	switch (playerInput) {
		case 'yes':
			newParagraph("You leave the room and walk into the hall.");
			break;
		case 'no':
			newParagraph("You search the bed and find nothing");
			break;
		case 'ok':
			newParagraph("You kill yourself");
			break;
		default:
			alert("Enter valid option");
			break;
	}
}


