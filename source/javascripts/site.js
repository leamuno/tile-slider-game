// This is where it all goes :)
console.log("site.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Select all the tiles
  const tiles = document.querySelectorAll('td');
  console.log("Tiles found:", tiles.length);

  const canMove = (tile) => {
    // TODO: Check if a tile has an empty neighbour
    const emptyTile = document.querySelector(".empty");
    const xOne = tile.cellIndex;
    const xTwo = emptyTile.cellIndex;
    const yOne = tile.parentElement.rowIndex;
    const yTwo = emptyTile.parentElement.rowIndex;
    return (((xTwo - xOne) ** 2) + ((yTwo - yOne) ** 2)) === 1;
  };

  const moveTile = (element) => {
    // TOOD: Move the tile
    const emptyTile = document.querySelector(".empty");
    emptyTile.innerText = element.innerText;
    element.innerText = "";
    element.classList.add("empty");
    emptyTile.classList.remove("empty");
  };

  const checkIfPlayerWins = () => {
    // TODO: Check if player has won
    const gameState = [];
    tiles.forEach((tile) => {
      gameState.push(tile.innerText);
    });
    if (gameState.join() === "1,2,3,4,5,6,7,8,") {
      alert("You win!");
    }
    if (gameState.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
      alert("You win!");
    }
    if (gameState.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,") {
      alert("You win!");
    }
  };

  // Add event listener on each tile - Do not change the following
  // Simple event listener to log tile clicks
  tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      console.log("Tile clicked:", tile.innerText);
      if (canMove(tile)) {
        moveTile(tile);
        checkIfPlayerWins();
      }
    });
  });
});
