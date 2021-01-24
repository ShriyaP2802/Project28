
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,boy,tree,stone,launcher;
var mango1,mango2,mango3,mango4,mango5;
var gameState = "onSling";

function preload()
{
	boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(200,680,10,10);
	boy.addImage(boyImg);

	ground = new Ground(400,height,800,20);
	tree = new Tree(600,680,10,10);

	mango1 = new Mango(600,670,10,10);
	mango2 = new Mango(610,680,10,10);
	mango3 = new Mango(620,690,10,10);
	mango4 = new Mango(590,660,10,10);
	mango5 = new Mango(580,650,10,10);

	stone = new Stone(200,680,10,10);;
	launcher = new Launcher(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  ground.display();
  launcher.display();
  drawSprites();
 
}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}
function detectCollision(Lstone,Lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r + lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone.body,{x:235,y:420})
			launcherObject.attach(stone.body);
		}
	}






