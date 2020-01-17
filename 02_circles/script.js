// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
let colors = ["RGBA(0,0,255,1)", "RGBA(0,255,0,1)", "RGBA(255,255,255,1)"];


function drawCircle(){
    context.beginPath();
    context.lineWidth = "2"
    context.fillStyle = colors[getRandomNumber(colors.length)];
    context.arc(getRandomNumber(width), getRandomNumber(height), getRandomNumber(width / 50) ,0, Math.PI*2);
    context.fill();
    context.stroke();
    context.closePath();
}

for(let i = 0; i<100; i++){
    drawCircle();
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function animate(){
    drawCircle();
}

setInterval(animate,100);
