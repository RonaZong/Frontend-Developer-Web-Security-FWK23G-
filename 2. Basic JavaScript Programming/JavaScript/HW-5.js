// displays in DOM node playerDisplay the current players turn
// tip use player.mark (1 or 2) and display that in the <span (innerHTML)
// remove previous class (.player1 or .player2)
// add new class (.player${player.mark})

function displayTurn(player) {
    /* TODO */

}
  
// given a tile (DOM node) returns that tiles row and col position in grid
// ex: <div class="tile" data-row="1" data-col="2"></div> => { row: 1, col: 2 }
// tip: use tile.getAttribute
function getCoordinates(tile) {
    /* TODO */
}
/* usage: 
  const coord = getCoordinates(tiles[0]);
  console.log(coord); // { row: 0, col: 0 }
*/
  
// given a tile (DOM node) clears that tile in grid
// gets rid of .player1 and .player2 classes as well as clears innerHTML
function clearTile(tile) {
    /* TODO */
}
  
// clears the whole grid of with help of clearTile
// tip: use a for-loop over all tiles and call clearTile for each tile
function clearGrid() {
    /* TODO */
}




// clears all coordinates of ship in grid
// (tip: use getCoordinates, contains and clearTile)
function removeShip(ship) {
    // Pseudo code
    /*
      for tile in tiles
          coord = getCoordinates(tile)
          if ship contains coord
              clearTile(tile)
    */ 
  }
  /* usage:
  displayMarkersOnGrid([{row: 1, col: 2, marker: 1}, {row: 1, col: 3, marker: 1}, {row: 1, col: 4: marker: 1}])
  _____________________
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|1|1|1|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  removeShip([{row: 1, col: 2}, {row: 1, col: 3}, {row: 1, col: 4}]);
  // tar bort skepp från grid i htmlen
  _____________________
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  */
  
  // displays an array of markers on the grid. The markers coorinates
  // tells where to mark and the marker what to display on the grid
  //
  // Example input markers
  // [{ row: 1, col: 2, marker: 1 }, { row: 1, col: 3, marker: "X" }]
  //
  // displays 1 on position (1, 2) and "X" on position (1, 3) in grid
  // (tip: use addMark)
  function displayMarkersOnGrid(markers) {
    tiles.forEach((tile) => {
      const { row, col } = getCoordinates(tile);
      /* Pseudo code
      for marker in markers
        if marker.row == row and marker.col == col
            addMark(tile, marker.mark)
      */
      /* TODO */
    });
  }
  // usage:
  // displayMarkersOnGrid([{ row: 1, col: 2, marker: 1 }, { row: 1, col: 3, marker: "X" }])
  // Visar
  /*
  _____________________
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|1|X|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  |_|_|_|_|_|_|_|_|_|_|
  */

display.innerHTML = "hej";
display.classList.add("player2");
display.classList.remove("player2");