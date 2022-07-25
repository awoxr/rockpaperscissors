//randomly return rock, paper, or scissors
function getComputerChoice() {
    let items = Array("rock", "paper", "scissors");
    return items[Math.floor(Math.random()*items.length)];
};

//play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return "tie"}
    else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "rock" && playerSelection === "scissors") {
        return 'lose';
    }

    else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors") {
        return 'win';
    }

    else {
        return;
    }
}

//play 5 rounds
let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper, scissors, shoot!");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    function score() {
        if (result === 'win') {
            playerScore += 1;
        }
        else if (result === 'lose') {
            computerScore += 1;
        }
        else {
            return; 
        }
    }
    score();
    function declare() {
        if (result === 'tie') {
            return("It's a tie!");
        }
        else if (result === 'win') {
            return(`you win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (result === 'lose') {
            return(`you lose! ${computerSelection} beats ${playerSelection}`);
        }
        else {
            return("something went wrong")
        }
    }
console.log(declare());
}

function finalScore() {
if (playerScore > computerScore) {
    return `You win! The score was ${playerScore} to ${computerScore}.`;
}
else if (playerScore < computerScore) {
    return `You lose! The score was ${playerScore} to ${computerScore}`;
}
else {
    return "You and the computer tied!";
}
}

console.log(finalScore());