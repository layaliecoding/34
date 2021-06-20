//Create variables here
var happyDog, dog, foodS, foodStock, database

function preload(){ 
  
  dog.loadImage("doglmg.png")
  happyDog.loadImage("doglmg.png")
}
//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
// function setup() {
//   createCanvas(500, 500);
//   dog.createSprite(20,20,10,10);
//   dog.addImage("doglmg.png");
//   firebase=database
//   foodStock=database.ref("Food");
//   foodStock.on("value",readStock);

  
// }


// function draw() {  
//   background(46,139,87);
// //notsure how to write code to feed the dog

// if(keyWentDown(UP_ARROW)){
//   writeStock(foodS);
//   dog.addImage(dogHappy);
// }
//   drawSprites();
//   //need help to add text to print food stock

// }
// function readStock(data){
//   foodS=data.val();
// }
// function writeStock(x){

//   database.ref("/").update({
//     Food:x
//   })
// }

