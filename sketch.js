var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6
var bg, bgImg
var healingPotion1, healingPotion2
var player1, player2

function preload(){
    zombie1 = loadImage("assets/zombie 1.png");
    zombie2 = loadImage("assets/zompie 2.png");
    zombie3 = loadImage("assets/zombie 3.png");
    zombie4 = loadImage("assets/zombie 4.png");
    zombie5 = loadImage("assets/zombie 5.png");
    zombie6 = loadImage("assets/zombie 6.png");
    bgImg = loadImage("assets/bg.jpg");
    healingPotion1 = loadImage("assets/healing potion 1 and 2.png");
    healingPotion2 = loadImage("assets/healing potion 1 and 2.png");
    player1 = loadImage("assets/player 1.png");
    player2 = loadImage("assets/player 2.png");
}

function setup() { 
    createCanvas(windowWidth,windowHeight);
    //adding the background image
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20); 
    bg.addImage (bgImg); 
    bg.scale = 1.1 
    
    //creating the player sprite 
    player = createSprite(displayWidth-1150, displayHeight-300, 50, 50); 
    player.addImage(player1); 
    player.scale = 0.3;
}

function draw(){
    background(bg);
    drawSprites();
}