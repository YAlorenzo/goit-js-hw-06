const btnChage = document.querySelector('.change-color');
const body = document.querySelector('body');
btnChage.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  console.log("rabotaet")
  const gg = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  body.style.backgroundColor = gg;
}
