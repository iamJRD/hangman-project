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
  return copiedArray;
}

var copiedBlankArray = function(randomArray) {
  var copiedBlankArray = randomArray.slice();
  for (var i = 0; i < copiedBlankArray.length; i++) {
    copiedBlankArray[i] = "";
  };
  return copiedBlankArray;
};

var wrongRightLetter = function(letter, copiedArray, copiedBlankArray, wrongArray) {
  if (wrongArray.length > copiedArray.length) {
    return "fail";
  } else if (copiedBlankArray === copiedArray) {
    return "you win";
  } else if (copiedArray.indexOf(letter) === -1) {
    wrongArray.push("x");
    return copiedBlankArray;
  } else {
    for (var i = 0; i <= copiedArray.length; i++) {
      if (copiedArray[i] === letter) {
        copiedBlankArray[i] = letter;
      };
    };
    return copiedBlankArray;
  };
};

$(document).ready(function() {
  var gameCities = new Hangman("cities");
  var gameAnimals = new Hangman("animals");
  var chooseAnimals = $("#animals").val();
  var chooseCities = $("#cities").val();
  var wrongArray = [];
  var animalChosen = gameAnimals.chooseWord(gameAnimals.category)
  var cityChosen = gameCities.chooseWord(gameCities.category)

  $("form").submit(function() {
    event.preventDefault();
    $(".jumboCont").hide();

    if ($("select").val() === "animals") {
      $(".secretWord").append(animalChosen);
      var copiedBlankArray1 = copiedBlankArray(animalChosen);
      $(".letters").children().click(function(event) {
        var copiedArray1 = copiedArray(animalChosen);
        var letter = $(this).attr('id');
        $(this).css("color","red");
        $(".guessingArea").text(wrongRightLetter(letter, copiedArray1, copiedBlankArray1, wrongArray));
                console.log(copiedBlankArray1);
      });
    } else {
      $(".secretWord").append(cityChosen);
      var copiedBlankArray1 = copiedBlankArray(cityChosen);
      $(".letters").children().click(function(event) {
        var copiedArray1 = copiedArray(cityChosen);
        var letter = $(this).attr('id');
        $(this).css("color","red");
        $(".guessingArea").append(wrongRightLetter(letter, copiedArray1, copiedBlankArray1, wrongArray));
      });
    };
  });


});
