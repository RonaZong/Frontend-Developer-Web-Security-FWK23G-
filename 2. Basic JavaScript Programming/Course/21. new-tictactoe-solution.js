const tiles = document.querySelectorAll(".tile");
const displayPlayer = document.querySelector(".display-player");
const resetBtn = document.querySelector("#reset");
const announcer = document.querySelector(".announce");

let board = ["", "", "", "", "", "", "", "", ""]; // spelbräda
let currentPlayer = "X"; // nuvarande spelare
let isGameActive = true; // anger om spelet är slut eller inte

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function announce(player) {
  announcer.innerHTML = `Player ${player} has won!`;
  announcer.classList.remove("hide"); // visa announce
}

function isGameOver() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a !== "" && a === b && b === c) {
      roundWon = true;
    }
  }

  if (roundWon) {
    announce(currentPlayer); // nuvarande spelare har vunnit!
    isGameActive = false; // spelet är slut
  }
}

function isValidAction(tile) {
  return tile.innerHTML !== "X" || tile.innerHTML !== "O";
}

function updateBoard(index, player) {
  board[index] = player;
}

function changePlayer() {
  displayPlayer.classList.remove(`player${currentPlayer}`); // oldtimes
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  displayPlayer.innerText = currentPlayer; // newtimes
  displayPlayer.classList.add(`player${currentPlayer}`); // newtimes
}

function userAction(tile, index) {
  if (isValidAction(tile) && isGameActive) {
    tile.innerHTML = currentPlayer;
    tile.classList.add(`player${currentPlayer}`);
    updateBoard(index, currentPlayer);
    isGameOver();
    changePlayer();
  }
}

const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  announcer.classList.add("hide");
  if (currentPlayer === "O") {
    changePlayer();
  }
  tiles.forEach(function (tile) {
    tile.innerText = "";
    tile.classList.remove("playerX");
    tile.classList.remove("playerO");
  });
};

tiles.forEach((tile, index) => {
  tile.addEventListener("click", function () {
    userAction(tile, index);
  });
});

resetBtn.addEventListener("click", resetBoard);
