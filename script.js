//randomly return rock, paper, or scissors
function getComputerChoice() {
    let items = Array("rock", "paper", "scissors");
    return items[Math.floor(Math.random()*items.length)];
};

//play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return "tied"}
    else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "rock" && playerSelection === "scissors") {
        return 'lose';
    }

    else {
        return 'win';
    }
}

//play 5 rounds
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper, scissors, shoot!");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    function declare() {
        if (result === 'tie') {
            return("It's a tie!");
        }
        else if (result === 'win') {
            return(`you win! ${playerSelection} beats ${computerSelection}`);
            
        }
        else {
            return(`you lose! ${computerSelection} beats ${playerSelection}`);
        }
    }
console.log(declare());
}

//return string that declares winner