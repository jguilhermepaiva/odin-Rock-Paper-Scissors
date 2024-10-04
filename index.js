let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");


rockButton.addEventListener("click", () => {
  alert("Hello World");
});
paperButton.addEventListener("click", () => {
  alert("Hello World");
});
scissorButton.addEventListener("click", () => {
  alert("Hello World");
});


function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
    console.log("You won! Rocks beats Scissor");
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
    console.log("You lose! Scissor beats Paper");
    computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You won! Paper beats rock");
    humanScore++;
  } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
    console.log("You lose! Rock beats Scissor");
    computerScore++;
  } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
    console.log("You won! Scissor beats Paper");
    humanScore++;
  }
  return humanScore, computerScore;
}

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  let choice;
  if (number == 1) {
    choice = "Rock";
  } else if (number == 2) {
    choice = "Paper";
  } else {
    choice = "Scissor";
  }
  return choice;
}

function getHumanChoice() {
  let choice;
  const validChoices = ["Scissor", "Rock", "Paper"];
  while (true) {
    choice = prompt("Whats your choice between, rock paper and scissor?");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    if (validChoices.includes(choice)) {
      break;
    } else {
      window.alert("Please enter a valid input");
    }
  }
  return choice;
}

function playGame() {
  // for (var round = 0; round < 5; round++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);

  if (round == 5) {
    if (humanScore > computerScore) {
      console.log("The winner is: Human with " + humanScore + " points!");
    } else if (humanScore < computerScore) {
      console.log("The winner is: Computer with " + computerScore + " points!");
    } else {
      console.log("The game ends with a draw!");
    }
  }
}

playGame();
