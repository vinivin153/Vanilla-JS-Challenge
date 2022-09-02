const body = document.querySelector("body");
const h1 = document.querySelector("h1");

h1.style.color = "white";
window.addEventListener("resize", () => {
  let value = window.innerWidth;
  if (value < 500) {
    body.style.backgroundColor = "skyblue";
  } else if (500 <= value && value <= 800) {
    body.style.backgroundColor = "purple";
  } else if (800 < value) {
    body.style.backgroundColor = "yellow";
  }
});
