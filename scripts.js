let playerScore = 0
let computerScore = 0
let winner = ''


// Computer selection randomiser function

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

const computerSelection = getComputerChoice();
console.log(computerSelection);


// group winning combos together => trigger win for either computer or player. 2 sets of 3

function playRound(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        winner = 'tie'
    }
    if ( 
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') 
    ) {
        playerScore++;
        winner = 'player';
    }


    if ( 
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') 
    ) {
        computerScore++;
        winner = 'computer';
    }

    const rockbutton = document.getElementById('rockbutton')
    const paperbutton = document.getElementById('paperbutton')
    const scissorsbutton = document.getElementById('scissorsbutton')

    rockbutton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    })
    paperbutton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    })
    scissorsbutton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    })
