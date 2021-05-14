const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world;
gameState = "start"
function preload(){
  pcImg = loadImage("pc.png")
  bgImg = loadImage("bg.jpg")
}
function setup() {
  createCanvas(1350,650);
  
   
  engine = Engine.create()
  world = engine.world

  stone1 = new Stone(700,350,60)
  stone2 = new Stone(700,340,50)
  stone3 = new Stone(700,330,40)
  stone4 = new Stone(700,320,30)
  stone5 = new Stone(700,310,20)
  stone6 = new Stone(700,300,10)
 // stone7 = new Stone(200,10,100)

  ground1 = new Ground(700,600,60,1)
  ground2 = new Ground(700,650,1400,5)

  rock = new Rock(350, 350, 50);

  slingshot = new Slingshot(rock.body, {x: 325, y: 400})

 pc1 = new Pc(250,450,150)
}

function draw() {
  background(bgImg); 

  Engine.update(engine)
  if(keyDown(LEFT_ARROW)){
   pc1.body.position.x =  pc1.body.position.x-10;
   
}
if(keyDown(RIGHT_ARROW)){
  pc1.body.position.x =  pc1.body.position.x+10;
}
if(keyDown(UP_ARROW)){
  pc1.body.position.y =  pc1.body.position.y+10;
}
if(keyDown(DOWN_ARROW)){
  pc1.body.position.y =  pc1.body.position.y-10;
}
  
  fill("Black")
  stone1.display()
  fill("White")
  stone2.display()
  fill("pink")
  stone3.display()
  fill("blue")
  stone4.display()
  fill("yellow")
  stone5.display()
  fill("red")
  stone6.display()
  fill("white")
  ground1.display()
  fill("black")
  ground2.display()
  pc1.display()
  pc1.debug = true;

  drawSprites();
  detectCollision(pc1,stone1)
  detectCollision(pc1,stone2)
  detectCollision(pc1,stone3)
  detectCollision(pc1,stone4)
  detectCollision(pc1,stone5)
  detectCollision(pc1,stone6)
  detectTouch(rock,stone1)
  detectTouch(rock,stone2)
  detectTouch(rock,stone3)
  detectTouch(rock,stone4)
  detectTouch(rock,stone5)
  detectTouch(rock,stone6)

  
 
  rock.display();
  slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y:mouseY})
 
  }

function mouseReleased(){
  slingshot.fly();
  gameState = "play"
}



function detectCollision(lpc, lstone1)
{
  stoneBodyPosition = lstone1.body.position;
  pcBodyPosition = lpc.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, pcBodyPosition.x, pcBodyPosition.y)
  //console.log(stoneBodyPosition.x-5)
  //console.log( pcBodyPosition.x-5)
  
  if(distance <= lpc.r + lstone1.r)
  {
  	 Matter.Body.setPosition(lstone1.body,{x:700,y:550});
      //Matter.Body.setStatic(lstone1.body,true)
  }
}

function detectTouch(lrock, lstone)
{
  stoneBodyPosition = lstone.body.position;
  rockBodyPosition = lrock.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,  rockBodyPosition.x,  rockBodyPosition.y)
  if(distance <= lrock.r +  lstone.r)
  {
  	 Matter.Body.setPosition( lstone.body,{x:Math.round(random(100,1200)),y:Math.round(random(100,650))});
      Matter.Body.setStatic( lstone.body,true)
  }
}