var student1name = document.getElementById("demo");

var student1proj1 = document.getElementById('student1proj1');

var firebasereference = firebase.database().ref();
var student1 = firebasereference.child("Project 1").child("Rohan K").child("Name");
var student1score = firebasereference.child("Project 1").child("Rohan K").child("Justin M").child("Slider 12 Value");
// var test = firebase.database().ref().child("Heading");

student1.on('value', function(databasesnapshot1) {
	student1name.innerText = databasesnapshot1.val();
});
student1score.on('value', function(databasesnapshot) {
	student1proj1.innerText = databasesnapshot.val();
})

