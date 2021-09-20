var movingRect,fixedRect,gobj1,gobj2,gobj3;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,100,20);
  fixedRect = createSprite(100,200,70,30);
  gobj1 = createSprite(200,100,50,50);
  gobj2 = createSprite(300,100,50,50);
  gobj3 = createSprite(400,100,50,50);
  gobj1.shapeColor = "green";
  gobj2.shapeColor = "green";
  gobj3.shapeColor = "green";
  gobj1.velocityX = 2;
  gobj2.velocityX = 2;
  gobj3.velocityX = -2;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
 movingRect.x= World.mouseX;
 movingRect.y= World.mouseY;
 console.log(movingRect.x-fixedRect.x);
 
if(isTouching(gobj2,movingRect)){
gobj2.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
gobj2.shapeColor="green";
movingRect.shapeColor="green";
}
BounceOff(gobj1,gobj3)
  drawSprites();
}

/*function BounceOff(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2)
  {
    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1;
  }
  if(object1.y - object2.y < object2.height/2 +object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    object1.velocityY = object1.velocityY*-1;
    object2.velocityY = object2.velocityY*-1;
  }
}*/
function BounceOff(object1,object2){
   if(object1.x - object2.x < object1.width/2+object2.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2){ 
    object1.velocityX = object1.velocityX * (-1); 
    object2.velocityX = object2.velocityX * (-1); 
  } 
    if(object1.y - object2.y < object2.height/2 + object1.height/2 
      && object2.y - object1.y < object2.height/2 + object1.height/2){ 
        object1.velocityY = object1.velocityY * (-1); 
        object2.velocityY = object2.velocityY * (-1); 
      } 
    }
    function isTouching(object1,object2){
      if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.x/2+object2.width/2
        && object1.y - object2.y < object2.height/2 +object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;
       }
       else{
        return false;
       }
    }
    
  