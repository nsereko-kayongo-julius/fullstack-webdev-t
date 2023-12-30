var button = document.querySelectorAll(".drum");
var buttonlength = button.length;

function handleSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();

      break;
    case "k":
      var crush = new Audio("./sounds/crash.mp3");
      crush.play();

      break;
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;

    default:
      break;
  }
}

for (var i = 0; i < buttonlength; i++) {
  button[i].addEventListener("click", function () {
    var innerHtml = this.textContent;
    handleSound(innerHtml);
    handleKeyPressed(innerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  handleSound(event.key);
  handleKeyPressed(event.key);
});

function handleKeyPressed(keypressed) {
  var buttonClass = document.querySelector("." + keypressed);
  buttonClass.classList.add("pressed");
  setTimeout(function () {
    buttonClass.classList.remove("pressed");
  }, 100);
}
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
