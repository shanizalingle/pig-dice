// Business Logic
function PlayerList() {
  this.players = {};
  this.currentId = 0;
}

PlayerList.prototype.addPlayer = function(player) {
  this.players[player.playerId] = player;
}

PlayerList.prototype.findPlayer = function(id) {
  if (this.players[id] !== undefined) {
    return this.players[id]
  }
  return false;
}

function Player(playerId) {
  this.playerId = playerId;
  this.addedPoints = 0;
  this.totalPoints = 0;
}

function random(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  dice = Math.floor(Math.random() * (max - min + 1) + min);
  return dice;
}

Player.prototype.rollDice = function(){ 
  let roll = random(1, 6);
  console.log("you rolled a: " + roll);
  if (roll === 1) { 
    this.addedPoints = 0;
    return this.addedPoints;
  } else if (roll > 1) {
    this.addedPoints += roll;
    return this.addedPoints;
  }
}

Player.prototype.hold = function(){
  this.totalPoints += this.addedPoints;
  this.addedPoints = 0;
  if (this.totalPoints >= 100) {
    console.log("winner: " + playerId);
  }
}

// UI Logic
function handleSubmission(event) {
  event.preventDefault();
  let player1 = new Player(1);
  let player2 = new Player(2);
  let playerList = new PlayerList();
  playerList.addPlayer(player1);
  playerList.addPlayer(player2);

  console.log("run handleSubmission");

  document.querySelector("span#p1TurnScore").innerHTML = player1.addedPoints;
  document.querySelector("span#p1TotalScore").innerHTML = player1.totalPoints;
  document.querySelector("span#p2TurnScore").innerHTML = player2.addedPoints;
  document.querySelector("span#p2TotalScore").innerHTML = player2.totalPoints;

  document.getElementById("rollButton1").addEventListener("click", function() {
    console.log("click roll button 1");
    player1.rollDice();
  });
  document.getElementById("holdButton1").addEventListener("click", function() {
    player1.hold();
    console.log("click hold button 1");
  });
  document.getElementById("rollButton2").addEventListener("click", function() {
    player2.rollDice();
    console.log("click roll button 2");
  });
  document.getElementById("holdButton2").addEventListener("click", function() {
    player2.hold();
    console.log("click hold button 2");
  });

  console.log(playerList);
}

window.addEventListener("load", function() {
  this.document.querySelector("form#gameboard").addEventListener("submit", handleSubmission);
});

