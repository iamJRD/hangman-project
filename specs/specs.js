describe("Hangman", function() {
  var newGame = new Hangman("animals")
  it("chooses a category for word selection from 2 categories and splits it", function() {
    expect(newGame.chooseWord()).to.be.a('array');
  });

  it("creates a empty array with the same length as random word", function() {
    expect(String.length).to.equal(newArray.length);
  });
});
