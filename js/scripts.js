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
  /** for ease, will call the output of this function randomArray **/
};

var copiedArray = function(randomArray) {
  randomArray = randomArray.join("");
  var copiedArray = randomArray.split("");
  return(copiedArray)
}

var copiedBlankArray = function(randomArray) {
  var copiedBlankArray = randomArray.slice();
  for (var i = 0; i < copiedBlankArray.length; i++) {
    copiedBlankArray[i] = "";
  };
  return copiedBlankArray;
};

var wrongRightLetter = function(letter, copiedArray, copiedBlankArray, wrongArray) {
  if (wrongArray.length > 5) {
    return "fail";
  } else if (copiedBlankArray === copiedArray) {
    return "you win";
  } else if (copiedArray.indexOf(letter) === -1) {
    wrongArray.push("x");
    return wrongArray;
  } else {
    var index = copiedArray.indexOf(letter);
        copiedBlankArray[index] = letter;
        return copiedBlankArray;
  };
};

$(document).ready(function() {
  var gameCities = new Hangman("cities");
  var gameAnimals = new Hangman("animals");
  var chooseAnimals = $("#animals").val();
  var chooseCities = $("#cities").val();
  var wrongArray = [];

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
