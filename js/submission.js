var q1slider = document.getElementById("q1myRange")
var q1feedback = document.getElementById("question1")
var postScore = document.getElementById("overallScore")


var firebasereference = firebase.database().ref().child("Rohan Konnur").child("Comments")

firebasereference.on('value', function(databasesnapshot) {
	postScore.innerText = databasesnapshot.val();
})

function submitClick() {

	var firebaseRef = firebase.database().ref();
	var sliderVal = q1slider.value;
	var feedbackText = q1feedback.value;

	firebaseRef.child("Rohan Konnur")
	firebaseRef.child("Rohan Konnur").child("Slider 1 Value").set(sliderVal)
	firebaseRef.child("Rohan Konnur").child("Question 1 Feedback").set(feedbackText)

}