
var monkey , monkey_running,ground,bananarand
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //score
  score=0;
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
  
}


function draw() {
  
  background("white");
  
  
  //score
  
    score = score + Math.round(getFrameRate()/60);
  //displaying score
  text("SURVIVAL TIME: "+ score, 250,50);
    console.log(getFrameRate());
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-15 
     }
  
  if (frameCount % 90 === 0){
   var banana = createSprite(400,335 ,10,40);
    banana.addImage(obstaceImage)
    banana.scale=0.1
    banana.velocityX=-5  
    banana.lifeTime=-1
  }
    
  if (frameCount % 70 === 0){
   var obstacle = createSprite(400,160,10,40);
    obstacle.addImage(bananaImage)
    obstacle.scale=0.1
    obstacle.velocityX=-5  
    obstacle.lifeTime=-1
  }
  
  
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
   
  drawSprites();
  
}

