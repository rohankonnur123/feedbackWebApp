var projnum = document.getElementById("projnum")
var sourcestudentname = document.getElementById("sourcestudentname")

var studentname = document.getElementById("deststudentname")
var p1q1slider = document.getElementById("p1q1myRange")
var p1q3slider = document.getElementById("p1q3myRange")
var p1q4slider = document.getElementById("p1q4myRange")
var p1q6slider = document.getElementById("p1q6myRange")
var p1q7slider = document.getElementById("p1q7myRange")
var p1q8slider = document.getElementById("p1q8myRange")
var p1q9slider = document.getElementById("p1q9myRange")
var p1q11slider = document.getElementById("p1q11myRange")
var p1q12slider = document.getElementById("p1q12myRange")
var p1q13slider = document.getElementById("p1q13myRange")
var p1q14slider = document.getElementById("p1q14myRange")
var p1q15 = document.getElementById("p1question15")
var p1q16 = document.getElementById("p1question16")
var p1q17 = document.getElementById("p1question17")
var postScore = document.getElementById("overallScore")


var firebasereference = firebase.database().ref().child("Project 1").child("Rohan K").child("Slider 15 Value")

firebasereference.on('value', function(databasesnapshot) {
	postScore.innerText = databasesnapshot.val();
})

function submitClick() {

	var firebaseRef = firebase.database().ref();
	var p1q1sliderVal = p1q1slider.value;
	var p1q3sliderVal = p1q3slider.value;
	var p1q4sliderVal = p1q4slider.value;
	var p1q6sliderVal = p1q6slider.value;
	var p1q7sliderVal = p1q7slider.value;
	var p1q8sliderVal = p1q8slider.value;
	var p1q9sliderVal = p1q9slider.value;
	var p1q11sliderVal = p1q11slider.value;
	var p1q12sliderVal = p1q12slider.value;
	var p1q13sliderVal = p1q13slider.value;
	var p1q14sliderVal = p1q14slider.value;
	var p1q15Val = p1q15.value;
	var p1q16Val = p1q16.value;
	var p1q17Val = p1q17.value;
	var projVal = projnum.value;
	var studentVal = studentname.value;
	var sourceStudentVal = sourcestudentname.value;
	// var feedbackText = q1feedback.value;

	// firebaseRef.set(projnum)
	// firebaseRef.child(projnum).set(studentname)
	firebaseRef.child(projVal).child(studentVal).child("Name").set(studentVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 1 Value").set(p1q1sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 3 Value").set(p1q3sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 4 Value").set(p1q4sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 6 Value").set(p1q6sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 7 Value").set(p1q7sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 8 Value").set(p1q8sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 9 Value").set(p1q9sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 11 Value").set(p1q11sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 12 Value").set(p1q12sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 13 Value").set(p1q13sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 14 Value").set(p1q14sliderVal)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 15 Value").set(p1q15Val)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 16 Value").set(p1q16Val)
	firebaseRef.child(projVal).child(studentVal).child(sourceStudentVal).child("Slider 17 Value").set(p1q17Val)


}








