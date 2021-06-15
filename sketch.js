const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var count = 0;

function preload(){
  bgImg  = loadImage("bg.webp");
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  GROUND = new Ground(300,585,580,10);
  Border_1 = new Ground(300,595,600,40);
  Border_2 = new Ground(5,300,10,600);
  Border_3 = new Ground(300,5,600,10);
  Border_4 = new Ground(595,300,10,600);

  division1 = new Division(85,500,10,155);
  division2 = new Division(170,500,10,155);
  division3 = new Division(255,500,10,155);
  division4 = new Division(340,500,10,155);
  division5 = new Division(425,500,10,155);
  division6 = new Division(510,500,10,155);
  division7 = new Division(595,500,10,155);
  division8 = new Division(5, 500, 10, 155);

      for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(bgImg);  
  Engine.update(engine);  

  textSize(23)
  fill("black");
  text("0", 40, 550);
  text("200", 110, 550);
  text("500", 194.5, 550);
  text("1000", 270, 550);
  text("500", 365, 550); 
  text("200", 450, 550);
  text("0", 545, 550);

  Engine.update(engine);
  
  drawSprites();

  fill(255);
  GROUND.display();
  fill("red");
  stroke("red");
  Border_1.display();
  Border_2.display();
  Border_3.display();
  Border_4.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(100, 700), 10,10));
  }

  
 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
 
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
division8.display();
}

