describe('Game', function () {
  require('../src/game')

  describe('score', function () {

    it('can score a gutter game', function () {
      var game = new Game()
      for (i = 0; i < 10; i++) { game.scoreFrame(0, 0) }
      expect(game.totalScore()).toEqual(0)
    })

    it('can score a game of all ones', function () {
      var game = new Game()
      for (i = 0; i < 10; i++) { game.scoreFrame(1, 1) }
      expect(game.totalScore()).toEqual(20)
    })

    it('can score a game with a spare', function () {
      var game = new Game()
      game.scoreFrame(1, 9)
      for (i = 0; i < 9; i++) { game.scoreFrame(1, 1) }
      expect(game.totalScore()).toEqual(29)
    })

    it('can score a game with a strike', function () {
      var game = new Game()
      game.scoreFrame(10)
      for (i = 0; i < 9; i++) { game.scoreFrame(1, 1) }
      expect(game.totalScore()).toEqual(30)
    })


  })
})
