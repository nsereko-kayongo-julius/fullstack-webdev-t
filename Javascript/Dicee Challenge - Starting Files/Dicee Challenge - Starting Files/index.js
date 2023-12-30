var images = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var randomNumber1 = Math.floor(Math.random() * 6);

var img1 = document.querySelector(".img1");
img1.setAttribute("src", images[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * 6);
var img2 = document.querySelector(".img2");
img2.setAttribute("src", images[randomNumber2]);

if (randomNumber1 > randomNumber2) {
  var h1 = (document.querySelector("h1").textContent = "Player 1 wins");
} else if (randomNumber2 > randomNumber1) {
  var h1 = (document.querySelector("h1").textContent = "Player 2 wins");
} else {
  var h1 = (document.querySelector("h1").textContent = "draw");
}
