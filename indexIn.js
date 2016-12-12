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
const txtEmailIn=document.getElementById('txtEmailIn');
const txtPasswordIn=document.getElementById('txtPasswordIn');
const btnLogin=document.getElementById('btnLogin');
const btnLogout=document.getElementById('btnLogout');
//loginEvent
btnLogin.addEventListener('click',e=>{
const email=txtEmailIn.value;
const password=txtPasswordIn.value;
const auth =firebase.auth();

//signIn
const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});
//Logout
btnLogout.addEventListener('click',e=>{
firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
		btnLogin.classList.add('hide');
	}
	else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
		btnLogin.classList.remove('hide');
	}
});
}());