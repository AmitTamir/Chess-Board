let selected;
let pieces = [];
let board;


class piece {
    constructor(row, coll, type, color) {
        this.row = row;
        this.coll = coll;
        this.type = type;
        this.color = color;
    }
}
function cellClick(e, row, coll) {
    if (selected !== undefined) {
        selected.classList.remove('clicked');
    }
    console.log(row, coll);
    selected = e.currentTarget;
    selected.classList.add('clicked');


    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.rows[i].cells[j].classList.remove('possible-move');
        }
    }

    for (let piece of pieces) {
        if (piece.row === row && piece.coll === coll) {
            if (piece.type === " r") {
                let possibleMoves = getRookMoves(row, coll);
            }
            else if (piece.type === " q") {
                let possibleMoves = getQueenMoves(row, coll);
            }
            else if (piece.type === " b") {
                let possibleMoves = getBishopMoves(row, coll);
            }
            else if (piece.type === " p" && piece.color === "white") {
                let possibleMoves = getWhitePawnMoves(row, coll);
            }
            else if (piece.type === " p" && piece.color === "black") {
                let possibleMoves = getBlackPawnMoves(row, coll);
            }
            else if (piece.type === " k") {
                let possibleMoves = getKingMoves(row, coll);
            }
        }
    }
}
function getQueenMoves(row, coll) {
    const moveArray = [];
    let temp1 = coll + 1;
    let temp2 = coll - 1;
    for (let i = row - 1; i > -1; i--) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${i}-${temp1}`));
            document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${i}-${temp2}`));
            document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = row + 1; i < 8; i++) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${i}-${temp1}`));
            document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${i}-${temp2}`));
            document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = 0; i < 7; i++) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${row}-${temp1}`));
            document.getElementById(`${row}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${row}-${temp2}`));
            document.getElementById(`${row}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    temp1 = row + 1;
    temp2 = row - 1;
    for (let i = 0; i < 7; i++) {
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${temp2}-${coll}`));
            document.getElementById(`${temp2}-${coll}`).classList.add("possible-move");
        }
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${temp1}-${coll}`));
            document.getElementById(`${temp1}-${coll}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    return moveArray;
}

function getWhitePawnMoves(row, coll) {
    const moveArray = [];
    console.log("white pawn moves");
    moveArray.push(document.getElementById(`${row - 1}-${coll}`));
    moveArray.push(document.getElementById(`${row - 2}-${coll}`));
    document.getElementById(`${row - 1}-${coll}`).classList.add("possible-move");
    document.getElementById(`${row - 2}-${coll}`).classList.add("possible-move");
    return moveArray;
}
function getBlackPawnMoves(row, coll) {
    const moveArray = [];
    console.log("black pawn moves");
    moveArray.push(document.getElementById(`${row + 1}-${coll}`));
    moveArray.push(document.getElementById(`${row + 2}-${coll}`));
    document.getElementById(`${row + 1}-${coll}`).classList.add("possible-move");
    document.getElementById(`${row + 2}-${coll}`).classList.add("possible-move");
    return moveArray;
}
function getKingMoves(row, coll) {
    const moveArray = [];
    console.log("King moves");
    let temp1 = coll + 1;
    let temp2 = coll - 1;
   
    
    return moveArray;
}
function getBishopMoves(row, coll) {
    const moveArray = [];
    let temp1 = coll + 1;
    let temp2 = coll - 1;
    for (let i = row - 1; i > -1; i--) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${i}-${temp1}`));
            document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${i}-${temp2}`));
            document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = row + 1; i < 8; i++) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${i}-${temp1}`));
            document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${i}-${temp2}`));
            document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    return moveArray;
}
function getRookMoves(row, coll) {
    console.log("rock moves");
    const moveArray = [];
    temp1 = coll + 1;
    temp2 = coll - 1;
    for (let i = 0; i < 7; i++) {
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${row}-${temp1}`));
            document.getElementById(`${row}-${temp1}`).classList.add("possible-move");
        }
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${row}-${temp2}`));
            document.getElementById(`${row}-${temp2}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
    }
    temp1 = row + 1;
    temp2 = row - 1;
    for (let i = 0; i < 7; i++) {
        if (temp2 > -1) {
            moveArray.push(document.getElementById(`${temp2}-${coll}`));
            document.getElementById(`${temp2}-${coll}`).classList.add("possible-move");
        }
        if (temp1 < 8) {
            moveArray.push(document.getElementById(`${temp1}-${coll}`));
            document.getElementById(`${temp1}-${coll}`).classList.add("possible-move");
        }
        temp1++;
        temp2--;
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

function createChessBoard() {
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
    pieces = getInitialBoard();
    for (let piece of pieces) {
        getImage(board.rows[piece.row].cells[piece.coll], piece.color, piece.type);
    }
}
window.addEventListener('load', createChessBoard);

