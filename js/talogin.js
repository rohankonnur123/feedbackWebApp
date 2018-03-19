var iuser = document.getElementById('iuser').value
var ipass = document.getElementById("ipass").value

function talogin() {
	if (iuser == "TA" && ipass == "admin") {
	    window.location.href = "https://rohankonnur123.github.io/dashboard_instructor.html";
	} else {
		window.location.href = "https://rohankonnur123.github.io/";
	    console.log("incorrect password")
	}
}