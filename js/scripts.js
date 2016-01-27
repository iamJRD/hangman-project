var animalArray = ["tiger","giraffe","chimpanzee","elephant","squid"];
var cityArray = ["Spokane", "McKinney", "Portland", "Chicago", "Columbus"];


function Hangman(category) {
  this.category = category;
}

Hangman.prototype.chooseWord = function(userInput) {
  var random = Math.floor(Math.random() * 5)
  if (userInput === "cities") {
    return (cityArray[random]).split("");
  } else {
    return (animalArray[random]).split("");
  };
};
