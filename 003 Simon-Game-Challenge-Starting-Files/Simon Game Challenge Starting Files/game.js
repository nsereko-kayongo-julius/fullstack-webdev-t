var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColor = ["red", "blue", "green", "yellow"];
//step 1 and step 2
function nextSequence() {
  userClickedPattern = [];

  var randonNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randonNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("level " + level);
  level++;
}
function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}
//var selectedButton = "#"+$()
//$("#"+randonColor).fadeOut(100).fadeIn(100);

//$("h1").fadeOut(100).fadeIn(100);

// step 4 and step 5
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkanswer(userClickedPattern.length - 1);
});

//step 6
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//step 7
var started = false;
$(document).on("keypress", function () {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    started = true;
  }
});

//step 8
function checkanswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("sucess");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("failure");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//step 9
function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}
