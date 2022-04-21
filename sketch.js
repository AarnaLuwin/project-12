var boy, boy_running;
var boundary1 , boundary2;
var path, pathImage;

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");

 pathImage= loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  

  path= createSprite(200,200);
  path.addImage("path", pathImage);
  path.velocityY=4;
  path.scale=1.2;

boy=createSprite(80,350,20,50)
  boy.addAnimation("running", boy_running)
  boy.scale = 0.08;

 
 boundary1 = createSprite(1,50,10,700)
 boundary1.visible= false;
 boundary2 = createSprite (399,50,10,700)
 boundary2.visible= false;
}

function draw() {
  background(0);

if (keyDown("left_Arrow")){
  boy.velocityX = boy.velocityX-0.2;
}

if (keyDown("right_Arrow")){
  boy.velocityX = boy.velocityX+0.2;
}

boy.collide(boundary1);
boy.collide(boundary2);


if (path.y > 400){
  path.y = height/2
}

 
  drawSprites();
}
