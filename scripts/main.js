//Image switch 

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/GP.jpeg') {
      myImage.setAttribute ('src','images/Sunglasses.jpeg');
    } else {
      myImage.setAttribute ('src','images/GP.jpeg');
    }
}

// Welcome Message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//Music

function playMusic(){
  var music = new Audio('music/gts.mp3');
  music.play();
  }