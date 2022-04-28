let selected;
let pieces = [];
let board;
let boardData;
let moveArray = [];
let lastRow;
let lastCol;
let moveRow;
let moveColl;
let winner = 0;
const PIECES = [" r", " kn", " b", " q", " k", " b", " kn", " r"]
// const knightMoves = [[-2, -1, 1], [2, -1, 1],]
let checked = 0;
class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
  }
  getPiece(row, col) {
    for (const piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }
  turn() {
    if (checked % 2 === 0) {
      return "white";
    }
    else {
      return "black";
    }
  }
  removePiece(row, col) {
    for (let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i];
      if (piece.row === row && piece.col === col) {
        // Remove piece at index i
        this.pieces.splice(i, 1);
        console.log(this.pieces);
        console.log(piece);
      }
    }
  }
  possibleMove(row, col) {
    const piece = this.getPiece(row, col)
    if (piece !== undefined) {
      return piece.color;
    }
  }
  opositeColor(row, col) {
    const piece = this.getPiece(row, col)
    if (piece !== undefined) {
      if (piece.color === "white") {
        return "black";
      }
      else {
        return "white";
      }
    }
  }
  capture(row, col) {
    console.log("hey");
    const piece = boardData.getPiece(row, col)
    if (piece !== undefined) {
      if (piece.type == " k") {
        winner++;
        popUp(this.opositeColor(piece.row, piece.col));
      }
      board.rows[row].cells[col].innerHTML = "";
      this.removePiece(row, col);
    }
  }
}
class Piece {
  constructor(row, col, type, color) {
    this.row = row;
    this.coll = col;
    this.type = type;
    this.color = color;
  }
}
function tryMove(row, col, piece) {
  moveArray = [];
  if (piece.type === " r") {
    getRookMoves(row, col, moveArray);
  }
  else if (piece.type === " q") {
    getQueenMoves(row, col, moveArray);
  }
  else if (piece.type === " b") {
    getBishopMoves(row, col, moveArray);
  }
  else if (piece.type === " p" && piece.color === "white") {
    getWhitePawnMoves(row, col, moveArray);
  }
  else if (piece.type === " p" && piece.color === "black") {
    getBlackPawnMoves(row, col, moveArray);
  }
  else if (piece.type === " k") {
    getKingMoves(row, col, moveArray);
  }
  else if (piece.type === " kn") {
    getKnightMoves(row, col, moveArray);
  }
}
function cellClick(row, col) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.rows[i].cells[j].classList.remove('possible-move');
      board.rows[i].cells[j].classList.remove('clicked');
    }
  }
  selected = board.rows[row].cells[col];
  selected.classList.add('clicked');
  if (winner === 0) {
    const piece = boardData.getPiece(row, col)
    if (piece !== undefined) {
      if (boardData.turn(piece) === piece.color) {
        tryMove(row, col, piece);
      }
    }
    for (let move of moveArray) {
      moveRow = parseInt(move.id.charAt(0));
      moveCol = parseInt(move.id.charAt(2));
      if (moveRow === row && moveCol === col) {
        const piece = boardData.getPiece(lastRow, lastCol)
        console.log(piece);
        if (piece !== undefined) {
          if (boardData.turn() === piece.color) {
            boardData.capture(row, col, piece);
            checked++;
            piece.row = moveRow;
            piece.coll = moveCol;
            getImage(board.rows[piece.row].cells[piece.col], piece.color, piece.type);
            board.rows[lastRow].cells[lastCol].innerHTML = "";
          }
        }
      }
    }
    lastRow = row;
    lastCol = col;
  }
}

function getImage(cell, type, kind) {
  const image = document.createElement("img");
  image.src = "pieces/" + type + kind + ".png";
  cell.appendChild(image);
}
function popUp(color) {
  const winnerPopUp = document.createElement("div");
  winnerPopUp.textContent = color + " wins";
  winnerPopUp.classList.add("popUp")
  board.appendChild(winnerPopUp);
}
function getInitialBoard() {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(new Piece(1, i, " p", "black"));
    result.push(new Piece(6, i, " p", "white"));
    result.push(new Piece(0, i, PIECES[i], "black"));
    result.push(new Piece(7, i, PIECES[i], "white"));
  }
  return result;
}
function createChessBoard() {
  const body = document.getElementsByTagName("body")[0];
  board = document.createElement("table");
  board.className = "board";
  for (let t = 0; t < 8; t++) {
    let row = document.createElement('tr');
    for (let i = 0; i < 8; i++) {
      let cell = document.createElement('td');
      if ((t + i) % 2 === 0) {
        cell.className = "light";
      }
      else {
        cell.className = "dark";
      }
      cell.addEventListener('click', () => cellClick(t, i));
      board.appendChild(row);
      row.appendChild(cell);
      cell.id = t + "-" + i;
    }
    body.appendChild(board);
  }
  boardData = new BoardData(getInitialBoard());
  pieces = getInitialBoard();
  for (let piece of pieces) {
    getImage(board.rows[piece.row].cells[piece.col], piece.color, piece.type);
  }
}
window.addEventListener('load', createChessBoard);