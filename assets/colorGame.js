// var game = {};

// game.init = function () {
//     setUpModeButtons();
//     setupSquares();
//     reset();
// }

var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setUpModeButtons();
    setupSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');

            this.classList.add('selected');
            this.innerHTML === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var j = 0; j < squares.length; j++) {
        // add click listeners to squares
        squares[j].addEventListener('click', function () {
            //grab color to clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pciked color
            if (clickedColor === pickedColor) {
                messageDisplay.innerHTML = 'Correct!';
                resetButton.innerHTML = 'Play Again?';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = ' #232323';
                messageDisplay.innerHTML = 'Try again!';
            }
        });
    }
}


function reset() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new random color frm array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.innerHTML = pickedColor;
    messageDisplay.innerHTML = '';
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }

    }

    h1.style.backgroundColor = 'steelblue';
    resetButton.innerHTML = 'NEW COLORS';
}


resetButton.addEventListener('click', function () {
    reset();
});


function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    //pick a 'red' from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a 'green' from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //pick a 'blue' form 0 - 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}




























