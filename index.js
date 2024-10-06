let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const score = document.querySelector(".score");
const result = document.querySelector(".result");



rockButton.addEventListener("click", () => {
  const humanSelection = "Rock";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
});
paperButton.addEventListener("click", () => {
  const humanSelection = "Paper";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
});
scissorButton.addEventListener("click", () => {
  const humanSelection = "Scissor";
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
});

function playRound(humanChoice, computerChoice) {

  if (humanChoice == "Rock" && computerChoice == "Rock" && (computerScore <5 && humanScore <5)) {
    result.textContent = "Its a Draw!";
  } else if (humanChoice == "Rock" && computerChoice == "Paper" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissor" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You won! Rocks beats Scissor";
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Paper" && (computerScore<5 && humanScore <5)) {
    result.textContent = "Its a Draw!";
  } else if (humanChoice == "Paper" && computerChoice == "Scissor" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You lose! Scissor beats Paper";
    computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You won! Paper beats rock";
    humanScore++;
  } else if (humanChoice == "Scissor" && computerChoice == "Scissor" && (computerScore<5 && humanScore <5)) {
    result.textContent = "Its a Draw!";
  } else if (humanChoice == "Scissor" && computerChoice == "Rock" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You lose! Rock beats Scissor";
    computerScore++;
  } else if (humanChoice == "Scissor" && computerChoice == "Paper" && (computerScore<5 && humanScore <5)) {
    result.textContent = "You won! Scissor beats Paper";
    humanScore++;
  }
  if (computerScore == 5) {
    result.textContent = "The winner is: Computer with " + computerScore + " points!";
    return;
  } else if (humanScore == 5) {
    result.textContent = "The winner is: Human with " + humanScore + " points!";
    return;
  }
  
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

// function getHumanChoice() {
//   let choice;
//   const validChoices = ["Scissor", "Rock", "Paper"];
//   while (true) {
//     choice = prompt("Whats your choice between, rock paper and scissor?");
//     choice = choice.charAt(0).toUpperCase() + choice.slice(1);
//     if (validChoices.includes(choice)) {
//       break;
//     } else {
//       window.alert("Please enter a valid input");
//     }
//   }
//   return choice;
// }

//  function playGame() {
//    for (var round = 0; round < 5; round++) {
//    const humanSelection = getHumanChoice();
//    const computerSelection = getComputerChoice();

//    playRound(humanSelection, computerSelection);
//    console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
//    }
//    if (round == 5) {
//      if (humanScore > computerScore) {
//        console.log("The winner is: Human with " + humanScore + " points!");
//      } else if (humanScore < computerScore) {
//        console.log("The winner is: Computer with " + computerScore + " points!");
//      } else {
//        console.log("The game ends with a draw!");
//      }
//    }
//  }

//  playGame();
