const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

 // playerArcher = new ( 340, playerBase.position.y - 112, 120, 120);
 playerArcher = new PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher =  PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher = new PlayerArcher( );

 playerArcher2 = new PlayerArcher( 340, 700, 120, 120);
 playerArcher3 = new PlayerArcher( 700, 700, 120, 120);
 playerArcher4 = new PlayerArcher( 700, 200, 120, 120);

 //player2 = new Player (400,playerBase.position.y + 112, 120, 120);
  // Why it is not working?
}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  Engine.update(engine);


  // playerArcher.display;
  // playerArcherdisplay();
  playerArcher.display();
  playerArcher2.display();
  playerArcher3.display();
  playerArcher4.display();
  //player2.display();
  // display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
