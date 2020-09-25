const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var heliImg, crateImg;
var heli, crate, ground, bool;
var basket1, asket2, basket3;
engine: engine;


function setup(){
  createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    heli = new Block(200,200,20,20,true);
    ground = new Block(200,395,400,10,true);
    basket1 = new Block(200,387.5,20,5,true);
    basket2 = new Block(210,347.5,5,80,true);
    basket3 = new Block(190,347.5,5,80,true);
    bool = false;
}

function mouseReleased(){
    if (bool == false){
bool = true
 crate = new Block(heli.body.position.x,215,7,7,false);
 //crate.fill(255,255,0);
    }
}

function draw(){
    background(0,0,0);
    heli.display();
    basket1.display();
    basket2.display();
    basket3.display();
    if (keyIsDown(LEFT_ARROW)){
     if (heli.body.position.x>10){
      heli.body.position.x = heli.body.position.x-10;  
     }
    }
    if (keyIsDown(RIGHT_ARROW)){
     if (heli.body.position.x<390){
      heli.body.position.x = heli.body.position.x+10;  
     }
    }
    ground.display();
    if (crate != null){
        crate.display();
    if (ground.body.position.y - crate.body.position.y < 50){
        if (crate.body.position.x == basket1.body.position.x){
            
            basket1.body.position.x = random(30,370)
             basket1.body.position.x =  Math.round(basket1.body.position.x/10)*10
            console.log( basket1.body.position.x);
            basket2.body.position.x = basket1.body.position.x + 10
            basket3.body.position.x = basket1.body.position.x - 10
            
            }
      World.remove(world,crate.body);
        World.remove(world,basket2.body);
        World.remove(world,basket3.body);
        crate = null;
            bool = false
    }
        
    }
    Engine.update(engine);
}