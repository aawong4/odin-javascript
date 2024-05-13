let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let guess = Math.random() * 3;
    if (guess >= 2) {
        return "rock";
    }
    else if (guess >= 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}

function updateHTML() {
    document.getElementById("scores").innerHTML = `Your score: ${humanScore} <br> Computer Score: ${computerScore}`;
}

function checkWinner(humanChoice, computerChoice) {
    if (
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore += 1;
    }
    else if (
        computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper"
    ) {
        computerScore += 1;
    }
}

function playGame() {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    checkWinner(human, computer);
    updateHTML();
}


document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
});