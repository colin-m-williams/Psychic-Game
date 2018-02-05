//variables for the game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//start the game
theGame();


function theGame() {

	// selects raandom letter and sets it as the computers choice
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;
		
	checkIfCorrect();
	
	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//set users choice as a lowwer case letter
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

			//prevents user from selecting a key that's not a letter
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			//prevents the user from selecting a letter already selected
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			//when the user has a correct answer
			} else if (userChoice === computerChoice) {
				
				// alert user of win, increase wins by 1 and display on the page
				alert("You win!");
				wins = wins + 1;
				document.getElementById("wins").innerHTML = wins;

				winningColors()

				//start the game over
				resetGame();

			//when the user has a wrong answer
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guessesLeft").innerHTML = guessesLeft; 
				yourGuess.push(userChoice);  

				document.getElementById("guesses").innerHTML = yourGuess;

				noGuessesLeft();
			}
		}
	}

	//resets all variables back to original setting
	function resetGame() {
		guessesLeft = 9; 
		yourGuess = [];  
		document.getElementById("guessesLeft").innerHTML = guessesLeft;  
		document.getElementById("guesses").innerHTML = yourGuess;    
		theGame(); 

	}

	//alert user of loss and set the losses to +1 and display new sum on page and start the game over
	function noGuessesLeft() {
		if (guessesLeft === 0) {
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("losses").innerHTML = losses;			
			winningColors()
			resetGame();

		} else {  
			checkIfCorrect();
		}

	}

	//sets colors according to win percentage
	function winningColors() {
		if (wins > losses) {
			document.getElementById("wins").style.color = "green";
			document.getElementById("wins").style.fontSize = "larger";

		} else if (wins === losses){
			document.getElementById("wins").style.color = "black";
			document.getElementById("wins").style.fontSize = "initial";
			document.getElementById("losses").style.color = "black";
			document.getElementById("losses").style.fontSize = "initial";

		} else {
			document.getElementById("losses").style.color = "red";
			document.getElementById("losses").style.fontSize = "larger";
		}
	}

}
