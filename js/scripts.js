function PlayerList() {
  this.players = {};
  this.currentId = 0;
}

PlayerList.prototype.addPlayer = function(player) {
  this.players[player.id] = player;
}

PlayerList.prototype.findPlayer = function(id) {
  if (this.players[id] !== undefined) {
    return this.players[id]
  }
  return false;
}

PlayerList.prototype.rollTheDice = function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  dice = Math.floor(Math.random() * (max - min + 1) + min);
  return dice;
}

PlayerList.prototype.calculate = function(){ 
  let roll = rollTheDice(1, 6);
  console.log(roll);
  if (roll === 1) { 
    this.addedPoints = 0;
    return this.addedPoints;
  } else if (roll > 1) {
    this.totalPoints += roll;
    return this.totalPoints;
  }
  return roll;
}

function Player(playerId) {
  this.addedPoints = 0;
  this.totalPoints = 0;
  this.playerId = playerId;
}