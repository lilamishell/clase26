
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  rectangle1 = new Ground(100,300,100,20);
rectangle2 = new Ground(150,300,100,20);
rectangle3 = new Ground(200,300,100,20);
rectangle4 = new Ground(250,300,100,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  con =Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con);
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rectangle1.show();
  rectangle2.show();
  rectangle3.show();
  rectangle4.show();
  


 

  ellipse(ball.position.x,ball.position.y,20);
  stroke("red");
  strokeWeight(3);
  line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  