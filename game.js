function game(){
	console.log(clock)
  if (frameCount%60==0){
    clock-=1
}
  if (clock<1){
    screen=3
  }
    
  background("#ff59d0") 
  textSize(20)
  text("💜".repeat(health),70,25)
  if(health<1){screen=3}
  push()
 fill("#3b2059")
  textSize(20)
  textFont(myFont)
  text("score:"+score,280,50)
  textSize(20)
  text("time left: "+clock,300,25)
  pop()
  image(c,cx,cy,50,50)
  cy=cy+5
  if(cy>height){
    cy=-10
    cx=random(20,width-20)
    c=random(parts)
    health-=1
  }
  image(trophy,tx,ty,tsize,tsize)
  if(keyIsDown(RIGHT_ARROW)){
    tx+=3
  }
 else if(keyIsDown(LEFT_ARROW)){
    tx-=3
  }
  if(tx>width){
    tx=0
  }
  if(tx<0){
    tx=width
  }
d=dist(cx,cy,tx,ty)
  if(d<50){
    cx=random(20,width-20)
    c=random(parts)
    cy=20
    score+=1
  }
}
