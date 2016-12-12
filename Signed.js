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
const btnLogout=document.getElementById('btnLogout');
//Logout
btnLogout.addEventListener('click',e=>{
firebase.auth().signOut();
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