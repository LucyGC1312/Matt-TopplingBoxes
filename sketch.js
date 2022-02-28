const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box3=new Box(200,300,50,50);
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box4 = new Box(200,300,50,50);
    box5 = new Box(240,100,50,100);
    box6 = new Box(240,100,50,100);
    box7 = new Box(240,100,50,100);
    box8 = new Box(240,100,50,100); 
    
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display(); 
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
 
    
    ground.display();
}
