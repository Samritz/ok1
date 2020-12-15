
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1, wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);

    ball = new Ball(600,300,20,20);

    wall1 = new Box(200,650,120,20);
    wall2 = new Box(100,650,20,120);
    wall3 = new Box(250,650,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
 keyPressed();
  drawSprites();
 }
function keyPressed() {
if(keyCode === UP_ARROW){


  Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-1});
}
if(keyCode === DOWN_ARROW){


  Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:1});
}
if(keyCode === LEFT_ARROW){


  Matter.Body.applyForce(ball.body,ball.body.position,{x:-1,y:0});
}



}


