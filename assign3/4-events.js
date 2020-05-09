// Enter your code here

var w = document.getElementById("box").offsetWidth;
var h = document.getElementById("box").offsetHeight;
document.getElementById("width").innerHTML = w;
document.getElementById("height").innerHTML = h;


function windowSizer() {
  var w = document.getElementById("box").offsetWidth;
  var h = document.getElementById("box").offsetHeight;

  document.getElementById("width").innerHTML = w;
  document.getElementById("height").innerHTML = h;
}

window.addEventListener("resize", windowSizer);
