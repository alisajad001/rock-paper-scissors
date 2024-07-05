const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");
let userScore = 0;
let computerScore = 0;
let rounds = 0;
let userChoice;
let computerChoice;

// Get computer choice
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }

  return computerChoice;
};

// Get user choice
options.forEach((option) => {
  option.addEventListener("click", () => {
    userChoice = option.dataset.icon;

    getComputerChoice();
    determineWinner(userChoice, computerChoice);
    rounds++;
    updateScores();
  });
});

// Determine winner
const determineWinner = (user, computer) => {
  if (user === computer) {
    result.innerHTML = "It was a tie!";
    return;
  }

  switch (user) {
    case "Paper":
      switch (computer) {
        case "Rock":
          result.innerHTML = "User Wins!";
          userScore++;
          break;
        case "Scissors":
          result.innerHTML = "Computer Wins!";
          computerScore++;
          break;
      }
      break;

    case "Rock":
      switch (computer) {
        case "Scissors":
          result.innerHTML = "User Wins!";
          userScore++;
          break;
        case "Paper":
          result.innerHTML = "Computer Wins!";
          computerScore++;
          break;
      }
      break;

    case "Scissors":
      switch (computer) {
        case "Paper":
          result.innerHTML = "User Wins!";
          userScore++;
          break;
        case "Rock":
          result.innerHTML = "Computer Wins!";
          computerScore++;
          break;
      }
      break;

    default:
      result.innerHTML = "Invalid choice!";
  }
};

const updateScores = () => {
  document.querySelector(".user-score").innerHTML = userScore;
  document.querySelector(".computer-score").innerHTML = computerScore;
  document.querySelector(".rounds").innerHTML = rounds;
  document.querySelector(".computer-choice").innerHTML = computerChoice;

  if (rounds === 5) {
    if (userScore > computerScore) {
      result.innerHTML = "User won the game!";
      resetGame();
    } else {
      result.innerHTML = "Computer won the game!";
      resetGame();
    }
  }
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  document.querySelector(".user-score").innerHTML = userScore;
  document.querySelector(".computer-score").innerHTML = computerScore;
  document.querySelector(".rounds").innerHTML = rounds;
};
