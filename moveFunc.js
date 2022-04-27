function getQueenMoves(row, coll, moveArray) {
    getBishopMoves(row, coll, moveArray);
    getRookMoves(row, coll, moveArray);
    return moveArray;
}

function getWhitePawnMoves(row, coll, moveArray) {
    for (let i = -1; i > -2; i--) {
        if (row + i > -1) {
            if (boardData.possibleMove(row + i, coll) === undefined) {
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
            if (boardData.possibleMove(row - 1, coll + 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll + 1}`));
                document.getElementById(`${row - 1}-${coll + 1}`).classList.add("possible-move");
            }
        }
        if (coll - 1 > -1) {
            if (boardData.possibleMove(row - 1, coll - 1) === boardData.opositeColor(row, coll)) {
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
            if (boardData.possibleMove(row + i, coll) === undefined) {
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
            if (boardData.possibleMove(row + 1, coll + 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll + 1}`));
                document.getElementById(`${row + 1}-${coll + 1}`).classList.add("possible-move");
            }
        }
        if (coll - 1 > -1) {
            if (boardData.possibleMove(row + 1, coll - 1) === boardData.opositeColor(row, coll)) {
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
                    if (boardData.possibleMove(row + i, coll + j) === undefined || boardData.possibleMove(row + i, coll + j) === boardData.opositeColor(row, coll)) {
                        moveArray.push(document.getElementById(`${row + i}-${coll + j}`));
                        document.getElementById(`${row + i}-${coll + j}`).classList.add("possible-move");
                    }
                }
            }
        }
    }
    return moveArray;
}
// const knightMoves = [-2, -1, 1,2]
function getKnightMoves(row, coll, moveArray) {
    // if (row + knightMoves[0][0] > -1 && coll + knightMoves[0][1]>-1) {
    //     if (boardData.possibleMove(row + knightMoves[0][0], coll + knightMoves[0][1] - 1) === undefined || boardData.possibleMove(row + knightMoves[0][0], coll + knightMoves[0][1]) === boardData.opositeColor(row, coll)) {
    //         moveArray.push(document.getElementById(`${row + knightMoves[0][0]}-${coll - 1}`));
    //         document.getElementById(`${row + knightMoves[0][0]}-${coll - 1}`).classList.add("possible-move");
    //     }
    // }



    if (row - 2 > -1) {
        if (coll - 1 > -1) {//0 1
            if (boardData.possibleMove(row - 2, coll - 1) === undefined || boardData.possibleMove(row - 2, coll - 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 2}-${coll - 1}`));
                document.getElementById(`${row - 2}-${coll - 1}`).classList.add("possible-move");
            }
        }
        if (coll + 1 < 8) {//0 2
            if (boardData.possibleMove(row - 2, coll + 1) === undefined || boardData.possibleMove(row - 2, coll + 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 2}-${coll + 1}`));
                document.getElementById(`${row - 2}-${coll + 1}`).classList.add("possible-move");
            }
        }
    }
    if (coll + 2 < 8) {
        if (row - 1 > -1) {//1 3
            if (boardData.possibleMove(row - 1, coll + 2) === undefined || boardData.possibleMove(row - 1, coll + 2) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll + 2}`));
                document.getElementById(`${row - 1}-${coll + 2}`).classList.add("possible-move");
            }
        }
        if (row + 1 < 8) {//2 3
            if (boardData.possibleMove(row + 1, coll + 2) === undefined || boardData.possibleMove(row + 1, coll + 2) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 1}-${coll + 2}`));
                document.getElementById(`${row + 1}-${coll + 2}`).classList.add("possible-move");
            }
        }
    }
    if (row + 2 < 8) {
        if (coll - 1 > -1) {//3 1
            if (boardData.possibleMove(row + 2, coll - 1) === undefined || boardData.possibleMove(row + 2, coll - 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 2}-${coll - 1}`));
                document.getElementById(`${row + 2}-${coll - 1}`).classList.add("possible-move");
            }
        }
        if (coll + 1 < 8) {//3 2
            if (boardData.possibleMove(row + 2, coll + 1) === undefined || boardData.possibleMove(row + 2, coll + 1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row + 2}-${coll + 1}`));
                document.getElementById(`${row + 2}-${coll + 1}`).classList.add("possible-move");
            }
        }
    }
    if (coll - 2 > -1) {
        if (row - 1 > -1) {//1 0
            if (boardData.possibleMove(row - 1, coll - 2) === undefined || boardData.possibleMove(row - 1, coll - 2) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row - 1}-${coll - 2}`));
                document.getElementById(`${row - 1}-${coll - 2}`).classList.add("possible-move");
            }
        }
        if (row + 1 < 8) {//2 0
            if (boardData.possibleMove(row + 1, coll - 2) === undefined || boardData.possibleMove(row + 1, coll - 2) === boardData.opositeColor(row, coll)) {
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
                if (boardData.possibleMove(i, temp1) === undefined || boardData.possibleMove(i, temp1) === boardData.opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp1}`));
                    document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
                    if (boardData.possibleMove(i, temp1) === boardData.opositeColor(row, coll)) {
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
                if (boardData.possibleMove(i, temp2) === undefined || boardData.possibleMove(i, temp2) === boardData.opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp2}`));
                    document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
                    if (boardData.possibleMove(i, temp2) === boardData.opositeColor(row, coll)) {
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
                if (boardData.possibleMove(i, temp1) === undefined || boardData.possibleMove(i, temp1) === boardData.opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp1}`));
                    document.getElementById(`${i}-${temp1}`).classList.add("possible-move");
                    if (boardData.possibleMove(i, temp1) === boardData.opositeColor(row, coll)) {
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
                if (boardData.possibleMove(i, temp2) === undefined || boardData.possibleMove(i, temp2) === boardData.opositeColor(row, coll)) {
                    moveArray.push(document.getElementById(`${i}-${temp2}`));
                    document.getElementById(`${i}-${temp2}`).classList.add("possible-move");
                    if (boardData.possibleMove(i, temp2) === boardData.opositeColor(row, coll)) {
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
            if (boardData.possibleMove(row, temp1) === undefined || boardData.possibleMove(row, temp1) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row}-${temp1}`));
                document.getElementById(`${row}-${temp1}`).classList.add("possible-move");
                if (boardData.possibleMove(row, temp1) === boardData.opositeColor(row, coll)) {
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
            if (boardData.possibleMove(row, temp2) === undefined || boardData.possibleMove(row, temp2) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${row}-${temp2}`));
                document.getElementById(`${row}-${temp2}`).classList.add("possible-move");
                if (boardData.possibleMove(row, temp1) === boardData.opositeColor(row, coll)) {
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
            if (boardData.possibleMove(temp2, coll) === undefined || boardData.possibleMove(temp2, coll) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${temp2}-${coll}`));
                document.getElementById(`${temp2}-${coll}`).classList.add("possible-move");
                if (boardData.possibleMove(temp2, coll) === boardData.opositeColor(row, coll)) {
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
            if (boardData.possibleMove(temp1, coll) === undefined || boardData.possibleMove(temp1, coll) === boardData.opositeColor(row, coll)) {
                moveArray.push(document.getElementById(`${temp1}-${coll}`));
                document.getElementById(`${temp1}-${coll}`).classList.add("possible-move");
                if (boardData.possibleMove(temp1, coll) === boardData.opositeColor(row, coll)) {
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
    return moveArray;
}