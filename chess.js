let selected;
let pieces = [];
let board;
let boardData;
let moveArray = [];
let lastRow;
let lastColl;
let moveRow;
let moveColl;
let winner = 0;
const PIECES = [" r", " kn", " b", " q", " k", " b", " kn", " r"]
const knightMoves = [[-2, -1, 1], [2, -1, 1],]
let checked = 0;
class BoardData {
    constructor(pieces) {
        this.pieces = pieces;
    }
    getPiece(row, coll) {
        for (const piece of this.pieces) {
            if (piece.row === row && piece.coll === coll) {
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
    removePiece(row, coll) {
        console.log("hey");
        for (let i = 0; i < pieces.length; i++) {
            let piece = pieces[i];
            if (piece.row === row && piece.coll === coll) {
                console.log("hello");
                pieces.splice(i, 1);
            }
        }
    }

    possibleMove(row, coll) {
        const piece = this.getPiece(row, coll)
        if (piece !== undefined) {
            return piece.color;
        }
    }

    opositeColor(row, coll) {
        const piece = this.getPiece(row, coll)
        if (piece !== undefined) {
            if (piece.color === "white") {
                return "black";
            }
            else {
                return "white";
            }
        }
    }
    capture(row, coll) {
        const piece = boardData.getPiece(row, coll)
        if (piece !== undefined) {
            if (piece.type == " k") {
                winner++;
                popUp(this.opositeColor(piece.row, piece.coll));
            }
            console.log(pieces);
            this.removePiece(row, coll);
            removeImage(board.rows[row].cells[coll]);
            console.log(pieces);
        }
    }
}
class Piece {
    constructor(row, coll, type, color) {
        this.row = row;
        this.coll = coll;
        this.type = type;
        this.color = color;
    }
}
function tryMove(row, coll, piece) {
    moveArray = [];
    if (piece.type === " r") {
        getRookMoves(row, coll, moveArray);
    }
    else if (piece.type === " q") {
        getQueenMoves(row, coll, moveArray);
    }
    else if (piece.type === " b") {
        getBishopMoves(row, coll, moveArray);
    }
    else if (piece.type === " p" && piece.color === "white") {
        getWhitePawnMoves(row, coll, moveArray);
    }
    else if (piece.type === " p" && piece.color === "black") {
        getBlackPawnMoves(row, coll, moveArray);
    }
    else if (piece.type === " k") {
        getKingMoves(row, coll, moveArray);
    }
    else if (piece.type === " kn") {
        getKnightMoves(row, coll, moveArray);
    }
}

function cellClick(e, row, coll) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.rows[i].cells[j].classList.remove('possible-move');
            if (selected !== undefined) {
                selected.classList.remove('clicked');
            }
        }
    }
    selected = e.currentTarget;
    selected.classList.add('clicked');
    if (winner === 0) {
        const piece = boardData.getPiece(row, coll)
        if (piece !== undefined) {
            if (boardData.turn(piece) === piece.color) {
                tryMove(row, coll, piece);
            }
        }

        for (let move of moveArray) {
            moveRow = parseInt(move.id.charAt(0));
            moveColl = parseInt(move.id.charAt(2));
            if (moveRow === row && moveColl === coll) {
                const piece = boardData.getPiece(lastRow, lastColl)
                if (piece !== undefined) {
                    if (boardData.turn(piece) === piece.color) {
                        boardData.capture(row, coll);

                    }
                }
                checked++;
                piece.row = row;
                piece.coll = coll;
                getImage(board.rows[piece.row].cells[piece.coll], piece.color, piece.type);
                removeImage(board.rows[lastRow].cells[lastColl]);
            }
        }

        lastRow = row;
        lastColl = coll;
    }
}

function getImage(cell, type, kind) {
    const image = document.createElement("img");
    image.src = "pieces/" + type + kind + ".png";
    cell.appendChild(image);
}
function removeImage(cell) {
    cell.removeChild(cell.getElementsByTagName("img")[0]);

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
            cell.addEventListener('click', (e) => cellClick(e, t, i));
            board.appendChild(row);
            row.appendChild(cell);
            cell.id = t + "-" + i;
        }
        body.appendChild(board);
    }
    boardData = new BoardData(getInitialBoard());
    pieces = getInitialBoard();
    for (let piece of pieces) {
        getImage(board.rows[piece.row].cells[piece.coll], piece.color, piece.type);
    }
}
window.addEventListener('load', createChessBoard);


