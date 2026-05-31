let choices = prompt("Please enter your choice: rock, paper, or scissors: ");
let computerScore = 0;
let yourScore = 0;
let rounds = 1;
const maxRounds = 5;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let roundNumber = "Round: " + rounds;

// fix the logic as currently, everything is fine, but the score and round numbers only update at the very last reponse. Take a look yourself//


    for(let i = 0; i < maxRounds; i++) {
        choices = prompt("Please enter your choice: rock, paper, or scissors: ");
        console.log("You chose: " + choices);
        console.log("Computer chose: " + getComputerChoice());

        if(getHumanChoice() === getComputerChoice()) {
        console.log("It's a tie!");
        rounds++;
        }

        if(getHumanChoice() === "rock" && getComputerChoice() === "scissors" 
        || getHumanChoice() === "paper" && getComputerChoice() === "rock"
        || getHumanChoice() === "scissors" && getComputerChoice() === "paper") {
            console.log("You win!");
            yourScore++;
            rounds++;
        } else {
            console.log("Computer wins!");
            computerScore++;
            rounds++;
        }
    }

function getComputerChoice() {
    let random = Math.random();

    if(random < 0.34) {
        return "rock";
    }
    else if(random <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    if (choices === "rock" || choices === "paper" || choices === "scissors") {
        return choices;
    }else {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
}
if(getHumanChoice() === getComputerChoice()) {
    console.log("It's a tie!");
    rounds++;
}
if(getHumanChoice() === "rock" && getComputerChoice() === "scissors" 
|| getHumanChoice() === "paper" && getComputerChoice() === "rock"
|| getHumanChoice() === "scissors" && getComputerChoice() === "paper") {
    console.log("You win!");
    yourScore++;
    rounds++;
} else {
    console.log("Computer wins!");
    computerScore++;
    rounds++;
}
if(rounds === 7) {
    if(yourScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if(computerScore > yourScore) {
        console.log("Computer wins the game! Better luck next time.");
    }else if (yourScore === computerScore) {
        console.log("It's a tie game!");
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());
console.log(roundNumber);
console.log("Your score: " + yourScore);
console.log("Computer score: " + computerScore);


