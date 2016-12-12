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
const txtPasswordUp2=document.getElementById('txtPasswordUp2');
const btnSignup=document.getElementById('btnSignup');
const btnLogout=document.getElementById('btnLogout');
//signUpEvent
btnSignup.addEventListener('click',e=>{
const email=txtEmailUp.value;
const password=txtPasswordUp.value;
const auth =firebase.auth();
//signUp
if (txtPasswordUp2.value != txtPasswordUp.value){
console.log("Please confirm your password correctly");
txtPasswordUp.value="";
txtPasswordUp2.value="";
}
else{
const promise= auth.createUserWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
}
});
//Logout
btnLogout.addEventListener('click',e=>{
firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
		btnSignup.classList.add('hide');
	}
	else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
		btnSignup.classList.remove('hide');
	}
});
}());
