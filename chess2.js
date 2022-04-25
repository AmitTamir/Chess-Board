let selected;
let pieces = [];
let board;
let boardData;
let moveArray = [];
let yRow;
let yColl;
class BoardData {
    constructor(pieces) {
        this.pieces = pieces;
    }
    getPiece(row, coll) {
        for (let piece of this.pieces) {
            if (piece.row === row && piece.col === coll) {
                return piece;
            }
        }
    }

    isEmpty(row, coll) {
        return this.getPiece(row, coll) === undefined;
    }

    isPlayer(row, coll, player) {
        let piece = this.getPiece(row, coll);
        return piece !== undefined && piece.player === player;
    }

    removePiece(row, coll) {
        for (let i = 0; i < this.pieces.length; i++) {
            let piece = this.pieces[i];
            if (piece.row === row && piece.col === coll) {
                // Remove piece at index i
                this.pieces.splice(i, 1);
            }
        }
    }
}
class piece {
    constructor(row, coll, type, color) {
        this.row = row;
        this.coll = coll;
        this.type = type;
        this.color = color;
    }
}
function possibleMove(row, coll) {
    let piece = getPiece(row, coll);
    return piece.color;
}
function opositeColor(row, coll) {
    const piece = getPiece(row, coll);
    if (piece.color === "white") {
        // console.log("black")
        return "black";
    }
    else {
        // console.log("white")
        return "white";


    }
}
function cellClick(e, row, coll) {
    if (selected !== undefined) {
        selected.classList.remove('clicked');
    }
    selected = e.currentTarget;
    selected.classList.add('clicked');

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.rows[i].cells[j].classList.remove('possible-move');
        }
    }
    for (let move of moveArray) {
        let xRow = parseInt(move.id.charAt(0));
        let xColl = parseInt(move.id.charAt(2));
        if (xRow === row && xColl === coll) {
            const piece = getPiece(yRow, yColl);
            console.log("hey");
            piece.row = xRow;
            piece.coll = xColl;
        }
    }
    yRow = row;
    yColl = coll;
    const piece = getPiece(row, coll);
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
    console.log(moveArray);
}


function getQueenMoves(row, coll, moveArray) {
    getBishopMoves(row, coll, moveArray);
    getRookMoves(row, coll, moveArray);
    return moveArray;
}

