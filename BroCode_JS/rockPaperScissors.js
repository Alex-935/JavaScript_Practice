
// Page Elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rpsButtons = document.querySelectorAll(".optionButton");

const gameOutcome = document.getElementById("gameOutcome");
const playerChoiceText = document.getElementById("playerChoiceText");
const compChoiceText = document.getElementById("compChoiceText");
const playerScoreText = document.getElementById("playerScoreText");
const compScoreText = document.getElementById("compScoreText");
// Scores
const resetButton = document.getElementById("resetButton");
let playerScore = 0;
let compScore = 0;
choices = ["rock", "paper", "scissors"];


rpsButtons.forEach(button => {
    button.addEventListener("click", event => {
        playerChoiceText.textContent = "Player Choice: " + event.target.id;

        playGame(event.target.id);
    });
});

function playGame(playerChoice) {

    let compChoice = choices[Math.floor(Math.random() * 3)];
    compChoiceText.textContent = "Computer Choice: " + compChoice;
    
    if (playerChoice === compChoice) {
        gameOutcome.style.color = "black";
        gameOutcome.textContent = "You Tie!";
    }
    else {
        if (playerChoice === "rock" && compChoice === "scissors") {
            gameOutcome.style.color = "hsl(106, 76%, 56%)";
            gameOutcome.textContent = "You Win!"
            playerScore++;
            playerScoreText.textContent = "Player Score: " + playerScore.toString();

        } else if (playerChoice === "scissors" && compChoice === "paper") {
            gameOutcome.style.color = "hsl(106, 76%, 56%)";
            gameOutcome.textContent = "You Win!"
            playerScore++;
            playerScoreText.textContent = "Player Score: " + playerScore.toString();

        } else if (playerChoice === "paper" && compChoice === "rock") {
            gameOutcome.style.color = "hsl(106, 76%, 56%)";
            gameOutcome.textContent = "You Win!"
            playerScore++;
            playerScoreText.textContent = "Player Score: " + playerScore.toString();
        }
        else {
            gameOutcome.style.color = "hsl(7, 77%, 54%)";
            gameOutcome.textContent = "You Lose!"
            compScore++;
            compScoreText.textContent = "Computer Score: " + compScore.toString();
        }
    }
}

resetButton.addEventListener("click", event => {
    playerScore = 0;
    compScore = 0;
    playerChoiceText.textContent = "Player Choice:";
    compChoiceText.textContent = "Computer Choice:";
    playerScoreText.textContent = "Player Score: 0";
    compScoreText.textContent = "Computer Score: 0";
    
    gameOutcome.textContent = '';
});