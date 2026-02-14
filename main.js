const GRID_COUNT = 16;

function createGrid() {
  const container = document.querySelector(".container");

  for (let i = 0; i < GRID_COUNT; i++) {
    for (let j = 0; j < GRID_COUNT; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);

      square.addEventListener("mouseenter", () => {
        square.classList.add("blue");
      });
    }
  }
}

createGrid();
