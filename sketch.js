var flappy;
var backgroundFlappyImage;
var backgroundFlappy;
var invisibleGround;
var pipesImage1;
var pipesImage2;
var flappyImg1;
var flappyImg2;
var pipesgroup;
var test

var PLAY;
var END;
var gameState=PLAY;

var pipes1;
var pipes2;
var ground,groundImage;
var score=0;
var scoreImage;

function preload()
{  
backgroundFlappyImage=loadImage("backgroundImage4.png");
pipesImage1=loadImage("pipe12-removebg-preview.png")
pipesImage2=loadImage("pipe132-removebg-preview.png")
groundImage=loadImage("groundImage-removebg-preview.png");
  
flappyImg1=loadAnimation("Flappy_bird-removebg-preview.png");
flappyImg2=loadAnimation("flappybirdWingDown-removebg-preview.png");

}

function setup()
{  
createCanvas(700,750);    
  
backgroundFlappy=createSprite(350,50,1000,300);
backgroundFlappy.addImage(backgroundFlappyImage);
backgroundFlappy.scale=1.5;
  
flappy=createSprite(300,300,20,20);
flappy.addAnimation("flappyUp",flappyImg1);
flappy.addAnimation("flappyDown",flappyImg2);
flappy.scale=0.4;
  
invisibleGround=createSprite(325,600,650,10);
invisibleGround.visible=false;

test= createSprite(300,300,20,20)
  
ground=createSprite(350,765,20,20);
ground.addImage(groundImage);
ground.depth=backgroundFlappy.depth;
ground.depth=flappy.depth;
ground.depth=ground.depth+1;
ground.scale=1.5;

pipesgroup=createGroup();
    
}

function draw()
{  
background(0);
//console.log(flappy.velocityY);

flappy.debug=true; 
flappy.setCollider("rectangle",0,0,flappy.height-140,flappy.width-185)

flappy.collide(invisibleGround);
invisibleGround.velocityY=0;

if(gameState===PLAY)
{
if(keyDown("Q")&&gameState===PLAY){
    flappy.velocityY=-12
   } 

   flappy.velocityY=flappy.velocityY+1.5

   if(backgroundFlappy.x<100){
        backgroundFlappy.x=360
      }
    backgroundFlappy.velocityX=-4 

    if(ground.x<200){
        ground.x=360
      }  
     ground.velocityX=-10

     if(isTouching(flappy,test)){
             console.log("is touching is working")
             gameState=END;
     }
      
     spawnPipes();

} else if(gameState===END)
{
flappy.velocityY=1.5
if(flappy.isTouching(invisibleGround)){
        flappy.velocityY=0
}
flappy.changeAnimation("flappyDown",flappyImg2)

ground.velocityY=0
backgroundFlappy.velocityY=0
pipesgroup.setVelocityEach(0,0)

}

drawSprites();
}

function spawnPipes()
{
  if(frameCount%100===0){
  pipes1= createSprite(500,592,20,20)
  pipes1.addImage(pipesImage1)
  pipes1.depth=backgroundFlappy.depth
  pipes1.depth=pipes1.depth+1
  pipes1.scale=4
  pipes1.velocityX=-3
  pipes1.lifetime=300;
  pipes1.debug=true;
  pipes1.setCollider("rectangle",1.5,0,pipes1.height-95,pipes1.width-160)
  pipes2=createSprite(500,400,20,20)
  pipes2.addImage(pipesImage2)
  pipes2.depth=backgroundFlappy.depth
  pipes2.depth=pipes2.depth+1
  pipes2.scale=4
  pipes2.velocityX=-3
  pipes2.lifetime=300
  pipes2.debug=true;
  pipes2.setCollider("rectangle",0.5,-30,pipes2.height-105,pipes2.width-43)

  pipesgroup.add(pipes1);
  pipesgroup.add(pipes2);
  
var rand=Math.round(random(1,10))
 switch(rand){
   case 1: pipes1.y=500;
           pipes2.y=160;
   break;
   case 2: pipes1.y=550;
           pipes2.y=210;
   break;
   case 3: pipes1.y=510;
           pipes2.y=170;
   break;
   case 4: pipes1.y=520;
           pipes2.y=180;
   break;
   case 5: pipes1.y=530;
           pipes2.y=190;
   break;
   case 6: pipes1.y=540;
           pipes2.y=200;
   break;
   case 7: pipes1.y=560;
           pipes2.y=220;
   break;
   case 8: pipes1.y=570;
           pipes2.y=230;
   break;
   case 9: pipes1.y=580;
           pipes2.y=240;
   break;
   case 10:pipes1.y=590;
           pipes2.y=250;
  }
 }
}