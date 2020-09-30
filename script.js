//function that randomly picks either RPS for AI
function computerPlay(){
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return 'rock';
    } else if (num === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//user input
function playerSelection(){
    return prompt('Select rock, paper or scissors: ').toLowerCase();
}
//one round play function that declares winner of the round
function playRound(playerSelection, computerSelection){
    while (playerSelection === computerSelection){
        playerSelection = prompt('It\'s a draw, replay your turn: ').toLowerCase();
        computerSelection = computerPlay();
    }
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = prompt("Error, replay your turn, must select rock, paper or scissors: ").toLowerCase();
    }
        console.log(`The computer chose ${computerSelection}...`)
        if (playerSelection === 'rock' && computerSelection === 'scissors' 
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'scissors' && computerSelection === 'paper'){
           console.log('You won this round!');
           return 'won';
    } else {
        console.log('Sorry, you lost this round.')
        return 'lost';
    }
}

//function that loops the playRound function 5 times and includes point based system and 
//ends the game once someone reaches the most wins out of 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let result = playRound(playerSelection(), computerPlay());
        if (result === 'won'){
            playerScore += 1;
        } else {
            computerScore +=1;
        }
    }
    if (playerScore > computerScore){
        console.log(`Congratulations! you won ${playerScore} of 5 games`);
    } else {
        console.log(`Sorry, you lost ${computerScore} of 5 games`);
    }
}

game();





