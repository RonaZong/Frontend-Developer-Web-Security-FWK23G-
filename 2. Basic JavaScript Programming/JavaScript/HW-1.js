function switchPlayer(sign) {
    if (sign === "X") {
        return "O";
    } else if (sign === "O") {
        return "X";
    } else {
        throw Error(`No such sign: ${sign}, please use "X" or "O"`);
    }
}
const player = switchPlayer("X");
console.log(player); // => O

function getUserInput() {
    const input = prompt("Give me a number between 1 and 9");
    const nr = parseInt(input);
    if (isNaN(nr) || nr < 1 || nr > 9) {
        throw Error(`Not number between 1-9: ${input}`);
    } else {
        return nr;
    }
}
const nr = getUserInput();

function drawMatrix(position, player) {
    console.log("__________");
    if (position === 1) {
        console.log(`|_${player}_|___|___|`);
        console.log("|___|___|___|");
        console.log("|___|___|___|");
    } else if (position === 2) {
        console.log(`|___|_${player}_|___|`);
        console.log("|___|___|___|");
        console.log("|___|___|___|");
    } else if (position === 3) {
        console.log(`|___|___|_${player}_|`);
        console.log("|___|___|___|");
        console.log("|___|___|___|");
    } else if (position === 4) {
        console.log("|___|___|___|");
        console.log(`|_${player}_|___|___|`);
        console.log("|___|___|___|");
    } else if (position === 5) {
        console.log("|___|___|___|");
        console.log(`|___|_${player}_|___|`);
        console.log("|___|___|___|");
    } else if (position === 6) {
        console.log("|___|___|___|");
        console.log(`|___|___|_${player}_|`);
        console.log("|___|___|___|");
    } else if (position === 7) {
        console.log("|___|___|___|");
        console.log("|___|___|___|");
        console.log(`|_${player}_|___|___|`);
    } else if (position === 8) {
        console.log("|___|___|___|");
        console.log("|___|___|___|");
        console.log(`|___|_${player}_|___|`);
    } else if (position === 9) {
        console.log("|___|___|___|");
        console.log("|___|___|___|");
        console.log(`|___|___|_${player}_|`);
    } else {
        throw Error("Wrong input: " + position);
    }
}

drawMatrix(8, "X");
drawMatrix(6, "O");

