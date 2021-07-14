const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(600,590,1200,20)
  box1 = new Building(800,100,50,50)
  box2 = new Building(800,100,50,50)
  box3 = new Building(800,100,50,50)
  box4 = new Building(800,100,50,50)
  box5 = new Building(800,100,50,50)
  box6 = new Building(800,100,50,50)
  box7 = new Building(800,100,50,50)
  box8 = new Building(800,100,50,50)
  box9 = new Building(800,100,50,50)
  box10 = new Building(800,100,50,50)

  box11 = new Building(1000,100,50,50)
  box12 = new Building(1000,100,50,50)
  box13 = new Building(1000,100,50,50)
  box14 = new Building(1000,100,50,50)
  box15 = new Building(1000,100,50,50)
  box16 = new Building(1000,100,50,50)
  box17 = new Building(1000,100,50,50)
  box18 = new Building(1000,100,50,50)
  box19 = new Building(1000,100,50,50)
  box20 = new Building(1000,100,50,50)

  ball = new Ball(600,130,30)

  rope = new Rope(ball.body,{x:600,y:100})
}

function draw() {
  background("lightgreen");  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();

  rope.display();

  ground.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}