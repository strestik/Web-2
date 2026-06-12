const canvas = document.getElementById("detector");
const ctx = canvas.getContext("2d");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function startSimulation() {
        setInterval(function() {
            let limit = Math.random(0, 1);
            let pointX = getRndInteger(1, 400);
            let pointY = getRndInteger(1, 600);
            // if (Wintensity(pointX, pointY, 400, 600) > limit)
            // {
            //     ctx.fillRect(pointX, pointY, 7, 7);
            // }
            if (Pintensity(pointX, pointY, 400, 600) > limit)
            {
                ctx.fillRect(pointX, pointY, 7, 7);
            }
        }, 0.01);
}

function Wintensity(x, y, canvasWidth, canvasHeight) {
    let dx = x - canvasWidth / 2;
    let dy = y - canvasHeight / 2;
    let distance = Math.sqrt(dx ** 2 + dy ** 2);
    let k = 0.03;
    let sigma = 130;
    
    let cos2 = Math.cos(k * dx) ** 2;        
    let gaussian = Math.exp(-(distance ** 2) / (2 * sigma ** 2));
    
    return cos2 * gaussian;
}

function Pintensity(x, y, canvasWidth, canvasHeight) {
    let sigma = 130;

    let slit0 = 100;
    let dx = x - slit0;
    let gaussian0 = Math.exp(-(dx ** 2) / (2 * sigma ** 2));

    let slit1 = 300;
    let dy = y - slit1;
    let gaussian1 = Math.exp(-(dy ** 2) / (2 * sigma ** 2));
    
    let slits = slit0 + slit1;

    return slits;
}