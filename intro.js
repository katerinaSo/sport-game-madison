let txt= "Have you ever wanted to play a sports game,\n but just can't find the right one?\n This game involves falling pieces\n that you need to catch,\n so that your team has \nthe equipment they will need. Good Luck!\n C"

function intro(){
  background("#6ea1ff")
  textAlign(CENTER,CENTER)
  textSize(14)
  push()
  textFont(myFont)
  text(txt, width/2, height*0.2)
  pop()
  image(medal,width/2,height*0.6,150,190)
  health=4
  clock=60
  score=0
}