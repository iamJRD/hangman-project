var animalArray = ["tiger","giraffe","chimpanzee","elephant","squid"];
var cityArray = ["Spokane", "McKinney", "Portland", "Chicago", "Columbus"];


function Hangman(category) {
  this.category = category;
}

Hangman.prototype.chooseWord = function(userInput) {
  var random = Math.floor(Math.random() * 5);
  if (userInput === "cities") {
    return (cityArray[random]).split("");
  } else {
    return (animalArray[random]).split("");
  };
};

var emptyArray = function(word) {
  var blankArray = word.slice();
  return blankArray;
};





$(document).ready(function() {
  var gameCities = new Hangman("cities");
  var gameAnimals = new Hangman("animals");
  var chooseAnimals = $("#animals").val();
  var chooseCities = $("#cities").val();

  $("form").submit(function() {
    event.preventDefault();
    if ($("select").val() === "animals") {
      $("body").append(gameAnimals.chooseWord(gameAnimals.category));
    } else {
      $("body").append(gameCities.chooseWord(gameCities.category));
    };
    // gameOne.chooseWord(gameOne.category)
  });
});
