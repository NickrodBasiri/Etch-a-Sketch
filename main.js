let gridSize = 16;
const container = document.querySelector("#container");

setGrid(gridSize);

const gridButton = document.querySelector("#changeGrid");
gridButton.addEventListener("click", function() {
    changeGrid();
});

function changeGrid() {
    let child = container.lastElementChild;
    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    gridSize = prompt("Choose the dimensions of the grid. Pick a number 1-100");
    while(isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        let tempGridSize = prompt("Please pick a valid number between 1-100");
        gridSize = tempGridSize;
    }
    setGrid(gridSize);
}


function setGrid(gridSize) {
    for (i = 1; i <= (gridSize ** 2); i++) {
        const square = document.createElement("div");
        const sideLength = `${700/gridSize}`;
        square.style.cssText = `height: ${sideLength}px`;
        square.style.cssText = `width: ${sideLength}px`;
        square.id = "square";
        square.addEventListener("mousemove", function() {
            square.style.backgroundColor = "black";
        })
        container.appendChild(square);
    }
}