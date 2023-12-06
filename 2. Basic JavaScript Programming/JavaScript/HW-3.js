const rounds = parseInt(prompt("How many rounds?"));
playGame(rounds);

function playGame(rounds) {
    const player1 = {name: "X", points: 0};
    const player2 = {name: "O", points: 0};
    for (let round = 0; round < rounds; round++) {
        alert("next round!");
        const board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        for (let i = 0; i < 9; i++) {
            if (i % 2 == 0) {
                const pos = getUserInput();
                updateBoard(board, pos, player1.name);
                drawBoard(board);
                if (gameOver(board)) {
                    player1.points++;
                    console.log(`Game Over: player1 won!`);
                    break;
                }
            } else {
                const pos = getUserInput();
                updateBoard(board, pos, player2.name);
                drawBoard(board);
                if (gameOver(board)) {
                    player2.points++;
                    console.log(`Game Over: player2 won!`);
                    break;
                }
            }
            console.clear();     
        }
    }
    if (player1.points > player2.points) {
        console.log(`Game Over: player1 won ${player1.points} points!`);
    }
    else {
        console.log(`Game Over: player2 won ${player2.points} points!`);
    }
}

function getUserInput() {
    const input = prompt("Give me a number between 1 and 9");
    const nr = parseInt(input);
    if (isNaN(nr) || nr < 1 || nr > 9) {
        throw Error(`Not number between 1-9: ${input}`);
    }
    return nr;
}

function updateBoard(board, position, player) {
    if (position < 1 || position > 9) {
        throw Error(`Only number between 1-9 is allowed.`); 
    }
    const row = Math.floor((position - 1) / 3);
    const col = (position - 1) % 3;
    board[row][col] = player;
}

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

