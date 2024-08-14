let player = document.getElementById("player");

let xInicial = 0;
let yInicial = 0;

function movePlayer(x, y) {
  moverY = x + "px";
  moverX = y + "px";

  player.style.top = moverY;
  player.style.left = moverX;
}

setInterval(function () {
  movePlayer(xInicial++, yInicial++);
}, 7);
