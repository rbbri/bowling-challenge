var Game = function () {
  this.currentFrame = 0
  this.frames = []
}

Game.prototype.scoreFrame = function (rollOne, rollTwo) {
  var score = 0
  if (rollOne + rollTwo === 10) {
    score = rollOne + '/'
  } else if (this.frames[this.frames.length - 1] === '1/') {
    this.frames[this.frames.length - 1] = 10 + rollOne
    score += rollOne + rollTwo
  } else {
    score += rollOne + rollTwo
  }
  this.frames.push(score)
  this.currentFrame += 1
}

const getSum = (total, score) => total + score

Game.prototype.totalScore = function () {
  return this.frames.reduce(getSum)
}
