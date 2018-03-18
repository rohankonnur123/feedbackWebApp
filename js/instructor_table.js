var student1name = document.getElementById("demo2");

var student1proj1 = document.getElementById('student1proj1');

var firebasereference = firebase.database().ref();
var student1 = firebasereference.child("Project 1").child("Rohan Konnur").child("Name");
var student1score = firebasereference.child("Project 1").child("Rohan Konnur").child("Project Score");
var test = firebase.database().ref().child("Heading");

test.on('value', function(databasesnapshot1) {
	student1name.val = databasesnapshot1.val();
});
// student1score.on('value', function(databasesnapshot) {
// 	student1proj1.innerText = databasesnapshot.val();
// })

