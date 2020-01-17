// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

let colors = ["RGBA(0,0,255,1)", "RGBA(0,255,0,1)", "RGBA(255,255,255,1)"];

circles = [];
for (let i = 0; i < 100; i++){
let circleObject = {};
  circleObject.x = getRandomInt(0,width);
  circleObject.y = getRandomInt(0,height);
  circleObject.radius = 40;
  circleObject.color
  circleObject.speedX = 6;
  circleObject.speedY = 7;

  circleObject.draw = function(){
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = colors[getRandomNumber(colors.length)];
    context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  circleObject.update = function(){
    circleObject.x = circleObject.x + circleObject.speedX;
    circleObject.y = circleObject.y + circleObject.speedY;

    if(circleObject.y > height - circleObject.radius){
      circleObject.speedY = - circleObject.speedY
    }

    if(circleObject.y < 0){
      circleObject.speedY =  -circleObject.speedY
    }

    if(circleObject.x > width - circleObject.radius){
      circleObject.speedX = - circleObject.speedX;
    }

    if(circleObject.x < 0){
      circleObject.speedX =  -circleObject.speedX
    }
  }
  circles.push(circleObject);
}



function getRandomInt(min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

function anime(){
  context.clearRect(0,0,width,height);
  for (let i = 0; i<circles.length;i++){
    circles[i].update();
    circles[i].draw();
  }
}
setInterval(anime,10)
