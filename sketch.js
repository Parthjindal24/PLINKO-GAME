var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 590);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,590,width,20);

  //create division objects
  for (var k = 40; k <=800; k = k + 90) {
    divisions.push(new Divisions(k,590, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 45; j <=790; j=j+50) { 
    plinkos.push(new Plinko(j,70));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,115));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,160));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,205));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%50===0){
    particles.push(new Particles(random(650,150),10,10))
  
  }
  for(m=0;m<particles.length ;m++){
particles[m].display();
  }
  //display the paricles 

}