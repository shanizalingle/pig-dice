Describe: rollTheDice()

Test: Create a function that returns a random number between 1 and 6
Code: 
rollTheDice()
Expected Output: return random number

describe: player.prototype.addPlayer = function(player)

test: this will create a unique ID for each player
Code: this.currentId += 1
Expected output: Player 1 = 1, Player 2 = 2

----------------------------------------------

Describe: players.prototype.calculateScore ()

Test: create a function that calculates roll plus score
Code: 
Expected Output: return sum of rolled number and scoretotal


Describe Player()

Test:
Code
Expected Output:

function Player(playerId) {
  this.addedPoints =0;
  this.totalPoints =0;
  this.playerId = playerId;
}

Player.prototype.calculate = function(){ 
  let roll = dice;
  if (roll === 1){ 
    this.addedPoints = 0;
  } else if (roll > 1) {
  this.totalPoints += roll;
}
console.log("roll");
return roll;
}

UI Logic//
let player1 = Player(1);




Players.prototype.calculateScore = function() {
let roll = dice;
if (roll === 1) {
  this.addedPoints = 0;
} else if (roll > 1){
  this.player1Total += roll;
}
  return roll;

function Players() {
  this.player1Total = {}
  this.player2Total = {}
  this.addedPoints
}


rollTheDice(min, max)
min = math.ceil(1);
max = math.floor(6)
  return math.random()

on play:

use math.random() to generate a number between 1 and 6. 
If the player rolls 1, they take no points and pass the turn.
If the player rolls between 2-6, the player takes the points
and can choose to hold and pass the turn, or to roll again.

Player wins at 100pts

Player 1 and player 2 logic is separate?

Player 1 & 2 Objects:
-Total points

Dice Objects:
-functionality of dice for player 1





Player 2 
Dice object:
Will hold functionality of dice for player 2


Player 1 - Parent Object
  Total points
 Player1 Dice 


function Player(playerName)
  Total points

function rollTheDice()
const randomNumber1
const randomNumber2