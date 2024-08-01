gridSize = 30;
const container = document.querySelector("#container");

const sideLength = `${700/gridSize}`;

for (i = 1; i <= (gridSize ** 2); i++) {
    const square = document.createElement("div");
    square.style.cssText = `height: ${sideLength}px`;
    square.style.cssText = `width: ${sideLength}px`;
    square.id = "square";
    container.appendChild(square);
}