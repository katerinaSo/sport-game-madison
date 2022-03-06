 
let screen,bx,by,cx,cy,health,timer,score,trophy,tx,ty,tsize,d
let parts=[]
let myFont
let medal
let celebrate
let clock
function preload(){
trophy=loadImage("trophy.gif")
celebrate=loadImage("Celebrate.png")
   for(let i=0;i<4;i++){
    parts.push(loadImage("sports"+i+".png"))
  }
myFont=loadFont("pointfree.ttf")
medal=loadImage("medal.png")
}

function setup() {
  createCanvas(400, 450);
  screen=1
  c=random(parts)
  cx=random(20,width-20)
  cy=2
  health=4
  tsize=85
  imageMode(CENTER)
  tx=random(20,width-20)
  ty=height-30
  score=0
  clock=60
  frameRate(60)
  
}

function draw() {
 
  
  background(220);
  if(screen==1){
    intro()
  }

  if(screen==2){
    game()
  }
  
  if(screen==3){
    end_game()
  }
  
}



function mouseClicked(){
  if(screen==1){
  clock=60
 screen=2
  }
  if(screen==3){
    health=4
    score=0
    screen=2
  }
}