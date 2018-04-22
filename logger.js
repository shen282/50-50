

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("mainLogin").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("mainLogin").style.display = "block";
  }
});



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

/*function sendRegister(){
  var userName1 = document.getElementById("loginUsername").value;
  var password1 = document.getElementById("loginPassword").value;
  window.alert(userName1 + " " + password1);
}*/
