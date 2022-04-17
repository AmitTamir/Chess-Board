window.addEventListener('load', () => {
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
            board.appendChild(row);
            row.appendChild(cell);
        }
        body.appendChild(board);
    }
    const whitePieces = document.getElementsByClassName('whitePieces');
    board.appendChild(whitePieces);
    const blackPieces = document.getElementsByClassName('blackPieces');
    board.appendChild(blackPieces);
    // const btn = document.getElementsByClassName('item');
    // btn.addEventListener('click', () => {
    //     target.chess.css.backgroundColor = 'salmon';
    // })
    function myPieceClick() {
        document.getElementsByTagName("td").style.color = "blue";
    }
});

