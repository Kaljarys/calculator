function add(a, b){
    let result = a + b; 
    return result;
  }
  function divise(a, b){
    let result = a / b; 
    return result; 
  }
  function substract(a, b){
    let result = a - b; 
    return result; 
  }
  function multiplicate(a, b){
    let result = a * b; 
    return result; 
  }
  var input1 = ""; 
  var input2 = "";
  var outputDisplay = document.getElementById("outputP");
  outputDisplay.textContent = input1 + " "+  operation  + " " + input2;
  