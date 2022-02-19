//alert to test if game.js is correctly linked to html 👇
// alert("Game works");

//test if jQuery is linked to html correctly by logging 👇 to console
// console.log($("h1"));

//stores the game pattern 
var gamePattern = [];

//stores the user clicked pattern
var userClikedPattern = [];

//stores all the button colours
var buttonColours = ["red", "green", "yellow", "blue"];

function debug(input) {
  console.log(input);
}

function nextSequence() {
  //generates a random number between 0 and 3 (4 numbers)
  var randomNumber = Math.floor(Math.random() * 4);
//   debug(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
//   debug(randomChosenColour);
  gamePattern.push(randomChosenColour);
  debug(gamePattern);
  playSound(randomChosenColour);
  //using jQuery to choose the div with same id as randomChosenColour
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //to play audio in javascript
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
}

$(".btn").on("click", function(e) {
    var userChosenColour = e.target.id;
    userClikedPattern.push(userChosenColour);
    debug(userClikedPattern);
    playSound(userChosenColour);
    // nextSequence();
    
})

function playSound(name) {
    switch (name) {
      case "red":
        var sound1 = new Audio("sounds/red.mp3");
        sound1.play();
        break;
      case "green":
        var sound2 = new Audio("sounds/green.mp3");
        sound2.play();
        break;
      case "yellow":
        var sound3 = new Audio("sounds/yellow.mp3");
        sound3.play();
        break;
      case "blue":
        var sound4 = new Audio("sounds/blue.mp3");
        sound4.play();
        break;

      default:
        var sound5 = new Audio("sounds/wrong.mp3");
        sound5.play();
        console.log(gamePattern[i]);
        break;
  }
}

$(document).on("keypress", function(){
    nextSequence();
});
