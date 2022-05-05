var path
var runner

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runnerImage = loadImage("Runner1.png, Runner2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;

  if (path.y > 400) {
    path.y = height/2;
  }

  runner = createSprite(200,370,60,60)
  runner.addAnimation("running", runnerImage)

  boundary1 = createSprite(200,5,8,400)
  boundary1.visible = false 
  boundary2 = createSprite(200,395,8,400)
  boundary2.visible = false
}

function draw() {
  background(0);
  runner.x=World.mouseX;
  runner.bounceOff(boundary1)
  runner.bounceOff(boundary2)
  drawSprites()
}
