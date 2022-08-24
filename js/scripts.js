function Game() {
  this.players = {};
  this.currentId = 0;
}

function rollTheDice(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  dice = Math.floor(Math.random() * (max - min + 1) + min);
  return dice;
}

function Player(playerId) {
  this.addedPoints = 0;
  this.totalPoints = 0;
  this.playerId = playerId;
}

Player.prototype.calculate = function(){ 
  let roll = rollTheDice(1, 6);
  if (roll === 1) { 
    this.addedPoints = 0;
  } else if (roll > 1) {
  this.totalPoints += roll;
}
console.log("roll");
return roll;
}
