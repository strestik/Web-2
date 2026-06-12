const canvas = document.getElementById("detector");
const ctx = canvas.getContext("2d");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function startSimulation() {
    let limit = 0.5;
    
        setInterval(function() {
            let pointX = getRndInteger(1, 400);
            let pointY = getRndInteger(1, 600);        
            if (intensity(pointX, 1200) > limit)
            {
                ctx.fillRect(pointX, pointY, 7, 7);
            }
        }, 100);
}

function intensity(y, canvasHeight) {
    let centered = y - canvasHeight / 2;
    let k = 0.05;        // stripe spacing
    let sigma = 150;     // gaussian width
    
    let cos2 = Math.cos(k * centered) ** 2;
    let gaussian = Math.exp(-(centered ** 2) / (2 * sigma ** 2));
    
    return cos2 * gaussian;
}