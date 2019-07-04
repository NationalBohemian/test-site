var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/black-chicken.jpg') {
        myImage.setAttribute ('src','images/town.jpg');
    } else {
        myImage.setAttribute ('src','images/black-chicken.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Black Chickens are sweet, ' + myName + '.';
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Black Chickens are sweet, ' + storedName + '.';
}

myButton.onclick = function() {
    setUserName();
  }
