let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You won! Rocks beats Scissors");
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You won! Paper beats rock");
    humanScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    console.log("Its a Draw!");
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You won! Scissors beats Paper");
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
    choice = "Scissors";
  }
  return choice;
}

function getHumanChoice() {
  let choice;
  const validChoices = ["Scissors", "Rock", "Paper"];
  while (true) {
    choice = prompt("Whats your choice between, rock paper and scissors?");
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
  for (var round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
  }
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
