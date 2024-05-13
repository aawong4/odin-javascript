function createGrid(rows) {
    let innerHTML = "";
    let row = ``;

    // Create 1 row of cells
    for (let i = 0; i < rows; i++) {
        row += `<div class="cell"></div>`
    }

    // Create x rows of cells
    for (let i = 0; i < rows; i++) {
        innerHTML += `<div class="row" id="grid">` + row + `</div>`
    }
    document.getElementById("container").innerHTML = innerHTML;
}

function updateColor() {
    this.style.backgroundColor = "blue";
}

createGrid(Number(prompt("Enter number of rows")));

const cells = document.querySelectorAll(".cell");
cells.forEach(function(cell) {
    cell.addEventListener("mouseover", updateColor);
});