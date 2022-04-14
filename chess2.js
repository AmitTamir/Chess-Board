window.addEventListener('load', () => {
    const body = document.getElementsByTagName("body")[0];
    const table = document.createElement("table");
    table.className = "table";
    for (let t = 0; t < 8; t++) {
        let row = document.createElement('tr');
        for (let i = 0; i < 8; i++) {
            let cell = document.createElement('td');
            if (t % 2 === 0) {
                if (i % 2 === 0) {
                    cell.className = "white";
                }
                else {
                    cell.className = "black";
                }
            }
            else {
                if (i % 2 === 0) {
                    cell.className = "black";
                }
                else {
                    cell.className = "white";
                }

            }
            table.appendChild(row);
            row.appendChild(cell);
        }
        body.appendChild(table);
    }
});
