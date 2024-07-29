let humanChoice;
let humanScore = 0;
let computerScore = 0;
let round =0 ;
let isMusicOn = false;
// backgroundMusic.play();



document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    const endMessage = document.getElementById("endMessage");
    const gameContainer = document.getElementById("gameContainer");
    const startAgainButton = endMessage.querySelector("button");
    const music =document.getElementById('music');
    

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.tagName === 'IMG') {
                humanChoice = e.target.parentElement.id.toLowerCase();
            } else {
                humanChoice = e.target.id.toLowerCase();
            }
            console.log(humanChoice);
            playGame(endMessage, gameContainer, buttons);
        });
    });

    startAgainButton.addEventListener("click", () => restartGame(buttons));
    setInterval(() => changeButtonColors(buttons), 1000); // Change colors every second


    music.addEventListener('click', () => {
        if (isMusicOn) {
            backgroundMusic.pause();
            music.textContent = "Play Music";
        } else {
            backgroundMusic.play();
            music.textContent = "Pause ";
        }
        isMusicOn = !isMusicOn;
    });


});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(humanChoice, computerChoice) {
    round++;
   
    const para = document.querySelector("#result");
    if (humanChoice === computerChoice) {
        para.textContent = `Round ${round} It's a tie!`;
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        para.textContent = `Round ${round} You won!`;
        return "You win!";
    } else {
        computerScore++;
        para.textContent = `Round ${round} You lost!`;
        return "You lose!";
    }
}

function playGame(endMessage, gameContainer, buttons) {
    if (!humanChoice) {
        const para = document.querySelector("#result");
        para.textContent = "Please make a choice!";
        console.log("Please make a choice!");
        return;
    }

    const computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);

    const result = playRound(humanChoice, computerChoice);
    document.getElementById('humanScore').textContent = `${humanScore}`;
    document.getElementById('computerScore').textContent = `${computerScore}`;
    document.getElementById('humanChoice').textContent = `${humanChoice}`;
    document.getElementById('computerChoice').textContent = `${computerChoice}`;
    console.log(result);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    console.log('-----------------------------');

    if (humanScore === 5 || computerScore === 5) {
        const endMessageH1 = document.querySelector("#endMessage h1");
        endMessage.style.display = 'block';
        gameContainer.classList.add('blur');
        if (humanScore > computerScore) {
            endMessageH1.textContent = "Congratulations! You are the overall winner!";
            console.log("Congratulations! You are the overall winner!");
        } else {
            endMessageH1.textContent = "Sorry! The computer is the overall winner!";
            console.log("Sorry! The computer is the overall winner!");
        }
        buttons.forEach(button => button.disabled = true);
        humanScore = 0;
        computerScore = 0;
    }
}

function restartGame(buttons) {
    const endMessage = document.getElementById("endMessage");
    const gameContainer = document.getElementById("gameContainer");

    endMessage.style.display = 'none';
    gameContainer.classList.remove('blur');
    humanScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('humanScore').textContent = `${humanScore}`;
    document.getElementById('computerScore').textContent = `${computerScore}`;
    document.querySelector("#result").textContent = "Wow lets play again !";
    buttons.forEach(button => button.disabled = false);
}

function changeButtonColors(buttons) {
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


