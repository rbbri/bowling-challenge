Game = function () {
  this.currentFrame = 0
  this.frames = []
}

Game.prototype.scoreFrame = function (rollOne, rollTwo) {
  var score = 0
  if (rollOne === 10) {
    score = 'X'
  }
  if (rollOne + rollTwo === 10) {
    score = rollOne + '/'
  } else if (String(this.frames[this.frames.length - 1]).includes('/')) {
    this.frames[this.frames.length - 1] = 10 + rollOne
    score += rollOne + rollTwo
  } else if (String(this.frames[this.frames.length - 1]).includes('X')) {
    score += rollOne + rollTwo
    this.frames[this.frames.length - 1] = 10 + score
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
