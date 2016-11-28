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
const txtEmailIn=document.getElementById('txtEmailIn');
const txtPasswordIn=document.getElementById('txtPasswordIn');
const btnLogin=document.getElementById('btnLogin');
//Add login event
btnLogin.addEventListener('click',e=>{
//Get email and pass
const email=txtEmailIn.value;
const password=txtPasswordIn.value;
const auth =firebase.auth();
//sign in 
const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});
}());
  