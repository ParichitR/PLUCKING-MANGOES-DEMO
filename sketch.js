
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,tree,treeimg
var boy,boyimg
var stones
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8

function preload()
{
	treeimg=loadImage("tree.png")
	boyimg=loadImage("boy.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	ground=newGround()
	stones=new Stones(100,450,20);
	mango1=new Mango(600,250,40)
	mango2=new Mango(700,250,40)
	mango3=new Mango(700,250,40)
	mango4=new Mango(800,250,40)
	mango5=new Mango(800,250,40)
	mango6=new Mango(800,250,40)
	mango7=new Mango(600,250,40)
	mango8=new Mango(700,250,40)

	attach=new Throw(stones.body,{x:100,y:465})

	tree =createSprite(750,350)
	tree.addImage(treeimg)
	tree.scale=0.4

	boy=createSprite(150,550)
	boy.addImage(boyimg)
	boy.scale=0.15

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ill("black")
  textSize(18)

  detectCollision(stones,mango1)
  detectCollision(stones,mango2)
  detectCollision(stones,mango3)
  detectCollision(stones,mango4)
  detectCollision(stones,mango5)
  detectCollision(stones,mango6)
  detectCollision(stones,mango7)
  detectCollision(stones,mango8)

  drawSprites();

  stones.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
}

function mouseDragged(){
	matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x-lmango.body.position.x<lmango.diametre+lstones.diametre
		&& lmango.body.position.x-lstones.body.position.x<lmango.diametre+lstones.diametre
		&& lmango.body.position.y-lstones.body.position.y<lmango.diametre+lstones.diametre
		&& lmango.body.position.y-lstones.body.position.y<lmango.diametre+lstones.diametre){
		Matter.body.setStatic(lmango.body,false)}		
}

	function keypressed(){
		if(keyCode===32){
			Matter.body.setPosition(stones.body,{x:100,y:465})
		}
	}


