//element ids
const guessTitle = document.getElementById("guessTitle");
const guessIndicator = document.getElementById("guessIndicator");
const enterGuess = document.getElementById("enterGuess");
const submitGuess = document.getElementById("submitGuess");
const resetGuess = document.getElementById("resetGuess");
const numGuesses = document.getElementById("numGuesses");

let min = 1;
let max = 100;
let currentGuess;
let guesses = 0;
let running = true;

// sets title based off of min and max values
guessTitle.textContent = `Guess a number between ${min} and ${max}:`;
//generate random number
let numberToGuess = Math.floor(Math.random() * (max-min+1) + min);


//update guess
submitGuess.onclick = function() {

    currentGuess = Number(enterGuess.value);
    enterGuess.value = '';
    guesses++;

    if (running) {
        //guess needs to be higher or lower
        if (currentGuess == numberToGuess) {
            guessIndicator.style.color = "black";
            guessIndicator.textContent = `Congratulations, the number was ${numberToGuess}!`;
            numGuesses.textContent = `You guessed the number in ${guesses} guesses!`;
            running = false;
        }
        else if (currentGuess > numberToGuess) {
            guessIndicator.style.color = "red";
            guessIndicator.textContent = `Lower than ${currentGuess}!`;
            numGuesses.textContent = `Guesses: ${guesses}`;
        }
        else if (currentGuess < numberToGuess){
            guessIndicator.style.color = "green";
            guessIndicator.textContent = `Higher than ${currentGuess}!`;
            numGuesses.textContent = `Guesses: ${guesses}`;
        }
        else {
            guessIndicator.style.color = "red";
            guessIndicator.textContent = "Please enter a valid number";
            guesses--;
        }
    }
}



//reset game
resetGuess.onclick = function() {
    numberToGuess = Math.floor(Math.random() * (max-min+1) + min);
    guessIndicator.textContent = ``;
    guesses = 0;
    numGuesses.textContent = `Guesses: 0`;
    running = true;
}