var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500); 
  
  car = createSprite(50,200,50,50);

  wall = createSprite(1350,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;

  if (wall.x - car.x < wall.width/2 + car.width/2
    && 0.5*speed*speed/22500 < 100) {
    car.x = 1300;
    car.velocityX = 0; 
    car.shapeColor = color(0,255,0);}
    else if (wall.x - car.x < wall.width/2 + car.width/2
    && 0.5*speed*speed/22500 > 100
    && 0.5*speed*speed/22500 < 180) {
    car.x = 1300;
    car.velocityX = 0; 
    car.shapeColor = color(230,230,0);}
    else if (wall.x - car.x < wall.width/2 + car.width/2
      && 0.5*speed*speed/22500 > 180) {
      car.x = 1300;
      car.velocityX = 0; 
      car.shapeColor = color(255,0,0);}
      
  drawSprites();
}