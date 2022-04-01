// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDVNt4gG_HTWTUa4ui6SXvrlDJpCenVnbA",
    authDomain: "mv-soadu.firebaseapp.com",
    projectId: "mv-soadu",
    storageBucket: "mv-soadu.appspot.com",
    messagingSenderId: "882446021908",
    appId: "1:882446021908:web:78b27a36c50b8535417e01",
    measurementId: "G-EE2VKEV17N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();
let cloudDB = firebase.firestore();

//signup function
function signUp(){
  var email = document.getElementById("email_");
  var password = document.getElementById("password_");
  var confirmPassword = document.getElementById("confirmPassword_");
  console.log(email.value, password.value, confirmPassword.value);
  if (password.value == confirmPassword.value) {
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        console.log("SignUp Successfully", user);
        cloudDB.collection("users").doc(email.value).set(
            {
                uid: auth.currentUser.uid,
                email: email.value,
                type: "user"
            }
        ).then(
            // console.log("Done!"),
            document.getElementById("email_").value = '',
            document.getElementById("password_").value = '',
            document.getElementById("confirmPassword_").value = '',
            alert("SignUp Successfully, Now Login!"),
            window.location = "login.html"
        );
    });
    promise.catch((e)=>{
      if (e)
      alert(e.message);
      else
      alert("SignUp Successfully, Now Login!");
    });
  } else {
    alert("Password does not match!");
  }
  
}

//signIN function
function  signIn(){
  var email = document.getElementById("email").value;
  var password  = document.getElementById("password").value;
  
  const promise = auth.signInWithEmailAndPassword(email, password).then((user) => {
    getUserData(email);
    email = " ";
    password = " ";
    // alert("Done!");
    window.location = "../../index.html";
  })
  .catch(e=>alert(e.message));

  promise.catch((e)=>{
    if (e)
    alert(e.message);
    else
    alert("Login Successfull!");
  });
//   promise.catch(e=>alert(e.message));
  console.log(promise);
  // localStorage.clear();
  localStorage.setItem("isLogedIn", true);
  localStorage.setItem("isAdmin", true, "Query from database!");
  // window.location = "portal.html";
//   setTimeout(() => {
//     console.log(isLogedIn());
//     if (isLogedIn() != null)
//     window.open('portal.html','_self');
//   }, 2000)
}

//signOut
function signOut(){
  auth.signOut();
  localStorage.clear();
  localStorage.setItem("isLogedIn", false);
  location.reload();
  alert("SignOut Successful from System");
}

function isLogedIn() {
  var user = auth.currentUser;
  console.log("User: ", user);
  return user;
}

async function getUserData(email) {
  console.log("Email: ", email);
  await cloudDB.collection("users").doc(email).get()
  .then((doc) => {
    if (doc.exists) {
      let d = doc.data()
      console.log("User Data: ", d);
      localStorage.setItem("user", JSON.stringify(d));
      return d;
    } else {
      console.log("Data does not exists");
    }
  });
  // console.log("User Data: ", userData);
}

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       console.log("User: ", user);
//       // window.location = "../../index.html";
//     } else {
//       console.log("No user is signed in.");
//       window.location = "../../login.html";
//     }
// });

// $( document ).ready(function() {
//   console.log( "testing.." );
//   var user = auth.currentUser;
//   console.log("User: ", user);
// });
// active user to homepage
// firebase.auth().onAuthStateChanged((user)=>{
//   if(user){
//     var email = user.email;
//     alert("Active user "+email);
//     // window.location = "portal.html"
//   }else{
//     // alert("No Active user Found");
//     window.location = "index.html";
//   }
// })