function getWhitePawnMoves(row, coll, moveArray) {
    for (let i = -1; i > -2; i--) {
        if (row + i > -1) {
            if (possibleMove(row + i, coll) === undefined) {
                moveArray.push(document.getElementById(`${row + i}-${coll}`));
                document.getElementById(`${row + i}-${coll}`).classList.add("possible-move");
            }

            else {
                break;
            }
        }
    }
    if (row - 1 > -1) {
        if (coll + 1 < 8) {
            if (possibleMove(row - 1, coll + 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll + 1}`));
                document.getElementById(`${row - 1}-${coll + 1}`).classList.add("possible-move");
            }
        }
        if (coll - 1 > -1) {
            if (possibleMove(row - 1, coll - 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll - 1}`));
                document.getElementById(`${row - 1}-${coll - 1}`).classList.add("possible-move");
            }
        }
    }
    return moveArray;
}
function getBlackPawnMoves(row, coll, moveArray) {
    for (let i = 1; i < 2; i++) {
        if (row + i < 8) {
            if (possibleMove(row + i, coll) === undefined) {
                moveArray.push(document.getElementById(`${row + i}-${coll}`));
                document.getElementById(`${row + i}-${coll}`).classList.add("possible-move");
            }
            else {
                break;
            }
        }
    }
    if (row + 1 < 8) {
        if (coll + 1 < 8) {
            if (possibleMove(row + 1, coll + 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll + 1}`));
                document.getElementById(`${row + 1}-${coll + 1}`).classList.add("possible-move");
            }
        }
        if (coll - 1 > -1) {
            if (possibleMove(row + 1, coll - 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll - 1}`));
                document.getElementById(`${row + 1}-${coll - 1}`).classList.add("possible-move");
            }
        }
    }
    return moveArray;
}
function getKingMoves(row, coll, moveArray) {
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (-1 < row + i && row + i < 8 && -1 < coll + j && coll + j < 8) {
                if (i !== 0 || j !== 0) {
                    if (possibleMove(row + i, coll + i) === undefined || possibleMove(row + i, coll + i) === opositeColor(row, coll)) {
                        console.log("King moves");
                        moveArray.push(document.getElementById(`${row + i}-${coll + j}`));
                        document.getElementById(`${row + i}-${coll + j}`).classList.add("possible-move");
                    }
                }
            }
        }
    }
    return moveArray;
}
function getKnightMoves(row, coll, moveArray) {
    if (row - 2 > -1) {
        if (coll - 1 > -1) {
            if (possibleMove(row - 2, coll - 1) === undefined || possibleMove(row - 2, coll - 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 2}-${coll - 1}`));
                document.getElementById(`${row - 2}-${coll - 1}`).classList.add("possible-move");
            }
        }
        if (coll + 1 < 8) {
            if (possibleMove(row - 2, coll + 1) === undefined || possibleMove(row - 2, coll + 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 2}-${coll + 1}`));
                document.getElementById(`${row - 2}-${coll + 1}`).classList.add("possible-move");
            }
        }
    }
    if (coll + 2 < 8) {
        if (row - 1 > -1) {
            if (possibleMove(row - 1, coll + 2) === undefined || possibleMove(row - 1, coll + 2) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll + 2}`));
                document.getElementById(`${row - 1}-${coll + 2}`).classList.add("possible-move");
            }
        }
        if (row + 1 < 8) {
            if (possibleMove(row + 1, coll + 2) === undefined || possibleMove(row + 1, coll + 2) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll + 2}`));
                document.getElementById(`${row + 1}-${coll + 2}`).classList.add("possible-move");
            }
        }
    }
    if (row + 2 < 8) {
        if (coll - 1 > -1) {
            if (possibleMove(row + 2, coll - 1) === undefined || possibleMove(row + 2, coll - 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 2}-${coll - 1}`));
                document.getElementById(`${row + 2}-${coll - 1}`).classList.add("possible-move");
            }
        }
        if (coll + 1 < 8) {
            if (possibleMove(row + 2, coll + 1) === undefined || possibleMove(row + 2, coll + 1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 2}-${coll + 1}`));
                document.getElementById(`${row + 2}-${coll + 1}`).classList.add("possible-move");
            }
        }
    }
    if (coll - 2 > -1) {
        if (row - 1 > -1) {
            if (possibleMove(row - 1, coll - 2) === undefined || possibleMove(row - 1, coll - 2) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll - 2}`));
                document.getElementById(`${row - 1}-${coll - 2}`).classList.add("possible-move");
            }
        }
        if (row + 1 < 8) {
            if (possibleMove(row + 1, coll - 2) === undefined || possibleMove(row + 1, coll - 2) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll - 2}`));
                document.getElementById(`${row + 1}-${coll - 2}`).classList.add("possible-move");
            }
        }
    }
    return moveArray;
}
function getBishopMoves(row, coll, moveArray) {
    let temp1 = coll + 1;
    let temp2 = coll - 1;
    let checked1 = 0;
    let checked2 = 0;
    for (let i = row - 1; i > -1; i--) {
        if (checked1 === 0) {
            if (temp1 < 8) {
                if (possibleMove(i, temp1) === undefined || possibleMove(i, temp1) === opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp1}`));
                    document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
                    if (possibleMove(i, temp1) === opositeColor(row, coll)) {
                        checked1++;
                    }
                }
                else {
                    checked1++;
                }
            }
        }
        if (checked2 === 0) {
            if (temp2 > -1) {
                if (possibleMove(i, temp2) === undefined || possibleMove(i, temp2) === opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp2}`));
                    document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
                    if (possibleMove(i, temp2) === opositeColor(row, coll)) {
                        checked2++;
                    }
                }
                else {
                    checked2++;
                }
            }
        }

        temp1++;
        temp2--;
    }
    temp1 = coll + 1;
    temp2 = coll - 1;
    checked1 = 0;
    checked2 = 0;
    for (let i = row + 1; i < 8; i++) {
        if (checked1 === 0) {
            if (temp1 < 8) {
                if (possibleMove(i, temp1) === undefined || possibleMove(i, temp1) === opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp1}`));
                    document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
                    if (possibleMove(i, temp1) === opositeColor(row, coll)) {
                        checked1++;
                    }
                }
                else {
                    checked1++;
                }
            }
        }
        if (checked2 === 0) {
            if (temp2 > -1) {
                if (possibleMove(i, temp2) === undefined || possibleMove(i, temp2) === opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp2}`));
                    document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
                    if (possibleMove(i, temp2) === opositeColor(row, coll)) {
                        checked2++;
                    }
                }
                else {
                    checked2++;
                }
            }
        }

        temp1++;
        temp2--;
    }
    return moveArray;
}
function getRookMoves(row, coll, moveArray) {
    console.log("rock moves");
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = 0; i < 7; i++) {
        if (temp1 < 8) {
            if (possibleMove(row, temp1) === undefined || possibleMove(row, temp1) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row}-${temp1}`));
                document.getElementById(`${row}-${temp1}`).classList.add("possible-move");
                if (possibleMove(row, temp1) === opositeColor(row, coll)) {
                    break;
                }
            }
            else {
                break;
            }
        }
        temp1++;
        temp2--;
    }
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = 0; i < 7; i++) {
        if (temp2 > -1) {
            if (possibleMove(row, temp2) === undefined || possibleMove(row, temp2) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row}-${temp2}`));
                document.getElementById(`${row}-${temp2}`).classList.add("possible-move");
                if (possibleMove(row, temp1) === opositeColor(row, coll)) {
                    break;
                }
            }
            else {
                break;
            }
        }
        temp1++;
        temp2--;
    }


    temp1 = row + 1;
    temp2 = row - 1;
    for (let i = 0; i < 7; i++) {
        if (temp2 > -1) {
            if (possibleMove(temp2, coll) === undefined || possibleMove(temp2, coll) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${temp2}-${coll}`));
                document.getElementById(`${temp2}-${coll}`).classList.add("possible-move");
                if (possibleMove(temp2, coll) === opositeColor(row, coll)) {
                    break;
                }
            }
            else {
                break;
            }
        }
        temp1++;
        temp2--;
    }

    temp1 = row + 1;
    temp2 = row - 1;
    for (let i = 0; i < 7; i++) {
        if (temp1 < 8) {
            if (possibleMove(temp1, coll) === undefined || possibleMove(temp1, coll) === opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${temp1}-${coll}`));
                document.getElementById(`${temp1}-${coll}`).classList.add("possible-move");
                if (possibleMove(temp1, coll) === opositeColor(row, coll)) {
                    break;
                }
            }
            else {
                break;
            }
            temp1++;
            temp2--;
        }
    }
    return moveArray;
}
function getImage(cell, type, kind) {
    const image = document.createElement("img");
    image.src = "pieces/" + type + kind + ".png";
    cell.appendChild(image);
}

