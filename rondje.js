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
context.beginPath();
context.lineWidth = "10"
context.fillStyle = "yellow    "
context.arc(300,200,30,0, Math.PI*2);
context.closePath();
context.fill();
context.stroke();

function getRandomNumber(max){
    return Math.floor
}
