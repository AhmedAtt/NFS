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
  
//getElements
const txtEmailUp=document.getElementById('txtEmailUp');
const txtPasswordUp=document.getElementById('txtPasswordUp');
const btnSignup=document.getElementById('btnSignup');

//signUpEvent
btnSignup.addEventListener('click',e=>{
const email=txtEmailUp.value;
const password=txtPasswordUp.value;
const auth =firebase.auth();
//signUp
const promise= auth.createUserWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
	}
	else {
		console.log('not logged in');
	}
});
}());
