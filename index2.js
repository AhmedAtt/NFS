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
const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword');
const btnLogin=document.getElementById('btnLogin');
const btnSignup=document.getElementById('btnSignup');
const btnLogout=document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click',e=>{
//Get email and pass
const email=txtEmail.value;
const password=txtPassword.value;
const auth =firebase.auth();
//sign in 
const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});


//Add signup event
btnSignup.addEventListener('click',e=>{
//Get email and pass
//TODO:Check for REAL EMAIL
const email=txtEmail.value;
const password=txtPassword.value;
const auth =firebase.auth();
//sign in 
const promise= auth.createUserWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});

btnLogout.addEventListener('click',e=>{
firebase.auth().signOut();

});



//Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
	}
	else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
	}

})
});



}());
  