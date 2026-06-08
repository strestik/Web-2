const canvas = document.getElementById("detector");
const ctx = canvas.getContext("2d");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function startSimulation() {
    setInterval(function() {
        ctx.fillRect(getRndInteger(1, 600), getRndInteger(1, 400), 7, 7);
    }, 100);
}