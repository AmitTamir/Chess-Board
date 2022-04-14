window.addEventListener('load', () => {

    const table = document.createElement("table");
    table.className = "table";
    let row = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            let box = document.createElement('td');
            tr.appendChild(td);
            td.innerText("W")
            box.className = "black";
        }
        else {
            let box = document.createElement('td');
            tr.appendChild(td);
            box.className = "black";
        }
    }
});
// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "Sr. No.";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "Name";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "Company";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// thead.appendChild(row_1);
