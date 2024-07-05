const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const userScoreEl = document.querySelector(".user-score");
const computerScoreEl = document.querySelector(".computer-score");
const roundsEl = document.querySelector(".rounds");
const computerChoiceEl = document.querySelector(".computer-choice");

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

    options.forEach((opt) => opt.classList.remove("active"));

    option.classList.add("active");

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
  userScoreEl.innerHTML = userScore;
  computerScoreEl.innerHTML = computerScore;
  roundsEl.innerHTML = rounds;
  computerChoiceEl.innerHTML = computerChoice;

  if (rounds === 6) {
    if (userScore > computerScore) {
      alert("User won the game!");
    } else if (userScore < computerScore) {
      alert("Computer won the game!");
    } else {
      alert("The game is a tie!");
    }
    resetGame();
    return;
  }
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  updateScores();
  options.forEach((opt) => opt.classList.remove("active"));
  computerChoiceEl.innerHTML = "";
};
