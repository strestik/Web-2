const canvas0 = document.getElementById("detector");
const canvas1 = document.getElementById("slits");
const canvas2 = document.getElementById("cannon");
const ctx = canvas0.getContext("2d");
const cannonCtx = canvas2.getContext("2d");
const slitsCtx = canvas1.getContext("2d");
const toggle = document.getElementById("changeState");
const time = document.getElementById("Time");
let electrons = [];
drawCannon();


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function runSimulation() {
    ctx.clearRect(0, 0, canvas0.width, canvas0.height);
    if (toggle.checked) {
        startObservedSimulation();
    }
    else if (!toggle.checked) {
        startSimulation();
    }
}
  
let simulationOId;
let simulationUId;
let animationId;

function startSimulation() {
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animate);
    clearInterval(simulationOId);
    
    setTimeout(function() {
        let roundsLeft = Number(time.value) * 100;
        simulationUId =
            setInterval(function() {
                let limit = Math.random(0, 1);
                let pointX = getRndInteger(1, 800);
                let pointY = getRndInteger(1, 600);
                if (Wintensity(pointX, pointY, 800, 600) > limit && roundsLeft > 0)
                {
                    ctx.fillRect(pointX, pointY, 6, 6);
                    roundsLeft--;
                }
            }, 0.01);
    }, 1600);
}

function startObservedSimulation() {
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animate);
    clearInterval(simulationUId);
    
    setTimeout(function() {
        let roundsLeft = Number(time.value) * 100;
        simulationOId =
            setInterval(function() {
                let limit = Math.random(0, 1);
                let pointX = getRndInteger(1, 800);
                let pointY = getRndInteger(150, 450);
                if (Pintensity(pointX, pointY, 800, 600) > limit && roundsLeft > 0)
                {
                    ctx.fillRect(pointX, pointY, 6, 6);
                    roundsLeft--;
                }
            }, 0.01);
    }, 1600);
} 
 
function stopSimulation() {
        clearInterval(simulationOId);
        clearInterval(simulationUId);
        cancelAnimationFrame(animationId);
        stopAnimate();
}

function Wintensity(x, y, canvasWidth, canvasHeight) {
    let dx = x - canvasWidth / 2;
    let dy = y - canvasHeight / 2;
    let distance = Math.sqrt(dx ** 2 + dy ** 2);
    let k = 0.03; // wave number
    let sigma = 150; // standard deviation for Gaussian envelope
    
    let cos2 = Math.cos(k * dx) ** 2;        
    let gaussian = Math.exp(-(distance ** 2) / (2 * sigma ** 2));
    
    return cos2 * gaussian;
}

function Pintensity(x, y, canvasWidth, canvasHeight) {
    let sigma = 14;

    let slit0 = 300;
    let dx0 = x - slit0;
    let gaussian0 = Math.exp(-(dx0 ** 2) / (2 * sigma ** 2));

    let slit1 = 500;
    let dx1 = x - slit1;
    let gaussian1 = Math.exp(-(dx1 ** 2) / (2 * sigma ** 2));
    
    let slits = gaussian0 + gaussian1;

    return slits;
}

function addElectron()
{
    let e = {x: 450, y: 297};
    e.y += Math.random() * 5;
    e.y -= Math.random() * 5;
    electrons.push(e);
}

function moveElectrons() 
{
    for (let i = electrons.length - 1; i >= 0; i--) 
    {
        electrons[i].x -= 5 + Math.random() * 2 - Math.random() * 2;
        if (electrons[i].x <= 0)
        {
            electrons.splice(i, 1);
        }
    }
}

function drawCannon()
{
    ctx.fillStyle = "#d11616";
    cannonCtx.fillStyle = "#333";
    slitsCtx.fillStyle = "#555555";

    cannonCtx.fillStyle = "#333";
    cannonCtx.fillRect(450, 295, 50, 10);

    cannonCtx.beginPath();
    cannonCtx.fillStyle = "#242424";
    cannonCtx.arc(500, 300, 20, 0, Math.PI * 2);
    cannonCtx.fill();

    cannonCtx.fillStyle = "#333";
    cannonCtx.fillRect(500, 280, 250, 40);


    cannonCtx.beginPath();
    cannonCtx.fillStyle = "#202020";
    cannonCtx.arc(750, 300, 20, 0, Math.PI * 2);
    cannonCtx.fill();
}

function drawSlits()
{
}

function drawElectrons(cannonCanvas, cannonCanvas)
{
    cannonCtx.clearRect(0, 0, cannonCanvas.width, cannonCanvas.height);
    drawCannon();
    for (let i = 0; i < electrons.length; i++)
    {
        let r = 20 + Math.random() * 20 - 20;
        let g = 210 + Math.random() * 20 - 20;
        let b = 210 + Math.random() * 20 - 20;
        cannonCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        cannonCtx.fillRect(electrons[i].x, electrons[i].y, 6, 6);
    }
}

function animate() {
    addElectron();
    moveElectrons();
    drawElectrons(canvas2, cannonCtx);
    animationId = requestAnimationFrame(animate);
}

function stopAnimate() 
{
    moveElectrons();
    drawElectrons(canvas2, cannonCtx);
}
