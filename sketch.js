const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var snow;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(400,200,50,50)
  
  
}

function draw() {
  background(255,255);  
  drawSprites();

  Engine.update(engine);
  snow.display();

  
}