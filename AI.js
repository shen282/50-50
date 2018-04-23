var guess=100;
//1 = heads, 0 = tails

function playAi(){
  //redirect to gameGUI
  window.location.href="basicGame.html";
}

function flipCoin(){
  //flips coin, if the user has not guessed, request they guess first
  if(guess==100){
    guessPls();
    return;
  }

  var x=(Math.floor(Math.random() * 2) == 0); //randomly generates number as 1 or 0, 1=heads 0=tails

  if(x){
    showHeads(); //show head side of the coin if heads
  }else{
    showTails(); //show tails side of the coin if tails
  }

  var y=(Math.floor(Math.random() * 2) == 0); //randomly generates AI's coin

  //determine winner; AI always guesses HEADS
  //winner is chosen when one person guesses correctly and the other guesses incorrectly, if both are wrong/right they guess again;

  if(x==guess && y==1){ //both guess correctly
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="You guessed correctly, but your opponent did too. Guess again";
  }else if(x==guess && y==0){ //user guesses correctly AI does not
    window.location.href="youWin.html";
  }else if(x != guess && y==1){ //user guesses incorrectly AI does not
    window.location.href="youLose.html";
  }else{ //neither guess correctly
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="Neither of you guessed correctly. Guess again";
  }
}

//request user guesses heads or tails
function guessPls(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Guess which side the coin will land on by clicking heads or tails";
}

//show tails side of coin
function showTails(){
  document.getElementById("tailCoin").style.display="block";
  document.getElementById("headCoin").style.display="none";
}

//show heads side of coin
function showHeads(){
  document.getElementById("tailCoin").style.display="none";
  document.getElementById("headCoin").style.display="block";
}

//user guesses heads, set guess=1;
function pickHeads(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Your current guess is HEADS";
  guess=1;
}

//user guesses tails, set guess=0;
function pickTails(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Your current guess is TAILS";
  guess=0;
}
