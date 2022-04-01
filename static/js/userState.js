
// const firebaseConfig = {
//     apiKey: "AIzaSyDVNt4gG_HTWTUa4ui6SXvrlDJpCenVnbA",
//     authDomain: "mv-soadu.firebaseapp.com",
//     projectId: "mv-soadu",
//     storageBucket: "mv-soadu.appspot.com",
//     messagingSenderId: "882446021908",
//     appId: "1:882446021908:web:78b27a36c50b8535417e01",
//     measurementId: "G-EE2VKEV17N"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth =  firebase.auth();
// let cloudDB = firebase.firestore();


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    console.log("User: ", user);
    logedIn = true;
    // window.location = "index.html";
} else {
    console.log("No user is signed in.");
    logedIn = false;
    window.location = "login.html";
    }
});
