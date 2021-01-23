const body = document.querySelector("body");
const weatherColor = document.querySelector(".js-weather");

const IMG_NUMBER = 5;

function paintImage(imgnumber) {
  const image = new Image();
  image.src = `img/${imgnumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
