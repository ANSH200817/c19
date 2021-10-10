var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost=createSprite(200,200)
  ghost.addImage('ghost',ghostImg)
  ghost.scale=0.5

  doorsGroup=createGroup()
  climbersGroup=createGroup()
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites()

    if(keyDown('space')){ 
      ghost.velocityY=-5
    }

    ghost.velocityY=ghost.velocityY+0.5

    if(keyDown('RIGHT_ARROW')){
      ghost.x=ghost.x+2
    }

    if(keyDown('LEFT_ARROW')){
      ghost.x=ghost.x-2
    }
spawndoor()

}



function spawndoor(){
if(frameCount%240==0){
  var door=createSprite(Math.round(random(100,500)),0)
var climber = createSprite(door.x,50)

  door.velocityY=3
  climber.velocityY=3

  climber.addImage('climber',climberImg)
  door.addImage('door',doorImg)

  doorsGroup.add(door)
  climbersGroup.add(climber)


}
}

 


