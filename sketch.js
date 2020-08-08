const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var count = 5;

var gameState = 1;

function preload() {
    //backgroundImg = loadImage("sprites/bg1.png");
    changeBG();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 299, 169);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);


    slingshot = new Slingshot(bird.body,{x: 200, y: 50});
}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
  }else{
      background("white")
  }
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.view();
    log1.display();

    box3.display();
    box4.display();
    pig3.view();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingshot.view();

    bird.display();
    platform.display();
    

    
    
}


function mouseDragged(){
    if(gameState===1)
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    gameState = 2
   slingshot.connect.bodyA = null;
    
}

function keyPressed(){
    if(keyCode===32 && count>0 && bird.body.speed<=1.5){
        bird.allpos = []
       Matter.Body.setPosition(bird.body, {x:200, y:50})
        slingshot.connect.bodyA = bird.body;
        count = count-1;
        gameState = 1
    }
   
   
}

async function changeBG(){
    var promise = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var data = await promise.json();
    var time = (data.datetime.slice(11,13));
    if(time<=18 && time>=5){
        backgroundImg = loadImage("sprites/bg1.png");
    }else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}
