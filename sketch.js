// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// let engine;
// let world;

var astronaut;


function preload(){
  bg = loadImage ("images/iss.png")
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}


function setup() {
  createCanvas(800,400);
  // engine = Engine.create();
  // world = engine.world;

  // var ball_options = {
  //   restitution : 0.95,
  //   frictionAir:0.01
  // }
  //   astronaut = Bodies.circle(100,10,50,ball_options)
  //   World.add(world,astronaut)
  // createSprite(400, 200, 50, 50);

  edges = createEdgeSprites();
 

  astronaut = createSprite(300,200);
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale =0.1
  
  

}
  

function draw() {
  background(0);  
  // Engine.update(engine);

  // rect(astronaut.x,astronaut.y,300,200);
  astronaut.velocityX=1
  astronaut.velocityY=2
 astronaut.bounceOff(edges); 
    


  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
     astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", drink);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  drawSprites();
}
