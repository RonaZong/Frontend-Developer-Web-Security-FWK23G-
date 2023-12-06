function switchPlayer(player) {
  if (player === "X") {
    return "O";
  } else if (player === "O") {
    return "X";
  } else {
    throw Error("No such player sign: " + player);
  }
}

function getUserInput() {
  const input = prompt("Choose position 1-9");
  const nr = parseInt(input);
  if (isNaN(nr) || nr < 1 || nr > 9) {
    throw Error("Only number 1-9 is valid");
  }
  return nr;
}

function updateBoard(board, position, player) {
  if (position < 1 || position > 9) {
    throw Error("Only nr between 1 - 9 is allowed");
  }
  const row = Math.floor((position - 1) / 3);
  const col = (position - 1) % 3;
  board[row][col] = player;
}

function drawBoard(board) {
  let textBoard = "_______\n";
  board.forEach(function (row) {
    textBoard += "|";
    row.forEach(function (cell) {
      if (cell === null) {
        textBoard += "_|";
      } else {
        textBoard += `${cell}|`;
      }
    });
    textBoard += "\n";
  });
  console.log(textBoard);
}

function areAllSame(cells) {
  const sum = cells.reduce(function (prev, next) {
    if (next === "X") {
      return prev - 1; // Om alla X är sum === -3
    } else if (next === "O") {
      return prev + 1; // Om alla O är sum === 3
    } else {
      return prev;
    }
  }, 0);
  return sum === 3 || sum === -3;
}

function gameOver(board) {
  const possibleStrikes = [
    // rader
    [...board[0]],
    [...board[1]],
    [...board[2]],
    // columner
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    // diagonaler
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  return possibleStrikes.some(areAllSame);
}

let player = "O";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Game loop
for (let i = 0; i < 9; i++) {
  player = switchPlayer(player); // "X" eller "O"
  const pos = getUserInput(); // 1 - 9
  updateBoard(board, pos, player);
  console.clear(); // refresh
  drawBoard(board);
  if (gameOver(board)) {
    console.log(`Game Over: player ${player} won!`);
    break;
  }
}
