$(document).ready(function() {

// Number 1
function createButton() {
    let $button = $('<button class="btn1">Click Here</button>');

    $('body').append($button);

    $button.on('click', function() {
        alert('You are one awesome coder!');
    });
}
createButton();
// Number 2
$(btnSubmit).click(function() {
alert($('#inputText').val());
});

// Number 3
$('form').hover(function () {
    $('form').css('background-color', 'yellow');
});
$('form').mouseleave(function () {
    $('form').css('background-color', 'white');
});
//Number 4
let colorArr = ['red', 'blue', 'purple', 'green', 'yellow', 'orange'];

document.getElementById('para1').onclick = function() {chgPara()};

function chgPara() {
let i = Math.floor(Math.random() * colorArr.length);

let randomColor = colorArr[i];

 document.getElementById('para1').style.color = randomColor;
}

//Number 5
let spanButton = $("<button>Click me to span my name</button>");
spanButton.appendTo('body');
let nameDiv = $("<div></div>")
nameDiv.appendTo('body');
let Span = $("<span>Rakesha McIntyre</span>");


spanButton.click(function () {
    Span.appendTo(nameDiv);
});

// Number 6
let friendsArr = ['Bre', 'Tiaira', 'Tera', 'Marshae', 'Shayla', 'Bria', 'Leandra', 'Neshayla', 'Nicole', 'Kesha'];
let button = $('#friend-li-button');
let friendList = $('#add-Friend');

button.click(function() {
    for (let i = 0; i < friendsArr.length; i++) {
        let newFriend = $('<li>' + friendsArr[i]+ '</li>');
        newFriend.appendTo(friendList);
    }
});

});
