const MAX_GRID_COUNT = 100;
const DEFAULT_GRID_COUNT = 16;

let gridCount = DEFAULT_GRID_COUNT;

const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function renderSquares() {
  container.replaceChildren();

  container.style.setProperty("--grid-count", gridCount);

  const total = gridCount * gridCount;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    fragment.appendChild(square);
  }

  container.appendChild(fragment);
}

container.addEventListener(
  "mouseenter",
  (e) => {
    if (e.target.classList.contains("square")) {
      e.target.classList.add("blue");
    }
  },
  true,
);

btn.addEventListener("click", () => {
  const userInput = prompt(
    `Enter in the desired grid size, max ${MAX_GRID_COUNT}`,
  );
  if (!userInput.trim() || userInput === null) return;

  const next = Number(userInput);

  if (!Number.isInteger(next) || next < 1 || next > MAX_GRID_COUNT) {
    alert(`Please enter a whole number between 1 and ${MAX_GRID_COUNT}`);
    return;
  }

  gridCount = next;
  renderSquares();
});

renderSquares();
