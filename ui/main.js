//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
  
  //make a request to counter endpoint
  
  //capture the response and store in a variable
  
  //rander the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerhtml=counter.toString();
};