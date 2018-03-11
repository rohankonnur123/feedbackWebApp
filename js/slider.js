var slider1 = document.getElementById("q1myRange");
var output1 = document.getElementById("q1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("q2myRange");
var output2 = document.getElementById("q2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}