document.addEventListener('DOMContentLoaded', function() {
//Number 1
let divEle = document.createElement('div');
divEle.setAttribute('class', 'container');

let btn = document.createElement('button');
btn.innerText = ('Click Me');
btn.className = ('btn');

divEle.appendChild(btn);

document.body.appendChild(btn);

let button = document.getElementsByClassName('btn')[0];



button.addEventListener('click', function() {
    alert('Its a beautiful day in the neigborhood');
});
//Number 2
document.getElementById('form').addEventListener('submit', submitInput);

function submitInput(event) {
let msg = document.getElementById('inputText').value;
alert(msg);
document.getElementById('inputText');
event.preventDefault();
}
//Number 3
document.getElementById('form').onmouseover = function() {mouseOver()};
document.getElementById('form').onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById('form').style.backgroundColor = 'blue';
}
function mouseOut() {
    document.getElementById('form').style.backgroundColor = 'white';
}
//Number 4
let colorArr = ['red', 'blue', 'purple', 'green', 'yellow', 'orange'];

document.getElementById('para1').onclick = function() {chgPara()};

function chgPara() {
let i = Math.floor(Math.random() * colorArr.length);

let randomColor = colorArr[i];

 document.getElementById('para1').style.color = randomColor;
}
//Number 5
let emptyDiv = document.createElement('div');
emptyDiv.id = 'div2';

let btn3 = document.createElement('button');
btn3.innerText = 'Check here to find me';
btn3.className = 'btn1';


emptyDiv.appendChild(btn3);
let spanDiv = document.createElement('div');
spanDiv.id = 'spanDiv';
emptyDiv.appendChild(spanDiv);

document.body.appendChild(btn3);

btn3.addEventListener('click', addSpan);

function addSpan() {
    let span = document.createElement('span');

    span.innerText = 'Kesha McIntyre';
    spanDiv.appendChild(span);
}
//Number 5
let libutton = document.getElementById('li-button');
let ulCon = document.getElementsByClassName('ul')[0];

let friendsArr = ['Bre', 'Tiaira', 'Tera', 'Marshae', 'Shayla', 'Bria', 'Leandra', 'Neshayla', 'Nicole', 'Kesha'];
//let number = 0;

libutton.addEventListener('click', function() {
    let li = document.createElement('li');
    let liText = document.createTextNode(friendsArr);
    li.appendChild(liText);
    ulCon.appendChild(li);

    friendsArr++;

});




});