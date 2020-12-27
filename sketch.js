
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground, survivalTime;
var backgroundImage, backgroundj;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("395e5325b9ddcbdd28c3915bdf64b713.jpg");
 
}

function setup() {
  createCanvas(600,600);
  
  backgroundj = createSprite(300,300,600,600);
  backgroundj.addImage("background", backgroundImage);
  backgroundj.scale = 0.7;
  backgroundj.velocityX = -3;
  
  monkey = createSprite(400,520);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.12;
  
  ground = createSprite(300,590,2000,50);

  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0;
}


function draw() {
  ground.visible = false;
  background("white");
  
  monkey.velocityY = monkey.velocityY + 0.8;
    
  monkey.collide(ground);
  
  if(backgroundj.x < 65){
    backgroundj.x = backgroundj.width/2-175;
  }
  
  if(keyDown("space") && monkey.y > 328){
     monkey.velocityY = -12;
  }

  if(monkey.isTouching(FoodGroup)){
     score = score+1;
      FoodGroup.destroyEach();
    monkey.scale  = monkey.scale +0.01
  }
  if(monkey.isTouching(obstacleGroup)){
     monkey.scale = 0.12
    score = 0;
  }
  spawnFood();
  createObstacles();
  drawSprites();
  text("Score: "+score,300,300);
  
}
function spawnFood(){
  if(frameCount % 80 == 0){
    banana = createSprite(600,Math.round(random(320,400)));
    banana.addImage(bananaImage);
    banana.scale = 0.07
    banana.velocityX = -5;
    banana.lifetime = 1000;
    FoodGroup.add(banana);
  }
}
function createObstacles(){
  if(frameCount % 300 == 0){
    obstacle = createSprite(600,530);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -7
    obstacle.lifetime = 1000;
    obstacleGroup.add(obstacle);
  }
}





