describe('Game', function () {
  require('../src/game')

  describe('score', function () {
    it('can score a gutter game', function () {
      var game = new Game()
      for (i = 0; i < 20; i++) { game.scoreFrame(0, 0) }
      expect(game.totalScore()).toEqual(0)
    })
  })
})
