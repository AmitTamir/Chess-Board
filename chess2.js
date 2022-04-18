function getImage(cell, type, kind) {
    const image = document.createElement("img");
    image.src = "pieces/" + type + kind + ".png";
    cell.appendChild(image);
}
let selected;
let pieces = [];
function cellClick(e) {
    if (selected !== undefined) {
        selected.classList.remove('clicked');
    }

    const moveArray = [];
    let row = 1;
    let coll = 6;
    if (e.type === " b") {
        let temp1 = coll + 1;
        let temp2 = coll - 1;
        for (let i = row - 1; i > -1; i--) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${i}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${i}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
        temp1 = coll + 1;
        temp2 = coll - 1;
        for (let i = row + 1; i < 8; i++) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${i}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${i}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
    }
    if (e.type === " q") {
        let temp1 = coll + 1;
        let temp2 = coll - 1;
        for (let i = row - 1; i > -1; i--) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${i}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${i}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
        temp1 = coll + 1;
        temp2 = coll - 1;
        for (let i = row + 1; i < 8; i++) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${i}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${i}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
        temp1 = coll + 1;
        temp2 = coll - 1;
        for (let i = 0; i < 7; i++) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${row}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${row}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
        temp1 = row + 1;
        temp2 = row - 1;
        for (let i = 0; i < 7; i++) {
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${temp2}-${coll}`));
            }
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${temp1}-${coll}`));
            }
            temp1++;
            temp2--;
        }
    }
    if (e.type === " r") {
        console.log("rock moves");
        temp1 = coll + 1;
        temp2 = coll - 1;
        for (let i = 0; i < 7; i++) {
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${row}-${temp1}`));
            }
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${row}-${temp2}`));
            }
            temp1++;
            temp2--;
        }
        temp1 = row + 1;
        temp2 = row - 1;
        for (let i = 0; i < 7; i++) {
            if (temp2 > -1) {
                moveArray.push(document.getElementById(`${temp2}-${coll}`));
            }
            if (temp1 < 8) {
                moveArray.push(document.getElementById(`${temp1}-${coll}`));
            }
            temp1++;
            temp2--;
        }
    }
    if ((e.type === " p") && (e.color === "white")) {
        console.log("white pawn moves");
        moveArray.push(document.getElementById(`${row - 1}-${coll}`));
        moveArray.push(document.getElementById(`${row - 2}-${coll}`));
    }
    if ((e.type === " p") && (e.color === "black")) {
        console.log("black pawn moves");
        moveArray.push(document.getElementById(`${row + 1}-${coll}`));
        moveArray.push(document.getElementById(`${row + 2}-${coll}`));
    }


    console.log(moveArray);
    selected = e.currentTarget;
    selected.classList.add('clicked');

}
class piece {
    constructor(row, coll, type, color) {
        this.row = row;
        this.coll = coll;
        this.type = type;
        this.color = color;
    }
}
function getInitialBoard() {
    let result = [];
    addPieces(result, 0, "black");
    addPieces(result, 7, "white");
for(let i=0;i<8;i++)
{
    result.push(new piece(1, i, " p", "black"));
    result.push(new piece(6, i, " p", "white"));
}
    result.push(new piece(1, 0, " p", "black"));
    result.push(new piece(1, 1, " p", "black"));
    result.push(new piece(1, 2, " p", "black"));
    result.push(new piece(1, 3, " p", "black"));
    result.push(new piece(1, 4, " p", "black"));
    result.push(new piece(1, 5, " p", "black"));
    result.push(new piece(1, 6, " p", "black"));
    result.push(new piece(1, 7, " p", "black"));

    result.push(new piece(6, 0, " p", "white"));
    result.push(new piece(6, 1, " p", "white"));
    result.push(new piece(6, 2, " p", "white"));
    result.push(new piece(6, 3, " p", "white"));
    result.push(new piece(6, 4, " p", "white"));
    result.push(new piece(6, 5, " p", "white"));
    result.push(new piece(6, 6, " p", "white"));
    result.push(new piece(6, 7, " p", "white"));
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
    const board = document.createElement("table");
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
            cell.addEventListener('click', cellClick);
            board.appendChild(row);
            row.appendChild(cell);
            cell.id = t + "-" + i
        }
        body.appendChild(board);
    }
    pieces = getInitialBoard();
    for (let piece of pieces) {
        getImage(board.rows[piece.row].cells[piece.coll], piece.color, piece.type);
    }
}
window.addEventListener('load', createChessBoard);

