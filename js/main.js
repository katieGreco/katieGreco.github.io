// Initialize Firebase
var config = {
    apiKey: "AIzaSyChBbBIh9VItKK5ojFpYlBRLMDBRZhUCoU",
    authDomain: "reservation-site-bad2e.firebaseapp.com",
    databaseURL: "https://reservation-site-bad2e.firebaseio.com",
    projectId: "reservation-site-bad2e",
    storageBucket: "reservation-site-bad2e.appspot.com",
    messagingSenderId: "979714143384"
  };
 firebase.initializeApp(config);

  // Connect to Database
var database = firebase.database();
