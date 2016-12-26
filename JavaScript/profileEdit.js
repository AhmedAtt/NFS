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
const about=document.getElementById("about");
const age=document.getElementById("age");
const country=document.getElementById("country");
const aboutIn=document.getElementById("aboutIn");
const ageIn=document.getElementById("ageIn");
const countryIn=document.getElementById("countryIn");
const btnEdit=document.getElementById("editProfile");
const btnSave=document.getElementById("saveProfile");

//addonClick4btnEdit
btnEdit.onclick = function(){
	//Hide&Add
	btnSave.classList.remove('hide');
	aboutIn.classList.remove('hide');
	ageIn.classList.remove('hide');
	countryIn.classList.remove('hide');
	btnEdit.classList.add('hide');
	about.classList.add('hide');
	age.classList.add('hide');
	country.classList.add('hide');

}
//addonClick4btnSave
btnSave.onclick = function(){
	//getElementsVals
	const aboutText=aboutIn.value;
	const ageText=ageIn.value;
	const countryText=countryIn.value;
	//AssignToProfile
	about.innerHTML=aboutText;
	age.innerHTML=ageText;
	country.innerHTML=countryText;
	//Hide&Add
	btnSave.classList.add('hide');
	aboutIn.classList.add('hide');
	ageIn.classList.add('hide');
	countryIn.classList.add('hide');
	btnEdit.classList.remove('hide');
	about.classList.remove('hide');
	age.classList.remove('hide');
	country.classList.remove('hide');
}

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
	}
	else {
		console.log('not logged in');
	}
});
}());
