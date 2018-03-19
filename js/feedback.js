var sourcestudentname = document.getElementById("studname")

var p1overallScore = document.getElementById("p1overallScore")
var p1creativityscore = document.getElementById("p1creativityscore")
var p1cooperationscore = document.getElementById("p1cooperationscore")
var p1communicationscore = document.getElementById("p1communicationscore")
var p1organizationscore = document.getElementById('p1organizationscore')
var p1contributionscore = document.getElementById("p1contributionscore")
var p1timemanagementscore = document.getElementById('p1timemanagementscore')
var p1problemsolvingscore = document.getElementById("p1problemsolvingscore")
var p1reflectionscore = document.getElementById("p1reflectionscore")
var p1reliablescore = document.getElementById("p1reliablescore")
var p1leadershipscore = document.getElementById("p1leadershipscore")
var p1positivescore = document.getElementById("p1positivescore")
var p1admirescore = document.getElementById("p1admirescore")
var p1improvescore = document.getElementById("p1improvescore")
var p1additionalscore = document.getElementById("p1additionalscore")

// database = firebase.database()
// var ref = database.ref().child("Project 1")
// ref.on("value", )

firebasereference1 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 1 Value")
firebasereference2 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 3 Value")
firebasereference3 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 4 Value")
firebasereference4 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 6 Value")
firebasereference5 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 7 Value")
firebasereference6 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 8 Value")
firebasereference7 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 9 Value")
firebasereference8 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 11 Value")
firebasereference9 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 12 Value")
firebasereference10 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 13 Value")
firebasereference11 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 14 Value")
firebasereference12 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 15 Value")
firebasereference13 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 16 Value")
firebasereference14 = firebase.database().ref().child("Project 1").child("Rohan K").child("Justin M").child("Slider 17 Value")

firebasereference1.on('value', function(databasesnapshot1) {
	p1creativityscore.innerText = databasesnapshot1.val();
});
firebasereference2.on('value', function(databasesnapshot1) {
	p1cooperationscore.innerText = databasesnapshot1.val();
});
firebasereference3.on('value', function(databasesnapshot1) {
	p1communicationscore.innerText = databasesnapshot1.val();
});
firebasereference4.on('value', function(databasesnapshot1) {
	p1organizationscore.innerText = databasesnapshot1.val();
});
firebasereference5.on('value', function(databasesnapshot1) {
	p1contributionscore.innerText = databasesnapshot1.val();
});
firebasereference6.on('value', function(databasesnapshot1) {
	p1timemanagementscore.innerText = databasesnapshot1.val();
});
firebasereference7.on('value', function(databasesnapshot1) {
	p1problemsolvingscore.innerText = databasesnapshot1.val();
});
firebasereference8.on('value', function(databasesnapshot1) {
	p1reflectionscore.innerText = databasesnapshot1.val();
});
firebasereference9.on('value', function(databasesnapshot1) {
	p1reliablescore.innerText = databasesnapshot1.val();
});
firebasereference10.on('value', function(databasesnapshot1) {
	p1leadershipscore.innerText = databasesnapshot1.val();
});
firebasereference11.on('value', function(databasesnapshot1) {
	p1positivescore.innerText = databasesnapshot1.val();
});
firebasereference12.on('value', function(databasesnapshot1) {
	p1admirescore.innerText = databasesnapshot1.val();
});
firebasereference13.on('value', function(databasesnapshot1) {
	p1improvescore.innerText = databasesnapshot1.val();
});
firebasereference14.on('value', function(databasesnapshot1) {
	p1additionalscore.innerText = databasesnapshot1.val();
});




