
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    ground1 = new ground(400,680,800,30)     
    ground2 = new ground(400,200,350,30)
    ball1 = new Ball(270,430,20,20)
    ball2 = new Ball(350,430,20,20)
    ball3 = new Ball(430,430,20,20)
    ball4= new Ball(510,430,20,20)
    rope1 = new Rope(ball1.body,{x:260,y:200});
    rope2 = new Rope(ball2.body,{x: 320,y: 210});
    rope3= new Rope(ball3.body,{x:420,y:220})
    rope4 = new Rope(ball4.body,{x:520,y:230})


}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,200,50)
  
  drawSprites();
  ground1.display();
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:-25})




}





}


