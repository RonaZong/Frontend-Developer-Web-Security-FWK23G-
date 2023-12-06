let player = "X";
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

for (let i = 0; i < 9; i++) {
    player = switchPlayer(player);
    const pos = getUserInput();
    updateBoard(board, pos, player);
    drawBoard(board);
    console.clear();
    if (gameOver(board)) {
        console.log(`Game Over: player ${player} won!`);
        break;
    }
}

function switchPlayer(sign) {
    if (sign === "X") {
        return "O";
    } else if (sign === "O") {
        return "X";
    } else {
        throw Error(`No such sign: ${sign}, please use "X" or "O"`);
    }
}

function getUserInput() {
    const input = prompt("Give me a number between 1 and 9");
    const nr = parseInt(input);
    if (isNaN(nr) || nr < 1 || nr > 9) {
        throw Error(`Not number between 1-9: ${input}`);
    } else {
        return nr;
    }
}

function updateBoard(board, position, player) {
    if (position < 1 || position > 9) {
        throw Error(`Only number between 1-9 is allowed.`); 
    }
    const row = Math.floor((position - 1) / 3);
    const col = (position - 1) % 3;
    board[row][col] = player;
}
updateBoard(board, 8, "X"); // [2][1]
console.log(board);
updateBoard(board, 3, "O"); // [0][2]
console.log(board);

function drawBoard(board) {
    let textBoard = "_______\n";
    for (let row = 0; row < board.length; row++) {
        textBoard += "|";
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === null) {
                textBoard += "_|";
            } else {
                textBoard += `${board[row][col]}|`;
            }
        }
        textBoard += "\n"
    }
    console.log(textBoard);
}
drawBoard(board);

function gameOver(board) {
    if (board[0][0] !== null && board[0][0] == board[0][1] && board[0][0] == board[0][2]) {
        return true;
    }
    else if (board[1][0] !== null && board[1][0] == board[1][1] && board[1][0] == board[1][2]) {
        return true;
    }
    else if (board[2][0] !== null && board[2][0] == board[2][1] && board[2][0] == board[2][2]) {
        return true;
    }
    else if (board[0][0] !== null && board[0][0] == board[1][0] && board[0][0] == board[2][0]) {
        return true;
    }
    else if (board[0][1] !== null && board[0][1] == board[1][1] && board[0][1] == board[2][1]) {
        return true;
    }
    else if (board[0][2] !== null && board[0][2] == board[1][2] && board[0][2] == board[2][2]) {
        return true;
    }
    else if (board[0][0] !== null && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        return true;
    }
    else if (board[0][2] !== null && board[0][2] == board[1][1] && board[0][0] == board[2][0]) {
        return true;
    }
    else {
        return false;
    }
}

