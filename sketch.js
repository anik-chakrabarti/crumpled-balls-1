
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine, world ;
var box1,box2,box3,ground1,paper ;

function setup() {
	createCanvas(1500,400);


	engine = Engine.create();
	world = engine.world;

	//creating bodies 
	box1 = new box(600,340,100,10);
	box2 = new box(650,325,10,50);
	box3 = new box(550,325,10,50); 
  ground1 = new ground(850/2,350,900,10);

  //paper ball
  paper = Bodies.circle(150,250,10);
  World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground1.display();   

  ellipseMode(RADIUS);
  fill("pink");
  ellipse(paper.position.x,paper.position.y,10,10);  
 
  if(keyDown("space")){
   paper.force.x = 0.0003 ;
   paper.force.y = -0.0008 ; 
  }

  if(paper.position.x>700){
    paper.position.x = 150 ;
    paper.position.y = 250 ;
  }

}



