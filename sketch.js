const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,basket, ground,rect1,rect2,rect3,basketimg,ballS;

function preload()
{
	basketimg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-20,width,20);
   basket = createSprite(width-30,height-70,20)
    ball = new Ball(50,height-30,10);

    basket.addImage(basketimg);
    basket.scale = 0.25;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  basket.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:19,y:-19});
}