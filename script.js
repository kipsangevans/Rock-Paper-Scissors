let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length)

    return choices[choice];

}

function getHumanChoice() {
    let humanChoice = prompt("rock , paper  or scissors",)
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}




function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";

    } else {
        computerScore++;
        return "You lose!";
    }
}







function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
        console.log('-----------------------------');
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
    return 
    }



playGame();
