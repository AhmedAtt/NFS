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

//make emails format compatible with firebase
function fixEmail(email) {
  if (!email) return false
  email = email.toLowerCase();
  email = email.replace(/\./g, ',');
  return email;
}

//getElements
const name=document.getElementById("name");
const about=document.getElementById("about");
const age=document.getElementById("age");
const country=document.getElementById("country");
const scoreM=document.getElementById("score1");
const scoreE=document.getElementById("score2");
const btnBack=document.getElementById("btnBack");
const key = fixEmail(firebase.auth().currentUser.email);

function(){
	name.innerHTML=
	about.innerHTML=
	age.innerHTML=
	country.innerHTML=
	scoreM.innerHTML=
	scoreE.innerHTML=
}

btnBack.addEventListener('click', e=>{
const name = name.value;
const about = about.value;
const age = age.value;
const country = country.value;
var profileRef = firebase.database().ref('Profiles'); //Create Profile object
profileRef.child(key).child('Name').set(name);
profileRef.child(key).child('About').set(about);
profileRef.child(key).child('Age').set(age);
profileRef.child(key).child('Country').set(country);
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