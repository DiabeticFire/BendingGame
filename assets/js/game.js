// Global Variables
var goal, water, earth, fire, air, current;
var wins = 0,
  losses = 0;
function initialize() {
  do {
    goal = Math.floor(Math.random() * 30) + 30;
    water = Math.floor(Math.random() * 9) + 3;
    earth = Math.floor(Math.random() * 9) + 3;
    fire = Math.floor(Math.random() * 9) + 3;
    air = Math.floor(Math.random() * 9) + 3;
    current = 0;
    $("#goal").text("Goal: " + goal);
  } while (false);
}

$("document").ready(function() {
  initialize();
});

// TODO: Make sure the game is solvable
// function isSolvable() {
//   var addends = [earth, water, fire, air];
//   addends.forEach(addend => {
//     var temp = goal;
//     do {
//       if (addend % temp === 0) return true;
//       else temp -= addend;
//     } while (temp > 0);
//   });
//   return false;
// }

function isSolvable(goal) {
  var addends = [earth, water, fire, air];
  addends.forEach(addend1 => {
    do {
      addends.forEach(addend => {
        if (goal % addend === 0) return true;
      });
      goal -= addend1;
    } while (goal > 0);
  });
}

// Handle user selecting an element
$("img").on("click", function() {
  accumulateChakra($(this).attr("id"));
  if (current === goal) gameOver(true);
  else if (current > goal) gameOver(false);
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
  $("#current").text("Spiritual Energy: " + current);
}

// Check if the game has ended
function gameOver(won) {
  if (won) {
    alert("You Won!");
    wins++;
    $("#wins").text("Chakras: " + wins);
  } else {
    alert("You Lost.");
    losses++;
    $("#losses").text("Losses: " + losses);
  }
  initialize();
}
