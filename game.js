//alert to test if game.js is correctly linked to html 👇
// alert("Game works");

//test if jQuery is linked to html correctly by logging 👇 to console
// console.log($("h1"));

var gamePattern = [];

var buttonColours = ["red", "green", "yellow", "blue"];

function debug(input){
    console.log(input);
}

function nextSequence(){
    //generates a random number between 0 and 3 (4 numbers)
    var randomNumber = Math.floor(Math.random() * 4);
    debug(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    debug(randomChosenColour);
    gamePattern.push(randomChosenColour);
    debug(gamePattern);

}