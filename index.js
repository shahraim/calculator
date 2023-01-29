var displayValue = document.getElementById("displayValue");
var displayValue2 = document.getElementById("displayValue2");


// Caluclate Function
function calculate(num) {
  console.log(num);
  displayValue.innerText += num;
}

// Clear Function
function clearValue() {
  displayValue.innerText = "";  
  displayValue2.innerText = "";  
  console.log("clear");
}
// Answer Function
function answer() {
     displayValue2.innerText=displayValue.innerText
  var CalAns = eval(displayValue.innerText);
  displayValue.innerText = CalAns;
}
