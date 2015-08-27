//grabbing input field
var userInput = document.querySelector('.user-input');

//grabbing sumbit button
var submitButton = document.querySelector('.submit-button');

//function that will grab user input and desplay it
function displayingUserInput(event){
  event.preventDefault();
  var placeHolder = document.querySelector('ul');
  var userItem = document.createElement('li');
  var userText = document.createTextNode(userInput.value);
  userItem.appendChild(userText);
  placeHolder.appendChild(userItem);
  userInput.value = "";
  countingListItems();
}

//makes the submit button display user input
submitButton.onclick = displayingUserInput;

//grabbing clear all button and the ul
var clearAllButton = document.querySelector('.clearAll');
var listItemHolder = document.querySelector('ul');

//function that deletes user input
function clearAllListItems(){
  var numberOfListItems = listItemHolder.childNodes.length;
  for(i = 0; i < numberOfListItems; i++){
    listItemHolder.removeChild(listItemHolder.childNodes[0]);
  }
  countingListItems();
}

//function that display how many items the user has added
function countingListItems(){
  var numberOfListItems = listItemHolder.childNodes.length;
  document.querySelector('p').innerHTML = numberOfListItems + " Things to do!";
}

//when window loads the item counter will be ready
window.onload = countingListItems;

//when user clicks on the button it will delete there input
clearAllButton.onclick = clearAllListItems;
