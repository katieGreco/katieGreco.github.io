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

//populate with user input later
var reservationData = {}

//get user's reservation day
$('.reservation-day li').on('click', function() {
  reservationData.day = $(this).text();
});

//get user's reservation name
$('.reservations').on('submit', function(e) {
	e.preventDefault();
	reservationData.name = $('.reservation-name').val();
//post info to Firebase
	database.ref('reservations').push(reservationData);
});

//code to display reservations with handlebars
//function getReservations() {
	database.ref('reservations').on('child_added', function(list) {
   
   var reservationList = $('.reservation-list');
   var reservations = list.val();
   // $('#reservation').empty();

   // var context = {
    //	name: allReservations[reservation].name,
    //	day: allReservations[reservation].day,
    //	reservationID: reservation
   // };

    var source = $("#reservation-template").html();
    var template = Handlebars.compile(source);
    var reservationListItem = template(reservations);
    reservationList.append(reservationListItem);
    });
//}
//getReservations();

