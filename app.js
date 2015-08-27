//grabbing input field
var userInput = document.querySelector('.user-input');

//grabbing sumbit button
var submitButton = document.querySelector('.submit-button');

//making a function that will grab user input and desplay it
function desplayingUserInput(event){
  event.preventDefault();
  var placeHolder = document.querySelector('ul');
  var userItem = document.createElement('li');
  var userText = document.createTextNode(userInput.value);
  userItem.appendChild(userText);
  placeHolder.appendChild(userItem);
  userInput.value = "";
};

submitButton.onclick = desplayingUserInput;
