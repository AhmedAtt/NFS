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
console.log('hello') ;
console.log("Get elemnts");
const txtEmail=document.getElementById('signupEmail');
const txtPassword=document.getElementById('signupPassword');
const btnSignup=document.getElementById('signupSubmit');
console.log('hello') ;
console.log("Email--> "+txtEmail.value);
console.log("Password--> "+txtPassword.value);


btnSignup.addEventListener('click',e=>{
//Get email and pass
//TODO:Check for REAL EMAIL
console.log("Dakhal");
const email=txtEmail.value;
const password=txtPassword.value;
const auth =firebase.auth();
//sign up
console.log(email)
console.log(password)
console.log("Creating account!!")
const promise= auth.createUserWithEmailAndPassword(email,password);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"+email)
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
