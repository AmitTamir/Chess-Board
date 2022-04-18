function getImage(cell, type, kind) {
    const image = document.createElement("img");
    image.src = "pieces/" + type + kind + ".png";
    cell.appendChild(image);
}
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
            if (t === 1) {
                getImage(cell, "black", " p");
            }
            else if (t === 6) {
                getImage(cell, "white", " p");
            }
            else if (t === 0) {
                if (i === 0 || i === 7) {
                    getImage(cell, "black", " r");
                }
                else if (i === 1 || i === 6) {
                    getImage(cell, "black", " kn");
                }
                else if (i === 2 || i === 5) {
                    getImage(cell, "black", " b");
                }
                else if (i === 3) {
                    getImage(cell, "black", " q");
                }
                else if (i === 4) {
                    getImage(cell, "black", " k");
                }
            }
            else if (t === 7) {
                if (i === 0 || i === 7) {
                    getImage(cell, "white", " r");
                }
                else if (i === 1 || i === 6) {
                    getImage(cell, "white", " kn");
                }
                else if (i === 2 || i === 5) {
                    getImage(cell, "white", " b");
                }
                else if (i === 3) {
                    getImage(cell, "white", " q");
                }
                else if (i === 4) {
                    getImage(cell, "white", " k");
                }
            }
        }
        body.appendChild(board);
    }
});
let clicktry = document.getElementsByClassName('img')[0];
clicktry.addEventListener('click', function (e) {
    e.target.style.outline = "solid blue 1px";
});

