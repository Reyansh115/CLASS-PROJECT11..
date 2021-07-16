var path;
var power;
var runner;



function preload(){
 path = loadImage("path.png");
 power = loadImage("power.png");
 runner = loadAnimation("Runner-1.png,Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  background("white")

  path =createSprite(200,200);
  path.addImage(path.png);
  path.velocityX = 4;
  path.scale= 1.2;
 
  runner = createSprite(130,200,30,30);
  runner.addAnimation("Runner-1.png","Runner-2,png");
  runner.scale =0.25;

}

function draw() {

  background(0);
  path.velocityX = -3;

  
  
  if(path.y > 400){
    path.y = path.height/2;
  
  }
    
  drawSprites();


}