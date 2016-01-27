describe("Hangman", function() {
  var newGame = new Hangman("animals")
  it("chooses a category for word selection from 2 categories and splits it", function() {
    expect(newGame.chooseWord()).to.be.a('array');
  });

  it("creates a copy of original array", function() {
    expect(newGame.chooseWord().length).to.be.a('number');
  });
});
