// 1. Plocka fram
//  .tiles,
//  .display-player, (div för att visa nuvarande spelare)
//  #reset, (knapp för att starta om spel)
//  .announcer (div där vi visar vem som har vunnit)

let board = ["", "", "", "", "", "", "", "", ""]; // spelbräda
let currentPlayer = "X"; // nuvarande spelare
let isGameActive = true; // anger om spelet är slut eller inte

/*
  Index i board
  [0] [1] [2]
  [3] [4] [5]
  [6] [7] [8]
*/

// Vinst rader...
const winningConditions = [
  [0, 1, 2],
  // ...
  [2, 4, 6],
];

function isGameOver() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    // gå igenom alla möjliga vinst rader
    const winCondition = winningConditions[i];
    // plocka fram en vinstrad
    // och kontrollera om alla positioner är samma i board
    // ex: board[winCondition[0]] === board[winCondition[1]]
  }

  if (roundWon) {
    announce(currentPlayer); // nuvarande spelare har vunnit!
    isGameActive = false; // spelet är slut
  }
}

function announce(player) {
  switch (player) {
    case "X":
      // lägg in i announcer div en text att X har vunnit
      break;
    case "O":
      // lägg in i announcer div en text att O har vunnit
      break;
    default:
      // lägg in i announcer div en text att det blev lika
      break;
  }
  announcer.classList.remove("hide"); // visa an
}

function isValidAction(tile) {
  // returnera true om tile är tom dvs tile.innerHTML inte har "X" eller "O" redan
  // annars returnera false
}

function updateBoard(index, player) {
  // uppdatera bräd index med player ("X" eller "O")
}

function changePlayer() {
  // Om currentPlayer är "X"
  // 1. Ta bort .playerX (css class) från playerDisplay
  // 2. Byt currentPlayer till "O"
  // 3. Ändra playerDisplays inre html till currentPlayer ("O")
  // 4. Lägg till .playerO (css class) till playerDisplay
  //
  // Om currentPlayer är "O" ta bort .playerO (css class)
  // 1. Ta bort .playerO (css class) från playerDisplay
  // 2. Byt currentPlayer till "X"
  // 3. Ändra playerDisplays inre html till currentPlayer ("X")
  // 4. Lägg till .playerX (css class) till playerDisplay
}

const userAction = (tile, index) => {
  // Om klickad tile inte redan är ifylld med X eller O och spelet inte är över
  if (isValidAction(tile) && isGameActive) {
    // 1. Ändra inre text på tile med currentPlayer ("X" eller "O")
    // 2. Lägg till (currentPlayer) .playerX eller .playerO klass till tile
    // 3. Uppdatera brädan med (updateBoard)
    // 4. Kontrollera om nuvarande spelare har vunnit (isGameOver)
    // 5. Byt spelare
  }
};

const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  announcer.classList.add("hide");

  if (currentPlayer === "O") {
    changePlayer();
  }

  tiles.forEach((tile) => {
    tile.innerText = "";
    tile.classList.remove("playerX");
    tile.classList.remove("playerO");
  });
};

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => userAction(tile, index));
});

resetButton.addEventListener("click", resetBoard);
