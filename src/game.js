Game = function () {
  this.currentFrame = 0
  this.score = 0
}

Game.prototype.scoreFrame = function (roll_one, roll_two) {
  this.score += roll_one + roll_two

}

Game.prototype.totalScore = function () {
  return this.score
}
