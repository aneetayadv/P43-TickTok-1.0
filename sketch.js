var tick;

var music;

var backgrounds;

function preload(){

  tick = loadSound("tick.mp3");

  backgrounds = loadImage("image.jpg");

  music = loadSound("music.mp3");

}


function setup() {

  createCanvas(400,400);

  angleMode(DEGREES);

  tick.loop();
  music.loop();

}

function draw() {

  background(backgrounds);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  stroke("white");
  fill("red");
  text("Time left to escape: "+(23-hr)+":"+(59-mn)+":"+(59-sc),100,380);
  
  translate(200,200);
  rotate(-90);

  seconds();
  minutes();
  hours();
  
  push();
  stroke("white");
  point(0,0);
  pop();

}

function seconds(){
  strokeWeight(8);
  let sc = second();
    stroke("#6497A0");
    noFill();
    var sec = map(sc,0,60,0,360);
    arc(0,0,300,300,0,sec);

    push();
    rotate(sec);
    strokeWeight(7);
    stroke("#8A5EE1");
    line(0,0,100,0);
    pop();
}

function minutes(){
  strokeWeight(8);
  let mn = minute();
    stroke("#e06514");
    noFill();
    var min = map(mn,0,60,0,360);
    arc(0,0,280,280,0,min);

    push();
    rotate(min);
    strokeWeight(7);
    stroke("#19d691");
    line(0,0,75,0);
    pop();
}

function hours(){
  strokeWeight(8);
  let hr = hour();
    stroke("orange");
    noFill();
    var h = map(hr%12,0,12,0,360);
    arc(0,0,260,260,0,h);

    push();
    rotate(h);
    strokeWeight(7);
    stroke("gold");
    line(0,0,50,0);
    pop();

}