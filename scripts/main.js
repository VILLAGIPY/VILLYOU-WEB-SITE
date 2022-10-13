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
