// Global Variables
var goal, water, earth, fire, air, current;
var wins = 0,
  losses = 0;
function initialize() {
  goal = Math.floor(Math.random() * 50) + 50;
  water = Math.floor(Math.random() * 9) + 1;
  earth = Math.floor(Math.random() * 9) + 1;
  fire = Math.floor(Math.random() * 9) + 1;
  air = Math.floor(Math.random() * 9) + 1;
  current = 0;
  $("#goal").text("Goal: " + goal);
  $("#current").text("Current: " + current);
}

$(document).ready(function() {
  initialize();
});

// TODO: Make sure the game is solvable

// Handle user selecting an element
$("img").on("click", function() {
  accumulateChakra($(this).attr("id"));
  gameOver();
});

// Add the selected amount to the current
function accumulateChakra(element) {
  switch (element) {
    case "water":
      current += water;
      break;
    case "earth":
      current += earth;
      break;
    case "fire":
      current += fire;
      break;
    case "air":
      current += air;
      break;
    default:
      alert('function "accumulateChakra" broke');
      break;
  }
  $("#current").text("Current: " + current);
}

// Check if the game has ended
function gameOver() {
  if (current === goal) {
    alert("You Won!");
    wins++;
    initialize();
  } else if (current > goal) {
    alert("You Lost.");
    losses++;
    initialize();
  }
}
