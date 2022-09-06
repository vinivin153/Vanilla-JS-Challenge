const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const endNum = document.querySelector("#endNum").value;
  const choseNum = document.querySelector("#choseNum").value;
  const res2 = document.querySelector("#res2");

  const random = Math.round(Math.random() * endNum);
  document.querySelector(
    "#res1"
  ).innerText = `You chose: ${choseNum}, the machine chose ${random}.`;
  if (parseInt(choseNum, 10) === random) {
    res2.innerText = "You won!";
  } else {
    res2.innerText = "You lost!";
  }
});
