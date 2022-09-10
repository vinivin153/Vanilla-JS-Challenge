const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
]; // 18 colors

const body = document.querySelector("body");
const btn = document.querySelector("#btn");
let chose = [];

const PickColor = () => {
  while (chose.length < 2) {
    let picked = Math.floor(Math.random() * colors.length)
    if (!chose.includes(picked)) {
      chose.push(colors[picked]);
    }
  }
}

btn.addEventListener("click", () => {
  chose = [];
  PickColor();
  body.style.background = `linear-gradient(${chose[0]}, ${chose[1]})`;
})