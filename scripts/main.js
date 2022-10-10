var myButton1 = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Введите свой NickName');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добро пожаловать на VILYOU, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добро пожаловать на VILYOU, ' + storedName;
}

myButton1.onclick = function() {
  setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsiOVCytKs1TQ9n0xzZt3t_upZD1vwoVrLUbtGoGDpg&s') {
      myImage.setAttribute ('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMU0X3lL4Lb9X6Huxa5w08JpbQA7Rt94jT801d5v-Sg&s');
    } else {
      myImage.setAttribute ('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsiOVCytKs1TQ9n0xzZt3t_upZD1vwoVrLUbtGoGDpg&s');
    }
}