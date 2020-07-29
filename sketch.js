const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var ground;

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(400,400,100,20);


  
}

function draw() {

  background(255,255,255); 
   Engine.update(engine);

   ground.display();

  
}