(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzWxlbKReTJQyvad5DLBJ6je5e4IDpUVQ",
    authDomain: "agile-30622.firebaseapp.com",
    databaseURL: "https://agile-30622.firebaseio.com",
    storageBucket: "agile-30622.appspot.com",
    messagingSenderId: "592891433441"
  };
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
var profileRef = firebase.database().ref('Profiles'); //Create Profile object
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		const key = fixEmail(firebase.auth().currentUser.email);
		profileRef.on("value",gotData,errData);
 		 function errData(error) {
		  console.log("Something went wrong.");
 		 console.log(error);
}
  function gotData(data){
  var profiles = data.val();
  var profile = profiles[key];
  name.innerHTML=profile['Name'];
  about.innerHTML=profile['About'];
  age.innerHTML=profile['Age'];
  country.innerHTML=profile['Country'];
  scoreM.innerHTML=profile['ScoreM'];
  scoreE.innerHTML=profile['ScoreE'];
}
btnBack.onclick = function(){
const about = document.getElementById("about").innerHTML;
const age = document.getElementById("age").innerHTML;
const country = document.getElementById("country").innerHTML;
const name = document.getElementById("name").innerHTML;
const scoreM = document.getElementById("score1").innerHTML;
const scoreE = document.getElementById("score2").innerHTML;
firebase.database().ref('Profiles/' + key).set({
	Email: firebase.auth().currentUser.email,
	Name: name,
	ScoreM: scoreM,
	ScoreE: scoreE,
	About: about,
	Age: age,
	Country: country
});
location.href='Signed.html';
};
}
	else {
		console.log('not logged in');
	}
});
}());