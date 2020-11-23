var fixedRect, movingRect;
var ob1,ob2;
var edges;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(100,400,40,50);
  ob1.shapeColor = "red";
  ob1.velocityX = 4;
  ob2 = createSprite(400,400,60,30);
  ob2.shapeColor = "yellow";
  ob2.velocityX = -4;
  edges = createEdgeSprites();
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {

  background(0,0,0);  
  bounceOff(fixedRect,movingRect);
  bounceOff(ob1,ob2);
  bounceOff(ob1,edges[0]);
  bounceOff(ob2,edges[1]);
  drawSprites();
}
