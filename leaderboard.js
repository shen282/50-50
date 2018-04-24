
function updateleaderAI(){

  //window.alert(uID);
  //document.getElementById("testId").innerHTML = "userid&email " + uID + email;
  var scores = firebase.database().ref("users");
  var counter = 9;
  var namer;
  var scorer;
  //var counter2 = 15;
  scores.orderByChild("score").limitToLast(11).on("child_added", function(snapshot) {

    var holder;
    holder = snapshot.key;
    var u = snapshot.val();
    //window.alert(counter + "counter");
    if(counter == 9){
      document.getElementById("name7").innerHTML= holder;
      document.getElementById("score7").innerHTML = u.score;
    }else if(counter == 8){
      document.getElementById("name6").innerHTML= holder;
      document.getElementById("score6").innerHTML = u.score;
    }else if(counter == 7){
      document.getElementById("name5").innerHTML= holder;
      document.getElementById("score5").innerHTML = u.score;
    }else if(counter == 6){
      document.getElementById("name4").innerHTML= holder;
      document.getElementById("score4").innerHTML = u.score;
    }else if(counter == 5){
      document.getElementById("name3").innerHTML= holder;
      document.getElementById("score3").innerHTML = u.score;
    }else if(counter == 4){
      document.getElementById("name2").innerHTML= holder;
      document.getElementById("score2").innerHTML = u.score;
    }else if(counter == 3){
      //window.alert("counter2if")
      document.getElementById("name1").innerHTML= holder;
      document.getElementById("score1").innerHTML = u.score;
    }else if(counter == 2){

    }

    counter=counter-1;
    //window.alert(counter);
    //counter2--;
    //window.alert(holder.email);
    //console.log(holder);
  });

}
function printHtml(user, scores, counter){
  if(counter ==8){
    document.getElementById("name1").innerHTML= holder;
    document.getElementById("score1").innerHTML = u.score;
  }else if(counter == 7){
    document.getElementById("name2").innerHTML= holder;
    document.getElementById("score2").innerHTML = u.score;
  }else if(counter == 6){
    document.getElementById("name3").innerHTML= holder;
    document.getElementById("score3").innerHTML = u.score;
  }else if(counter == 5){
    document.getElementById("name4").innerHTML= holder;
    document.getElementById("score4").innerHTML = u.score;
  }else if(counter == 4){
    document.getElementById("name5").innerHTML= holder;
    document.getElementById("score5").innerHTML = u.score;
  }else if(counter == 3){
    document.getElementById("name6").innerHTML= holder;
    document.getElementById("score6").innerHTML = u.score;
  }else if(counter == 2){
    document.getElementById("name7").innerHTML= holder;
    document.getElementById("score7").innerHTML = u.score;
  }else if(counter == 1){
    document.getElementById("name8").innerHTML= holder;
    document.getElementById("score8").innerHTML = u.score;
  }
}


function testBoard2(){
  window.alert(uID);

  //firebase.database().ref().child("users/"+uID).set({score: 150});
  //firebase.database().ref().child("users/"+uID).set({score: 200});
}
