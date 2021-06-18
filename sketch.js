//Create variables here
var happyDog, dog, foodS, foodStock, database

function preload(){ 
  
  dog.loadImage("doglmg.png")
  happyDog.loadImage("doglmg.png")
}

function setup() {
  createCanvas(500, 500);
  dog.createSprite(20,20,10,10);
  dog.addImage("doglmg.png");
  firebase=database
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);
//notsure how to write code to feed the dog

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //need help to add text to print food stock

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref("/").update({
    Food:x
  })
}

