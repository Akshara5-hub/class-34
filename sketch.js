const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine
var world
var ground
var box1,box2,box3,box4,box5,box6,box7,box8;
var ball;
var constraint;

function setup(){
engine = Engine.create();
world = engine.world;
canvas =createCanvas (800,800);
ground = new Ground(400,790,800,20)
box1 = new Box(600,300,70,70);
box2 = new Box(600,400,70,70);
box3 = new Box(600,100,70,70);
box4 = new Box(600,200,70,70);
box5 = new Box(600,500,70,70);
box6 = new Box(600,600,70,70);
box7 = new Box(600,700,70,70);
box8 = new Box(600,0,70,70);
ball = Matter.Bodies.circle(300,400,50)
constraint = new Constraint(); 
World.add(world,ball);
Engine.run(engine);
}

function draw(){
  background("pink")
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  constraint.display();
    push ()
    translate(ball.position.x,ball.position.y)
    rotate (ball.angle)
    rectMode(CENTER)
    circle(0,0,100)
    pop ()
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
