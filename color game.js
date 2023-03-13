

//var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]
var numSquares = 6;
var colors = [];
//var colors = generateRandomColors(6);
var pickedColor;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons even listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset(); 
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //updatepage to reflect changes
    
            //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        });
    }

    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        // squares[i].style.backgroundColor = colors [i];  //removed because added reset function
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                //alert("Correct!");
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
             } else {
                 //alert("WRONG!!!");
                 this.style.backgroundColor = "#232323";
                 messageDisplay.textContent = "Try Again"
            }
        });
    }

    reset();
}


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Reset Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     //alert("Easy Button Clicked!");
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
//     //alert("Hard Button Clicked!");
// });


resetButton.addEventListener("click",function(){
    reset();
});
//     //alert("CLICKED RESET BUTTON");
//     //generate all new colors
//     colors = generateRandomColors(numSquares);
//     //pick a new random color from array
//     pickedColor = pickColor();
//     //change colorDisplay to match pickedColor
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "New Colors"
//     messageDisplay.textContent = "";
//     //change colors of squares
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
// })

//colorDisplay.textContent = pickedColor;

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
 
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    //add num random colors to arr
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array at the end
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}