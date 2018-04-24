var guess=100;
//1 = heads, 0 = tails
var readyState=0;
//1 = Ready, 0 = Not ready

function playHuman(){
  //redirect to gameGUI
  window.location.href="basicMatch.html";
}

function ready(){
  //flips coin, if the user has not guessed, request they guess first
  if(guess==100){
    guessPls();
    return;
  }
  
  readyState=1;
  sendReady();
}

function handle() {
  if(x){
    showHeads(); //show head side of the coin if heads
  }else{
    showTails(); //show tails side of the coin if tails
  }

  //determine winner; AI always guesses HEADS
  //winner is chosen when one person guesses correctly and the other guesses incorrectly, if both are wrong/right they guess again;

  if(x==guess && y==1){ //both guess correctly
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="You guessed correctly, but your opponent did too. Guess again";
	reset();
  }else if(x==guess && y==0){ //user guesses correctly AI does not
    window.location.href="youWin.html";
	stopTimer();
  }else if(x != guess && y==1){ //user guesses incorrectly AI does not
    window.location.href="youLose.html";
	stopTimer();
  }else{ //neither guess correctly
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="Neither of you guessed correctly. Guess again";
	reset();
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

function reset(){
	guess=100;
	readyState=0;
	resetTimer();
}

function sendReady(){
	
}

var turnTimer = new Date().getTime()+15000;
	  
	  var x = setInterval(function() {
	  
		var currentTime = new Date().getTime()
		var distance = turnTimer - currentTime;
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("timer").innerHTML = seconds + "s ";
	  
	    if (distance < 0) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = "TIME UP";
			forfeit();
	    }		
	  });
	  
function resetTimer(){
	turnTimer = new Date().getTime()+15000;
}
	  
function stopTimer(){
	clearInterval(x);
}

function forfeit(){
	alert("You ran out of time!");
	window.location.href="main.html"
}