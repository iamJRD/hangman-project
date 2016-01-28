describe("Hangman", function() {
  var newGame = new Hangman("animals")
  it("chooses a category for word selection from 2 categories and splits it", function() {
    expect(newGame.chooseWord()).to.be.a('array');
  });

  it("creates an exact copy of the array and split it", function() {
    var randomArray = ["hi"]
    expect(copiedArray(randomArray)).to.eql(["h", "i"])
  });

  it("creates a blank array that's the same length as selected array", function() {
    var testArray = [1,2,3]
    expect(copiedBlankArray(testArray)).to.eql(["","",""]);
  });

  it("check whether a letter is wrong and pushes it to wrong array", function() {
    var copiedArray = ["t","i","g","e","r"];
    var letter = "q"
    var wrongArray = [];
    expect(wrongRightLetter(letter, copiedArray, copiedBlankArray, wrongArray)).to.eql(["x"]);
  })

  it("check whether a letter is right and pushes it to copiedBlankArray", function() {
    var copiedArray = ["t","i","g","e","r"];
    var letter = "g";
    var copiedBlankArray = ["","","","",""];
    var wrongArray = ["x","x","x","x","x"];
    expect(wrongRightLetter(letter, copiedArray, copiedBlankArray, wrongArray)).to.eql(["","","g","",""]);
  });

  it("notifies you when you've lost the game",function() {
    var wrongArray = ["x","x","x","x","x","x"];
    var letter = "q";
    var copiedBlankArray = ["","","","",""];
    var copiedArray = ["t","i","g","e","r"];
    expect(wrongRightLetter(letter, copiedArray, copiedBlankArray, wrongArray)).to.equal("fail");
  });


/** NOT FINISHED **/
  it("check for duplicate letters", function() {
    var wrongArray = [];
    var letter = "p";
    var copiedBlankArray = ["","","","",""];
    var copiedArray = ["a","p","p","l","e"];
    expect(wrongRightLetter(letter, copiedArray, copiedBlankArray, wrongArray)).to.eql(["","p","p","",""]);
  });

});
