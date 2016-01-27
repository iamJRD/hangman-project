var animalArray = ["tiger","giraffe","chimpanzee","elephant","squid"];
var cityArray = ["Spokane", "McKinney", "Portland", "Chicago", "Columbus"];


function Hangman(category) {
  this.category = category;
}

Hangman.prototype.chooseWord = function(userInput) {
  var random = Math.floor(Math.random() * 5)
  if (userInput === "cities") {
    return (cityArray[random]);
  } else {
    return (animalArray[random]);
  };
};

var chosenArray = function() {
  return Hangman.chooseCategory(userInput);

}

Hangman.prototype.word = function() {
  console.log(chosenArray);
  return chosenArray;
}
