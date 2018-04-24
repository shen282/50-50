var guess=100;
//1 = heads, 0 = tails
var readyState=0;
//1 = Ready, 0 = Not ready
//var gameKEY = this.uID.gameKey;
//var currentPlayer = uID;

function playHuman(){
  //redirect to gameGUI
  window.location.href="basicMatch.html";
}

function ready(){
  //flips coin, if the user has not guessed, request they guess first
  if (guess==100){
    guessPls();
    return;
  }
  
  stopTimer();
  sendReady();
}

function handle() {
  if(x){
    showHeads(); //show head side of the coin if heads
  }else{
    showTails(); //show tails side of the coin if tails
  }
  
  //winner is chosen when one person guesses correctly and the other guesses incorrectly, if both are wrong/right they guess again;


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
  readyState=1;
}

//user guesses tails, set guess=0;
function pickTails(){
  document.getElementById("guessText").style.display="block";
  document.getElementById("guessText").innerHTML="Your current guess is TAILS";
  guess=0;
  readyState=1;
}

function reset(){
	guess=100;
	readyState=0;
	resetTimer();
}

/*function sendReady(){
	//alert 
}*/

var turnTimer = new Date().getTime()+16000;
var t;
resetTimer();
	  
	  
function resetTimer(){
	turnTimer = new Date().getTime()+16000;
	var timerObject = document.getElementById("timer");
	t = setInterval(function() {
	  
		var currentTime = new Date().getTime()
		var distance = turnTimer - currentTime;
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (distance > 6000) {
			timerObject.style.fontSize = "large";
	    }
		else {
			timerObject.style.fontSize = "xx-large";
		}
		timerObject.innerHTML = seconds + "s ";
	    if (distance < 1000) {
			clearInterval(t);
			timerObject.innerHTML = "TIME UP";
			if (readyState == "0"){
				forfeit();
			} else {
				//sendReady(userID, gameKey, guess);
			}
	    }		
	  });
}
	  
function stopTimer(){
	clearInterval(t);
}

function forfeit(){
	//tell the server it was a forfeit
	alert("You ran out of time!");
	stopTimer();
	window.location.href="main.html"
}
/*
//don't know where to put this stuff to make it work
export class Game {
gamekey: string;
p1ID: string;
p2ID: string;
p1choice; (100, 1, 0) : (Undecided, Heads, Tails)
p2choice; ...
p1score;
p2score;
currentOutcome = ;
//record outcome onto player's records
}

createGame(game: Game, p1userID: int, p2userID: int){
	Game.p1ID = p1userID;
	Game.p2ID = p2userID;
	firebase.database().ref().child("Games/").push(Game)
}
var commentsRef = firebase.database().ref('post-comments/' + postId);
commentsRef.on('child_added', function(data) {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

sendReady(userID, gameKey, guess){
	//pass in user ID
	var game = firebase.database().ref().child("games/"+gameKey)
	if (game.p1ID == userID) {
		game.p1choice = guess;
	} else {
		game.p2choice = guess;
	}
	game.currentOutcome=(Math.floor(Math.random() * 2) == 0);
	
	if()
  }else if(outcome == 2){ //user guesses correctly opponent does not
    window.location.href="youWin.html";
	stopTimer();
  }else if(outcome == 3){ //user guesses incorrectly opponent does not
    window.location.href="youLose.html";
	stopTimer();
  }else{ //neither guess correctly
    document.getElementById("guessText").style.display="block";
    document.getElementById("guessText").innerHTML="Neither of you guessed correctly. Guess again";
	reset();
  }
}*/