function getInitialBoard() {
    let result = [];
    addPieces(result, 0, "black");
    addPieces(result, 7, "white");
    for (let i = 0; i < 8; i++) {
        result.push(new piece(1, i, " p", "black"));
        result.push(new piece(6, i, " p", "white"));
    }
    return result;
}
function addPieces(result, row, color) {
    result.push(new piece(row, 0, " r", color));
    result.push(new piece(row, 1, " kn", color));
    result.push(new piece(row, 2, " b", color));
    result.push(new piece(row, 3, " q", color));
    result.push(new piece(row, 4, " k", color));
    result.push(new piece(row, 5, " b", color));
    result.push(new piece(row, 6, " kn", color));
    result.push(new piece(row, 7, " r", color));
}

function initGame() {
    // Create list of pieces (32 total)
    boardData = new BoardData(getInitialBoard());
    createChessBoard(boardData);
}

function createChessBoard(boardData) {
    const body = document.getElementsByTagName("body")[0];
    board = document.createElement("table");
    board.className = "board";
    for (let t = 0; t < 8; t++) {
        let row = document.createElement('tr');
        for (let i = 0; i < 8; i++) {
            let cell = document.createElement('td');
            if (t % 2 === 0) {
                if (i % 2 === 0) {
                    cell.className = "light";
                }
                else {
                    cell.className = "dark";
                }
            }
            else {
                if (i % 2 === 0) {
                    cell.className = "dark";
                }
                else {
                    cell.className = "light";
                }
            }
            cell.addEventListener('click', (e) => cellClick(e, t, i));
            board.appendChild(row);
            row.appendChild(cell);
            cell.id = t + "-" + i;
        }
        body.appendChild(board);
    }
    // pieces = getInitialBoard();
    for (let piece of boardData.pieces) {
        getImage(board.rows[piece.row].cells[piece.coll], piece.color, piece.type);
    }
}
window.addEventListener('load', initGame);


