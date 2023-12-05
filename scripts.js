    function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {                 
        return "Scissors";
    }             
  }

let playerScore = 0
let computerScore = 0
let winner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            winner = 'tie'
            return winner
        }
        if ( 
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') 
        ) {
            playerScore++;
            winner = 'player wins!';
            return winner
        }
    
    
        if ( 
            (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
            (computerSelection === 'Paper' && playerSelection === 'Rock') ||
            (computerSelection === 'Scissors' && playerSelection === 'Paper') 
         ) {
            computerScore++;
            winner = 'computer wins!';
            return winner
         }
        
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));