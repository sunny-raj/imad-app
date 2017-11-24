//counter code
var button = document.getElementById('counter');


button.onclick = function(){
  
  //make a request to counter endpoint
  var request = new XMLHttpRequest();
  
  
  //capture the response and store in a variable
  request.onreadystatechange = function() {
      if (request.readystat === XMLHttpRequest.DONE ){
          //take some actions
          if(request.status === 200) {
              var counter = request.responseText;
              var span = document.hetElementById('count');
              span.innerhtml = counter.toString();
          }
      }
  };
  
  //make the request
  request.open('GET','http://http://sunnyrajpal87.imad.hasura-app.io/counter',true);
  request.send(null);
};