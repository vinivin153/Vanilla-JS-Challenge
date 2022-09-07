const clockTitle = document.querySelector(".js-clock");

const xMas = new Date('2022-12-25 00:00:00');

setInterval(() => {
  let currentTime = new Date().getTime();
  let christTime = xMas.getTime();
  let calTime = Math.floor((christTime - currentTime) / 1000);

  let ss = calTime % 60;
  calTime = Math.floor(calTime / 60);

  let mm = calTime % 60;
  calTime = Math.floor(calTime / 60);

  let hh = calTime % 24;
  let dd = Math.floor(calTime / 24);
  clockTitle.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;

}, 1000)
