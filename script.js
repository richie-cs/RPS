let playerScore = 0;
let computerScore = 0;

// make a function for the computer to play
function computerPlay(){
    let computerChoice = ['rock, paper, scissors'];
    let choice = computerChoice[Math.floor(Math.window() * computerChoice.length)];
    return choice;
}

// make a function that plays a single round choosing a winner
// make case insensitive for input
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Draw';
        playerScore++
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose! Paper beats Rock!'
        computerScore++
    } else if (playerSelection == 'rock' && computerSelection =='scissors'){
        return 'You win! Rock beats Scissors!'
        playerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You lose! Scissors beats paper'
        computerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'You win! Paper beats rock!'
        playerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You lose! Rock beats Scissors'
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You win! Scissors beats paper!'
        playerScore++
    }
}





