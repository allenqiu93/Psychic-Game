
var myWordsArray = ["test", "testing", "testing123"];

var randomNum = Math.floor((Math.random() * myWordsArray.length) + 1);

var currentWord = myWordsArray[randomNum];

var lettersToGuess = []
for(var i = 0; i < currentWord.length; i++){
  lettersToGuess[i] = currentWord[i];
}