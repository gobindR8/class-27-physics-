
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var bobObject
var ground1
var rope1
var bobObject2
var bobObject3
var bobObject4
var bobObject5

var rope2
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.


bobDiameter=40
startbobPositionX=width/2
startbobPositionY=height/4+500

	
	
ground1= new ground(width/2,height/4,width/7,20)
bobObject= new bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter)
	bobObject2= new bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter)
	bobObject3= new bob(startbobPositionX,startbobPositionY,bobDiameter)
	bobObject4= new bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter)
	bobObject5= new bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter)
	rope1= new rope(bobObject.body,ground1.body,-bobDiameter*2,0)
	rope2= new rope(bobObject2.body,ground1.body,-bobDiameter*1,0)
	rope3= new rope(bobObject3.body,ground1.body,bobDiameter*0.1,0)
	rope4= new rope(bobObject4.body,ground1.body,bobDiameter*1,0)
	rope5= new rope(bobObject5.body,ground1.body,bobDiameter*2,0)

	


	

	
	Engine.run(engine);

}






function draw() {
  rectMode(CENTER);
  background(200,100);
  
  drawSprites();
  bobObject.display()
  ground1.display()
  rope1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 rope2.display()
rope3.display()
rope4.display()
rope5.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){

       Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:-50,y:-45})

	}
}


