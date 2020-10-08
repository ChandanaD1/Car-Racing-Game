var database;
var position;

var playerCount = 0;
var gameState = 0;
var form, game, player;

var allPlayers;

var car1, car2, car3, car4, cars = [];
var car1img, car2img, car3img, car4img, trackimg

function preload() {
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  car4img = loadImage("images/car4.png")
  trackimg = loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth - 30, windowHeight - 30);

  game = new Game()
  game.getState();
  game.start();
}

function draw(){
  background("#c68767")
  if(playerCount == 4) {
    game.updateState(1)
  }
  if(gameState == 1) {
    game.play();
  }
  if(gameState == 2) {
    game.end();
  }
}


