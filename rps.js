let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let random = Math.floor((Math.random() * 3));
    if(random === 0) {
        return 'rock';
    } else if(random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // code
    if(playerSelection === computerSelection) {
        console.log(`It's a draw with ${playerSelection}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats Scissors');
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Rock loses to paper');
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Scissors loses to rock');
        computerScore++;
    } else if (playerSelection = 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock');
        playerScore++;
    } else {
        console.log('You lose! Paper loses to scissors');
        computerScore++;
    }
}

function game() {
    let selection = prompt('Let\'s do this. Rock, paper, scissors...');
    playRound(selection, computerPlay());

    if (playerScore === 3) {
        console.log(`You win! ${playerScore} - ${computerScore}. Congrats you beat a computer`);
    } else if (computerScore === 3) {
        console.log(`You lose! ${playerScore} - ${computerScore}. Computer wins, suck a bag of dicks!`);
    } else {
        game();
    }
}

game();