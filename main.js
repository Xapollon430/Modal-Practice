let button = document.querySelector("button");
let modal = document.querySelector("#modal");
let background = document.querySelector(".backgroundModal");

button.addEventListener("click", () => {
  modal.classList.remove("hide");
  background.classList.add("background");
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("background")) {
    modal.classList.add("hide");
    background.classList.remove("background");
  }
});
