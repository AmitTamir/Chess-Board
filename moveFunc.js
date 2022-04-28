function getQueenMoves(row, col, moveArray) {
    getBishopMoves(row, col, moveArray);
    getRookMoves(row, col, moveArray);
    return moveArray;
}

function getWhitePawnMoves(row, col, moveArray) {
    if (row === 6) {//check if he havent moved yet
        doubleMove = 3;
    }
    else {
        doubleMove = 2;
    }
    for (let i = -1; i > -doubleMove; i--) {
        if (row + i > -1) {
            if (boardData.possibleMove(row + i, col) === undefined) {//check if the cell is empty
                // moveArray.push(document.getElementById(`${row + i}-${col}`)); //push the cell ID to the moveArray
                // document.getElementById(`${row + i}-${col}`).classList.add("possible-move");
                pushCellToMoveArray(row + i, col);
            }

            else {
                break;
            }
        }
    }
    // check possible capture
    if (row - 1 > -1) {
        if (col + 1 < 8) {
            if (boardData.possibleMove(row - 1, col + 1) === boardData.opositeColor(row, col)) { //check if the cell is occupied with an enemy
                moveArray.push(document.getElementById(`${row - 1}-${col + 1}`));
                document.getElementById(`${row - 1}-${col + 1}`).classList.add("possible-move");
                pushCellToMoveArray(row - 1, col + 1);
            }
        }
        if (col - 1 > -1) {
            if (boardData.possibleMove(row - 1, col - 1) === boardData.opositeColor(row, col)) {
                moveArray.push(document.getElementById(`${row - 1}-${col - 1}`));
                document.getElementById(`${row - 1}-${col - 1}`).classList.add("possible-move");
                pushCellToMoveArray(row - 1, col - 1);
            }
        }
    }
    return moveArray;
}

function getBlackPawnMoves(row, col, moveArray) {
    if (row === 1) { //check if he havent moved yet
        doubleMove = 3;
    }
    else {
        doubleMove = 2;
    }
    for (let i = 1; i < doubleMove; i++) {
        if (row + i < 8) {
            if (boardData.possibleMove(row + i, col) === undefined) {
                pushCellToMoveArray(row + i, col);
            }
            else {
                break;
            }
        }
    }
    //check possible capture
    if (row + 1 < 8) {
        if (col + 1 < 8) {
            if (boardData.possibleMove(row + 1, col + 1) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row + i, col + 1);
            }
        }
        if (col - 1 > -1) {
            if (boardData.possibleMove(row + 1, col - 1) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row + 1, col - 1);
            }
        }
    }
    return moveArray;
}

function getKingMoves(row, col, moveArray) {
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (-1 < row + i && row + i < 8 && -1 < col + j && col + j < 8) {
                if (i !== 0 || j !== 0) {
                    if (boardData.possibleMove(row + i, col + j) === undefined || boardData.possibleMove(row + i, col + j) === boardData.opositeColor(row, col)) {
                        pushCellToMoveArray(row + i, col + j);
                    }
                }
            }
        }
    }
    return moveArray;
}

function getKnightMoves(row, col, moveArray) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
            if (row + KNIGHT_MOVES[i][j] > -1 && row + KNIGHT_MOVES[i][j] < 8 && col + KNIGHT_MOVES[i][j + 2] > -1 && col + KNIGHT_MOVES[i][j + 2] < 8) {
                if (boardData.possibleMove(row + KNIGHT_MOVES[i][j], col + KNIGHT_MOVES[i][j + 2]) === undefined || boardData.possibleMove(row + KNIGHT_MOVES[i][j], col + KNIGHT_MOVES[i][j + 2]) === boardData.opositeColor(row, col)) {
                    pushCellToMoveArray(row + KNIGHT_MOVES[i][j], col + KNIGHT_MOVES[i][j + 2]);
                }
            }
        }
    }
    return moveArray;
}

function getBishopMoves(row, col, moveArray) {
    let temp1 = col + 1;
    let temp2 = col - 1;
    // check move to up-right
    for (let i = row - 1; i > -1; i--) {
        if (temp1 < 8) {
            if (boardData.possibleMove(i, temp1) === undefined || boardData.possibleMove(i, temp1) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(i, temp1);
                if (boardData.possibleMove(i, temp1) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
            temp1++;
        }
    }
    // check move up-left
    for (let i = row - 1; i > -1; i--) {
        if (temp2 > -1) {
            if (boardData.possibleMove(i, temp2) === undefined || boardData.possibleMove(i, temp2) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(i, temp2);
                if (boardData.possibleMove(i, temp2) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
            temp2--;
        }
    }
    temp1 = col + 1;
    temp2 = col - 1;
    // check move down-right
    for (let i = row + 1; i < 8; i++) {
        if (temp1 < 8) {
            if (boardData.possibleMove(i, temp1) === undefined || boardData.possibleMove(i, temp1) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(i, temp1);
                if (boardData.possibleMove(i, temp1) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
            temp1++;
        }
    }
    // check move down-left
    for (let i = row + 1; i < 8; i++) {
        if (temp2 > -1) {
            if (boardData.possibleMove(i, temp2) === undefined || boardData.possibleMove(i, temp2) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(i, temp2);
                if (boardData.possibleMove(i, temp2) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
            temp2--;
        }
    }
    return moveArray;
}

function getRookMoves(row, col, moveArray) {
    // check move to right
    for (let i = 1; i < 8; i++) {
        if (col + i < 8) {
            if (boardData.possibleMove(row, col + i) === undefined || boardData.possibleMove(row, col + i) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row, col + i);
                if (boardData.possibleMove(row, col + i) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
        }
    }
    // check move to left
    for (let i = 1; i < 8; i++) {
        if (col - i > -1) {
            if (boardData.possibleMove(row, col - i) === undefined || boardData.possibleMove(row, col - i) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row, col - i);
                if (boardData.possibleMove(row, col - i) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
        }
    }
    // check move up
    for (let i = 1; i < 8; i++) {
        if (row - i > -1) {
            if (boardData.possibleMove(row - i, col) === undefined || boardData.possibleMove(row - i, col) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row - i, col);
                if (boardData.possibleMove(row - i, col) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
        }
    }
    // check move down
    for (let i = 1; i < 8; i++) {
        if (row + i < 8) {
            if (boardData.possibleMove(row + i, col) === undefined || boardData.possibleMove(row + i, col) === boardData.opositeColor(row, col)) {
                pushCellToMoveArray(row + i, col);
                if (boardData.possibleMove(row + i, col) === boardData.opositeColor(row, col)) {
                    break;
                }
            }
            else {
                break;
            }
        }
    }
    return moveArray;
}