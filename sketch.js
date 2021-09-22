var bg,bgimg
var aeroplane,aeroplaneimg
var building1,building2,building3;
var obstacle,birdimg,bird
function preload(){
  bgimg = loadImage("assets/runway.jpg")
  aeroplaneimg = loadImage("assets/aeroplane.jpg.png");
  birdimg=loadImage("assets/bird1animation.png","assets/b2imageanimation.png");
  building1=loadImage("assets/burj.png")
  building2=loadImage("assets/3-2-eiffel-tower-png.png")
  
  building3=loadImage("assets/pyramid.png")
} 
function setup() {
  createCanvas(1350,800);
  aeroplane = createSprite(100,700  ,30,30) 
  aeroplane.addImage(aeroplaneimg)
}
function draw() {
  background(bgimg);  
  if(keyDown("UP_ARROW")){
    aeroplane.velocityX=+3
    aeroplane.velocityY=-3
  }
  if(keyDown("DOWN_ARROW")){
    aeroplane.velocityX=+3
    aeroplane.velocityY=+3
  }
  if(keyDown("RIGHT_ARROW")){
    aeroplane.velocityX=+3
    aeroplane.velocityY=+0
  }
  drawSprites();
spawnBuildingsBottom();
  spawnObstaclesTop();
}
function spawnObstaclesTop(){
  if(frameCount%100===0){
    bird = createSprite(1200,200,20,20);
    bird.y=Math.round(random(10,150))
    bird.addImage(birdimg);
    bird.velocityX=-2
    bird.lifetime=675
      }
}
function spawnBuildingsBottom(){
  if(frameCount%200===0){
    buildings = createSprite(1200,750,20,20);
    buildings.velocityX=-2
   buildings.scale=0.3
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:buildings.addImage(building1)
        break;
      case 2:buildings.addImage(building2)
        break;
      case 3:buildings.addImage(building3)    
      break;
    default:break;
    }
  }
}