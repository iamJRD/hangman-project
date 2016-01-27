describe("Hangman", function() {
  var newGame = new Hangman("animals")
  it("chooses a category for word selection from 2 categories", function() {
      expect(newGame.chooseWord()).to.equal(String);
  });
});
