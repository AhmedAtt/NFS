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
const txtName=document.getElementById('txtName');
const txtEmailUp=document.getElementById('txtEmailUp');
const txtPasswordUp=document.getElementById('txtPasswordUp');
const txtPasswordUp2=document.getElementById('txtPasswordUp2');
const btnSignup=document.getElementById('btnSignup');
//make emails format compatible with firebase
function fixEmail(email) {
  if (!email) return false
  email = email.toLowerCase();
  email = email.replace(/\./g, ',');
  return email;
}
//signUpEvent
btnSignup.addEventListener('click',e=>{
const email=txtEmailUp.value;
const password=txtPasswordUp.value;
const name=txtName.value;
const auth =firebase.auth();
//signUp and createData
if (txtPasswordUp2.value != txtPasswordUp.value){
document.getElementById('pwerror').classList.remove('hide'); //remove pw mismatch
console.log("Please confirm your password correctly");
txtPasswordUp.value="";
txtPasswordUp2.value=""; //clear pw to re-enter
}
else{
document.getElementById('pwerror').classList.add('hide'); //add pw mismatch
const promise= auth.createUserWithEmailAndPassword(email,password);
var profileRef = firebase.database().ref('Profiles'); //Create Profile object
var profile = profileRef.child(fixEmail(email)); //Set Email as primary key
profile.set({Email: email, Name: name, Age: "test", About: "test", Country: "test", ScoreM: 0, ScoreE: 0 }); //Create paths inside profile
promise.catch(e=>console.log(e.message));
}
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		window.location.href = "Signed.html";
		btnSignup.classList.add('hide');
	}
	else {
		console.log('not logged in');
		btnSignup.classList.remove('hide');
	}
});
}());