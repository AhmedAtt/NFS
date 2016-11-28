 // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzWxlbKReTJQyvad5DLBJ6je5e4IDpUVQ",
    authDomain: "agile-30622.firebaseapp.com",
    databaseURL: "https://agile-30622.firebaseio.com",
    storageBucket: "agile-30622.appspot.com",
    messagingSenderId: "592891433441"
  };
  firebase.initializeApp(config);
//get elements
const txtEmailUn=document.getElementById('txtEmailUp');
const txtPasswordUp=document.getElementById('txtPasswordUp');
const btnSignup=document.getElementById('btnSignup');
//Add signup event
btnSignup.addEventListener('click',e=>{
//Get email and pass
//TODO:Check for REAL EMAIL
const email=txtEmailUp.value;
const password=txtPasswordUp.value;
const auth =firebase.auth();
//sign in 
const promise= auth.createUserWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});
}());
  