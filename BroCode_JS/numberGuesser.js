//element ids
const guessIndicator = document.getElementById("guessIndicator");
const enterGuess = document.getElementById("enterGuess");
const submitGuess = document.getElementById("submitGuess");
const resetGuess = document.getElementById("resetGuess");
const numGuesses = document.getElementById("numGuesses");

let min = 0;
let max = 101;
let currentGuess;
let guesses = 0;

//generate random number
let numberToGuess = Math.floor(Math.random(min, max) * (max-min) + min);


//update guess
submitGuess.onclick = function() {

    currentGuess = Number(enterGuess.value);
    enterGuess.value = '';
    guesses++;
    
    //guess needs to be higher or lower
    if (currentGuess == numberToGuess) {
        guessIndicator.style.color = "black";
        guessIndicator.textContent = `Congratulations, the number was ${numberToGuess}!`;
        numGuesses.textContent = `You guessed the number in ${guesses} guesses!`;
    }
    else if (currentGuess > numberToGuess) {
        guessIndicator.style.color = "red";
        guessIndicator.textContent = `Lower than ${currentGuess}!`;
        numGuesses.textContent = `Guesses: ${guesses}`;
    }
    else {
        guessIndicator.style.color = "green";
        guessIndicator.textContent = `Higher than ${currentGuess}!`;
        numGuesses.textContent = `Guesses: ${guesses}`;
    }
}

//reset game
resetGuess.onclick = function() {
    numberToGuess = Math.floor(Math.random(min, max) * (max-min) + min);
    guessIndicator.textContent = ``;
    guesses = 0;
    numGuesses.textContent = `Guesses: 0`;
}