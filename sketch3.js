let x=[];
let y=[];
let size = [];
let num = 100;
let sizes= [];
let r = [];
let g = [];
let b = [];
let a = [];
let song;


function preload(){
  song = loadSound('supernatural.m4a')
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for(i=0;i<num;i++){
    x[i] = random(width);
    y[i] = random(height);
    size[i] =random(50,100);
    sizes[i] = random(1,10);
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
    a[i] = random(50,100);
  }
}

function draw() {
  background(0,10);
  for(i=0;i<num;i++){
    if(size[i]>200 || size[i] <1){
      sizes[i] = -sizes[i];
    }
    size[i] += sizes[i];
    fill(r[i],g[i],b[i],a[i]);

    
    rect(x[i],y[i],size[i])
  }
}


let count = 0;
function mousePressed() {
  for(i=0;i<num;i++){
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
    a[i] += 50;
    sizes[i] = random(1,10);
  }

  if(count%2==0){
    song.play();
  }else{
    song.pause();
  }
  count += 1;
}