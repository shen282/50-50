var guess=100;
//1 = heads, 0 = tails
function playAi(){
  window.location.href="basicGame.html";
}
function flipCoin(){
  if(guess==100){
    guessPls();
    return;
  }
  var x=(Math.floor(Math.random() * 2) == 0);
  if(x){
    showHeads();
  }else{
    showTails();
  }
  var y=(Math.floor(Math.random() * 2) == 0);

  if(x==guess && y==1){
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="You guessed correctly, but your opponent did too. Guess again";
  }else if(x==guess && y==0){
    window.location.href="youWin.html";
  }else if(x != guess && y==1){
    window.location.href="youLose.html";
  }else{
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="Neither of you guessed correctly. Guess again";
  }
}
function guessPls(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Guess which side the coin will land on by clicking heads or tails";
}
function showTails(){
  document.getElementById("tailCoin").style.display="block";
  document.getElementById("headCoin").style.display="none";
}
function showHeads(){
  document.getElementById("tailCoin").style.display="none";
  document.getElementById("headCoin").style.display="block";
}
function pickHeads(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Your current guess is HEADS";
  guess=1;
}
function pickTails(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Your current guess is TAILS";
  guess=0;
}
