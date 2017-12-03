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

//submitt name
var nameInput = document.getElementByid('name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the srver and send name
  //capture the list of name and ender it as a list
  
  var names = ['name1','name2','name3'];
  var list='';
  for(var i=0; i<name.lenght; i++){
      list+='<li>'+ name[i] + '</li>';
  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
    };
