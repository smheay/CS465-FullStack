// Enter your code here

document.getElementById("input1").addEventListener("click", reverseText);

function reverseText() {
  var forward = document.getElementById("input").value;
  var backward = forward.split("").reverse().join("");
  

  if (forward.length === 8) alert(` ${backward}`);
  else alert(`Enter 8 numbers`);


}

