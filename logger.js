var uID;
var email;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("mainLogin").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      email = user.email;
      uID = user.uid;
      document.cookie = "userID=" + uID;
      document.getElementById("signInText").innerHTML = "Signed in as: " + email;
      initializeScore();
    }
  } else {
    // No user is signed in.
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("mainLogin").style.display = "block";
  }
});

function initializeScore(){ //if user does not currently have a score, initialize it
  //window.alert("in");
  //var refCheck = firebase.database().ref("users/"+uID+"/score");
  firebase.database().ref("users/"+uID+"/score").once('value').then(function(snapshot) {
    if(snapshot.val() == null){
      firebase.database().ref().child("users/"+uID).set({score: 100});
    }
    //window.alert(dat);
  });

  //window.alert(uID)
}
