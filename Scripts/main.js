// console.log('Working');
let Score = JSON.parse(localStorage.getItem("Score")) || {
  Win: 0,
  Loose: 0,
  Tie: 0,
};
updateScore(Score);
// how Computer Choose its move or change
const computerMoves = () => {
  let theMoveis = "";
  let randomMoveByAI = Math.floor(Math.random() * 3); // usign math not using boolen approch
  // console.log(randomMoveByAI); // print number
  if (randomMoveByAI === 0) {
    theMoveis = "Rock";
  } else if (randomMoveByAI === 1) {
    theMoveis = "Paper";
  } else if (randomMoveByAI === 2) {
    theMoveis = "Scissor";
  }
  console.log(theMoveis); // print computer moves
  return theMoveis;
};

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    myMoves("rock");
  } else if (event.key === "p") {
    myMoves("paper");
  } else if (event.key === "s") {
    myMoves("scissors");
  }
});

// how I choose my move or chance
const myMoves = (Emoji) => {
  let result = "";
  let theMoveis = computerMoves();

  if (Emoji === "Rock") {
    if (theMoveis === "Rock") {
      result = "Its A Tie";
    } else if (theMoveis === "Paper") {
      result = "You Loose";
    } else if (theMoveis === "Scissor") {
      result = "You Win";
    }
  } else if (Emoji === "Paper") {
    if (theMoveis === "Rock") {
      result = "You Win";
    } else if (theMoveis === "Paper") {
      result = "Its A Tie";
    } else if (theMoveis === "Scissor") {
      result = "You Loose";
    }
  } else if (Emoji === "Scissor") {
    if (theMoveis === "Rock") {
      result = "You Loose";
    } else if (theMoveis === "Paper") {
      result = "You Win";
    } else if ((theMoveis = "Scissor")) {
      result = "Its A Tie";
    }
  }

  if (result === "You Win") {
    Score.Win += 1;
  } else if (result === "You Loose") {
    Score.Loose += 1;
  }
  if (result === "Its A Tie") {
    Score.Tie += 1;
  }
  localStorage.setItem("Score", JSON.stringify(Score));
  //console.log(result);
  displayResult(result, Score, theMoveis);
  updateScore(Score);
  
};
function updateScore(Score) {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Your Score : ${Score.Win} <br> Computer Score : ${Score.Loose}`;

}
function displayResult(result, Score, theMoveis) {
  document.querySelector(".js-result").innerHTML = `Outcome : ${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `Computer Choose : ${theMoveis} <br> 
    You Loose : ${Score.Loose} <br> Tie : ${Score.Tie} `;
    
}
function gamerefresh() {
    location.reload()
    // console.log('working');
}
