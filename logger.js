

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("mainLogin").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email = user.email;
      document.getElementById("signInText").innerHTML = "Signed in as: " + email;
    }
  } else {
    // No user is signed in.
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("mainLogin").style.display = "block";
  }
});

function matchRegular(){
  //window.alert("button check");
}

function sendLogin(){
  var userName1 = document.getElementById("loginUsername").value;
  var password1 = document.getElementById("loginPassword").value;
  //window.alert(userName1 + " " + password1);
  firebase.auth().signInWithEmailAndPassword(userName1, password1).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
  // ...
});
}

function signOff(){
   firebase.auth().signOut();
}

function sendRegister(){
  var userName1 = document.getElementById("loginUsername").value;
  var password1 = document.getElementById("loginPassword").value;
  firebase.auth().createUserWithEmailAndPassword(userName1, password1).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
  // ...
});
}
