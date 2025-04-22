let playerScoreText = document.querySelector("#player-score");
let botScoreText = document.querySelector("#bot-score");

let botRock = document.querySelector("#bot-rock");
let botPaper = document.querySelector("#bot-paper");
let botScissors = document.querySelector("#bot-scissors");

let playerScore = 0;
let botScore = 0;

const winningCases = {
    rock: "paper",
    paper: "rock",
    scissors: "paper",
};

const timeSeconds = 2000;

function main() {
    setupChoiceListeners()
}

function setupChoiceListeners() {
    const choices = document.querySelectorAll(".choices");

    choices.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            let humanChoice = event.target.id;
            let botChoice = getComputerChoice();
            playRound(humanChoice, botChoice);
        });
    });
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]

    return choices[Math.floor(Math.random() * 3)]
}

function playRound(humanChoice, botChoice) {
    styleBot(botChoice);
    stylePlayer(humanChoice);

    if (humanChoice === botChoice) {
        displayMessage("DRAW")
    } else if (winningCases[humanChoice] === botChoice) {
        playerScore++;
        playerScoreText.innerHTML = playerScore;
        displayMessage("WIN")
    } else {
        botScore++;
        botScoreText.innerHTML = botScore;
        displayMessage("LOSE")
    }
}

function styleBot(botChoice) {
    let element;

    if (botChoice === "rock") {
        element = botRock;
    } else if (botChoice === "paper") {
        element = botPaper;
    } else if (botChoice === "scissors") {
        element = botScissors;
    }

    if (element) {
        element.style.borderColor = "red";
        setTimeout(() => {
            element.style.borderColor = ""; 
        }, timeSeconds); 
    }
}

function stylePlayer(playerChoice) {
    let playerElement = document.querySelector(`#${playerChoice}`);
    playerElement.style.borderColor = "green";
    setTimeout(() => {
        playerElement.style.borderColor = "";
    }, timeSeconds);
}

function displayMessage(message){ 
    let messageElement = document.querySelector(".message");
    messageElement.style.display = "flex";
    messageElement.textContent = message;
    setTimeout(() => {
        messageElement.style.display = "none";
        messageElement.textContent = "";
    }, timeSeconds);
}

main()