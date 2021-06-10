
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacle_image
var FoodGroup, obstacleGroup
var time=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacle_image = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(60,302)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.1;
  
ground=createSprite(0,332,800,10);
ground.velocityX=-3;

obstacleGroup=new Group();
FoodGroup=new Group();
}


function draw() {
background("white")
drawSprites()
stroke("black")
textSize(20)
 time = time + Math.round(getFrameRate()/60);
text("survival time:"+time,230,50)
if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  food();
  Obstacles();
}
function food(){
   if (frameCount % 80 === 0) {
     var banana=createSprite(400,120,20,20)
     banana.y=Math.round(random(80,200))
     banana.addImage(bananaImage)
     banana.scale=0.1;
     banana.velocityX=-5
     banana.lifetime=80
     
   }
}
function Obstacles(){
   if (frameCount % 300 === 0) {
     obstacles=createSprite(400,310,20,20)
     obstacles.addAnimation("image",obstacle_image)
     obstacles.scale=0.1;
     obstacles.velocityX=-5
     obstacles.lifetime=80
     
   }
}






