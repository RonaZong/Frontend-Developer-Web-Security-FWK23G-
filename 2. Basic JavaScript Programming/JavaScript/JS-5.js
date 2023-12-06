// Exercise
let blog = [];
function addBlogEntry(tags, entry) {
    blog.push({tags, entry});
}

addBlogEntry();


const processObject1 = {
    stove: function (time, ingredient) {
      console.log(`fry ${ingredient} for ${time}`);
    },
    owen: function (time, ingredient) {
      console.log(`put in ${ingredient} in oven for ${time}`);
    },
    grill: function (time, ingredient) {
      console.log(`grill ${ingredient} for ${time}`);
    },
};
  
const ingredients1 = {
    stove: ["steak", "egg", "onions"],
    owen: ["chicken", "bread dough"],
    grill: ["samon"],
};
  
processObject1.stove("5 min", ingredients1.stove[1]);
processObject1.stove("3 min", ingredients1.grill[0]);
  
processObject1["stove"]("5 min", ingredients1["stove"][1]);
processObject1["grill"]("3 min", ingredients1["grill"][0]);


const abba = ["agneta", "björn", "benny", "annefrid"];

// forEach
abba.forEach(function (elem) {
  if (elem === "agneta" || elem === "annefrid") {
    console.log(elem);
  }
});

// map
function capitalize(name) {
  return name.toUpperCase();
}
const capitalizedAbba = abba.map(capitalize);
console.log(capitalizedAbba);

// filter
function isFemale(name) {
  return name === "agneta" || name === "annefrid";
}
const femalesOnly = abba.filter(isFemale);
console.log(femalesOnly);

// indexOf
console.log(abba.indexOf("benny"));






  
  function playGame(rounds) {
    const playerX = {
      name: "X",
      points: 0,
    };
    const playerO = {
      name: "O",
      points: 0,
    };
  
    for (let round = 0; round < rounds; round++) {
      // Game loop
      for (let i = 0; i < 9; i++) {
        player = switchPlayer(player); // "X" eller "O"
        const pos = getUserInput(); // 1 - 9
        updateBoard(board, pos, player); // uppdatera brädan
        console.clear(); // refresh
        drawBoard(board); // rita brädan
        if (gameOver(board)) {
          // Har någon vunnit?
          if (playerX.name === player) {
            playerX.points++;
          }
          if (playerO.name === player) {
            playerO.points++;
          }
          console.log(`Game Over: player ${player} won!`);
          break; // avbryt i förtid
        }
      }
    }
    if (playerX.points > playerO.points) {
      console.log("Player X won");
    } else if (playerO.points > playerX.points) {
      console.log("Player O won");
    } else {
      console.log("Its a draw");
    }
  }
  
  const choosenRounds = parseInt(prompt("hur många rundor?")); // NaN
  playGame(choosenRounds);
