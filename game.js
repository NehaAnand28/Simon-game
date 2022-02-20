//alert to test if game.js is correctly linked to html 👇
// alert("Game works");

//test if jQuery is linked to html correctly by logging 👇 to console
// console.log($("h1"));

//calls nextSequence() only on the first keypress event


var level;
//stores the game pattern
var gamePattern = [];

//stores the user clicked pattern
var userClickedPattern = [];

//stores all the button colours
var buttonColours = ["red", "green", "yellow", "blue"];

function debug(input) {
  console.log(input);
}

//Starts the game at the first key pressed
$(document).one("keypress", function () {
  startOver();
});

//For the first start and subsequent restart startOver is called
function startOver(){
  $(document).one("keypress", function () {
    level = 1;
    gamePattern = [];
    nextSequence();
  });
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
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  $("#level-title").text("Level " + level);
  level++;
  //to play audio in javascript
  //   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  //   audio.play();
}

$(".btn").on("click", function (e) {
  var userChosenColour = e.target.id;
  //Chosen color is added to userClikedPattern array when a btn is clicked
  userClickedPattern.push(userChosenColour);
  debug(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
  //plays sound corresponding to chosen colour
  playSound(userChosenColour);
  //animates button corresponding to chosen colour
  animatePress(userChosenColour);
  // nextSequence();
});

function animatePress(currentColour) {
    debug(currentColour);
    // this function adds a pressed class to the button that gets clicked 
    $("." + currentColour).addClass("pressed");
    //SetTimeout() -> removes the pressed class from the button after a delay of 100ms
  setTimeout(function() {
      $("." + currentColour).removeClass("pressed");
  },100);
}

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
      console.log(name);
      break;
  }
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    debug("success");
    if(userClickedPattern.length == gamePattern.length){
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
    
  }else{
    debug("failure");
    playSound("wrong");
    userClickedPattern=[];


    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    
    $("#level-title").text("Game Over , Press any key to restart");
    startOver();
  }
}

