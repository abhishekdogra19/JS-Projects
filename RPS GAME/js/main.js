var playerScore = 0;
var computerScore = 0;
function whoWin(pC, cC) {
  if (pC === "rock" && cC === "paper") {
    alert(`Computer wins ${cC} beats ${pC}`);
    computerScore++;
  } else if (pC === "paper" && cC === "scissors") {
    alert(`Computer wins ${cC} beats ${pC}`);
    computerScore++;
  } else if (pC === "scissors" && cC === "rock") {
    alert(`Computer wins ${cC} beats ${pC}`);
    computerScore++;
  } else if (cC === "rock" && pC === "paper") {
    alert(`You wins ${pC} beats ${cC}`);
    playerScore++;
  } else if (cC === "paper" && pC === "scissors") {
    alert(`You wins ${pC} beats ${cC}`);
    playerScore++;
  } else if (cC === "scissors" && pC === "rock") {
    alert(`You wins ${pC} beats ${cC}`);
    playerScore++;
  } else {
    alert("Tie Game");
  }
}

function checkScore() {
  alert("You: " + playerScore + " Computer: " + computerScore);
}

function computer_Choice() {
  let computer_option = ["rock", "paper", "scissors"];
  return computer_option[Math.floor(Math.random() * computer_option.length)];
}

function game() {
  let interested = confirm("Ready to play RPS Game") ? true : false;
  let forCounter = 1;
  if (interested) {
    alert("We Are Going To Play 5 Rounds\nLet's Begin..");
    for (let i = 0; i < 5; i++) {
      let playerOne_Choice = prompt(
        "Write your Choice \n1)Rock\n2)Paper\n3)Scissors"
      );
      if (playerOne_Choice === null || playerOne_Choice.trim() === "") {
        alert("Error !!\nYou didn't entered any value...");
        break;
      }
      playerOne_Choice = playerOne_Choice.trim().toLowerCase();
      if (
        playerOne_Choice !== "rock" &&
        playerOne_Choice !== "paper" &&
        playerOne_Choice !== "scissors"
      ) {
        alert("Error !!\nYou Entered Invalid value...");
        break;
      }
      let computer_selection = computer_Choice();
      whoWin(playerOne_Choice, computer_selection);
      checkScore();
      forCounter++;
    }
    if (forCounter === 5) {
      alert(
        playerScore > computerScore
          ? "You Wins"
          : playerScore == computerScore
          ? "Tie Game"
          : "Computer Wins"
      );
    }
  } else {
    alert("No Problem\nNext Time..");
  }
}

game();
