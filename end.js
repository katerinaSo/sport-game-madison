let result="You've finished! Was it hard?\n Did you beat your score? Ask a teamate\n to play against you! Who will win?\n If not a teamate I dare you to \n challenge yourself to beat your own score!!"
function end_game(){
  background("#dd6eff")

textAlign(CENTER,CENTER)
push()
 textFont(myFont)
 fill(0)
  textSize(14)
  text(result, width/2,height*0.2)
  textSize(30)
  text("Score: " +score,width/2,height-55)
  pop()
  image(celebrate,width/2,height*0.6,150,190)
 
}