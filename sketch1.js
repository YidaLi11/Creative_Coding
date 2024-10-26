let circs =[];
let song;
let count = 0;

function preload(){
  song = loadSound('ETA.m4a')
} 

class circ{
  constructor(x,y){
    this.loc=createVector(x,y);
    this.vec=createVector(random(-5,5),random(-5,5));
    this.size=random(40,70);
    this.col=[random(255),random(255),random(255)];
    this.size2=random(10,25);
    this.col2=[random(255),random(255),random(255)];
  }
  
  move(){
    this.loc.add(this.vec);
    this.loc.x = lerp(this.loc.x,mouseX,0.015);
    this.loc.y = lerp(this.loc.y,mouseY,0.015);
  
    this.vec.x *= 0.992;
    this.vec.y *= 0.992;
    
  }
  display(){
    noStroke();
    fill(this.col);
    ellipse(this.loc.x,this.loc.y,this.size);
    fill(this.col2);
    ellipse(this.loc.x,this.loc.y,this.size2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var r = 0;
  var g = 0;
  var b = 0;
  r = map(mouseX,0,windowWidth,0,255);
  g = map(mouseY,0,windowWidth,0,255);
  background(r, g, 179,70);
   for(const circ of circs){
   circ.move();
   circ.display();
 }
   if(frameCount%25 ==0){
  circs.push(new circ(random(windowWidth),random(windowHeight)));
    circs[circ];
  
}

if(frameCount%10 ==0){
  circs.push(new circ(mouseX,mouseY));
    circs[circ];
}

}

// function mouseDragged(){
//   if(frameCount%5 ==0){
//   circs.push(new circ(mouseX,mouseY));
//     circs[circ];
//   }
// }

function mousePressed(){
  if(count%2==0){
    song.play();
  }else{
    song.pause();
  }
  count += 1;
}