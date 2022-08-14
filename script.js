const buttons = document.querySelectorAll('button');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const winner = document.getElementById('winner');
const playerDiv = document.getElementById('playerscore');
const computerDiv = document.getElementById('computerscore');
const playerPoints = document.getElementById('playerscore');
const computerPoints = document.getElementById('computerscore');
const counter = document.getElementById('counter');
const popup = document.getElementById("myPopup");

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

//declare final score
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



let roundCounter = 0;

//adds a point after the round
let playerScore = 0;
let computerScore = 0;
function score(result) {
    if (result === 'win') {
        playerScore += 1;
        winner.style.backgroundColor ='green';
    }
    else if (result === 'lose') {
        winner.style.backgroundColor ='red';
        computerScore += 1;
    }
    else {
        winner.style.backgroundColor ='purple';
        return; 
    }
}

//check if it is the final round and declare winner if so
function roundCheck(round) {
    if (round === 5) {
        popup.innerHTML = `${finalScore()} <br>Play again?`;
        myFunction();
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;
        counter.textContent = `Round ${roundCounter+1}`;
        playerPoints.textContent = `You: ${playerScore}`;
        computerPoints.textContent = `Computer: ${computerScore}`;
        playerChoice.innerHTML = `Your Choice:`;
        computerChoice.innerHTML = `Computer's Choice:`;
        winner.innerHTML = `Result:`;
        winner.style.backgroundColor = 'lightgrey';
    }
    else {
        return;
    }
}

//play round on click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        const playerSelection = (this.id);
        const computerSelection = getComputerChoice();
        playerChoice.innerHTML = `Your Choice: <b>${playerSelection}</b>`
        computerChoice.innerHTML = `Computer's Choice: <b>${computerSelection}</b>`
        let result = playRound(playerSelection, computerSelection);
        winner.innerHTML = `Result: <b>${result}</b>`;
        score(result);
        playerPoints.textContent = `You: ${playerScore}`;
        computerPoints.textContent = `Computer: ${computerScore}`;
        roundCounter +=1;
        roundCheck(roundCounter);
        counter.textContent = `Round ${roundCounter+1}`;
    }
)}


/*
//play 5 rounds
let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {

    const computerSelection = getComputerChoice();
    */
    
/*
//declares result in console
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
//console.log(declare());

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

//console.log(finalScore());
*/

// When the user clicks on <div>, open the popup
function myFunction() {
  popup.classList.toggle("show");
}
