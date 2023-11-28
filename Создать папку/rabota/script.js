import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
setupInputOnce();


function setupInputOnce() {
  window.addEventListener("keydown", handleInput, { once: true });
}

async function handleInput(event) {
  switch (event.key) {
    case "ArrowUp":
      if (!canMoveUp()) {
        setupInputOnce();
        return;
      }
      await moveUp();
      break;
    case "ArrowDown":
      if (!canMoveDown()) {
        setupInputOnce();
        return;
      }
      await moveDown();
      break;
    case "ArrowLeft":
      if (!canMoveLeft()) {
        setupInputOnce();
        return;
      }
      await moveLeft();
      break;
    case "ArrowRight":
      if (!canMoveRight()) {
        setupInputOnce();
        return;
      }
      await moveRight();
      break;
    default:
      setupInputOnce();
      return;
  }

  const newTile = new Tile(gameBoard);
  grid.getRandomEmptyCell().linkTile(newTile);

  if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
    await newTile.waitForAnimationEnd()
    alert("Try again!")
    return;
  }

  setupInputOnce();
}

async function moveUp() {
  await slideTiles(grid.cellsGroupedByColumn);
}

async function moveDown() {
  await slideTiles(grid.cellsGroupedByReversedColumn);
}

async function moveLeft() {
  await slideTiles(grid.cellsGroupedByRow);
}

async function moveRight() {
  await slideTiles(grid.cellsGroupedByReversedRow);
}

async function slideTiles(groupedCells) {
  const promises = [];

  groupedCells.forEach(group => slideTilesInGroup(group, promises));

  await Promise.all(promises);
  grid.cells.forEach(cell => {
    cell.hasTileForMerge() && cell.mergeTiles()
  });
}

function slideTilesInGroup(group, promises) {
  for (let i = 1; i < group.length; i++) {
    if (group[i].isEmpty()) {
      continue;
    }

    const cellWithTile = group[i];

    let targetCell;
    let j = i - 1;
    while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
      targetCell = group[j];
      j--;
    }

    if (!targetCell) {
      continue;
    }

    promises.push(cellWithTile.linkedTile.waitForTransitionEnd());

    if (targetCell.isEmpty()) {
      targetCell.linkTile(cellWithTile.linkedTile);
    } else {
      targetCell.linkTileForMerge(cellWithTile.linkedTile);
    }

    cellWithTile.unlinkTile();
  }
}

function canMoveUp() {
  return canMove(grid.cellsGroupedByColumn);
}

function canMoveDown() {
  return canMove(grid.cellsGroupedByReversedColumn);
}

function canMoveLeft() {
  return canMove(grid.cellsGroupedByRow);
}

function canMoveRight() {
  return canMove(grid.cellsGroupedByReversedRow);
}

function canMove(groupedCells) {
  return groupedCells.some(group => canMoveInGroup(group));
}

function canMoveInGroup(group) {
  return group.some((cell, index) => {
    if (index === 0) {
      return false;
    }

    if (cell.isEmpty()) {
      return false;
    }

    const targetCell = group[index - 1];
    return targetCell.canAccept(cell.linkedTile);
  });
}
var modal1 = document.getElementById("modal1");
  var btn1 = document.getElementById("myBtn1");
  var span = document.getElementsByClassName("close")[0];
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal1.style.display = "none";
  }
})
var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal2.style.display = "none";
  }
})
var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal3.style.display = "none";
  }
})
var modal4 = document.getElementById("modal4");
var btn4 = document.getElementById("myBtn4");
var span = document.getElementsByClassName("close")[0];
btn4.onclick = function() {
  modal4.style.display = "block";
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal4.style.display = "none";
  }
})
var modal5 = document.getElementById("modal5");
var btn5 = document.getElementById("myBtn5");
var span = document.getElementsByClassName("close")[0];
btn5.onclick = function() {
  modal5.style.display = "block";
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal5.style.display = "none";
  }
})