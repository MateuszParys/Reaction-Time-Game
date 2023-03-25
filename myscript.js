var startTime, endTime;

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function showScreen() {
  var screen = document.getElementById("screen");
  screen.style.backgroundColor = "green";
  startTime = new Date();
}

function hideScreen() {
  var screen = document.getElementById("screen");
  screen.style.backgroundColor = "red";
}

function checkReactionTime() {
  endTime = new Date();
  var reactionTime = (endTime - startTime) / 1000;
  document.getElementById("result").innerHTML = "Your reaction time was " + reactionTime + " seconds.";
}

setTimeout(function() {
  hideScreen();
}, getRandomTime(1000, 5000));

setTimeout(function() {
  showScreen();
}, getRandomTime(1000, 5000));