const canvas = document.getElementById("detector");
const ctx = canvas.getContext("2d");
const toggle = document.getElementById("changeState");
const time = document.getElementById("Time");
ctx.fillStyle = "#d11616";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function runSimulation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (toggle.checked) {
        startObservedSimulation();
    }
    else if (!toggle.checked) {
        startSimulation();
    }
}
  
let simulationOId;
let simulationUId;

function startSimulation() {
    clearInterval(simulationOId);
    let roundsLeft = Number(time.value) * 100;
    simulationUId =
        setInterval(function() {
            let limit = Math.random(0, 1);
            let pointX = getRndInteger(1, 400);
            let pointY = getRndInteger(1, 600);
            if (Wintensity(pointX, pointY, 400, 600) > limit && roundsLeft > 0)
            {
                ctx.fillRect(pointX, pointY, 7, 7);
                roundsLeft--;
            }
        }, 0.01);
}

function startObservedSimulation() {
    clearInterval(simulationUId);
    let roundsLeft = Number(time.value) * 100;
    simulationOId =
        setInterval(function() {
            let limit = Math.random(0, 1);
            let pointX = getRndInteger(1, 400);
            let pointY = getRndInteger(150, 450);
            if (Pintensity(pointX, pointY, 400, 600) > limit && roundsLeft > 0)
            {
                ctx.fillRect(pointX, pointY, 7, 7);
                roundsLeft--;
            }
        }, 0.01);
} 
 
function stopSimulation() {
        clearInterval(simulationOId);
        clearInterval(simulationUId);
}

function Wintensity(x, y, canvasWidth, canvasHeight) {
    let dx = x - canvasWidth / 2;
    let dy = y - canvasHeight / 2;
    let distance = Math.sqrt(dx ** 2 + dy ** 2);
    let k = 0.03;
    let sigma = 140;
    
    let cos2 = Math.cos(k * dx) ** 2;        
    let gaussian = Math.exp(-(distance ** 2) / (2 * sigma ** 2));
    
    return cos2 * gaussian;
}

function Pintensity(x, y, canvasWidth, canvasHeight) {
    let sigma = 14;

    let slit0 = 100;
    let dx0 = x - slit0;
    let gaussian0 = Math.exp(-(dx0 ** 2) / (2 * sigma ** 2));

    let slit1 = 300;
    let dx1 = x - slit1;
    let gaussian1 = Math.exp(-(dx1 ** 2) / (2 * sigma ** 2));
    
    let slits = gaussian0 + gaussian1;

    return slits;
}

