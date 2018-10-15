var letter = ["a","b","c","d","e","f",
              "g","h","i","j","k","l",
              "m","n","o","p","q","r",
              "s","t","u","v","w","x","y","z"];

//wins and loses
var win = 0;
var lose = 0;

var guessLeft = 9;
var random = letter[Math.floor(Math.random()*letter.length)];
var guessesLeft = document.getElementById("guessesLeft")

//shows in html
var wins = document.getElementById("wins");
var loses = document.getElementById("loses");
var input = document.getElementById("yourGuessInput");

//shows player answer in console
console.log(random);


function restart(){
    guessLeft = 9;
    guessesLeft.textContent = ("Guess Left: "+ guessLeft);
    random = letter[Math.floor(Math.random()*letter.length)];
    //shows player new answer in alert
    alert(random);
}

document.onkeyup = function(event){
    var yourGuess = event.key;

    if(yourGuess === random){
        alert("You win!");
        win++;
        wins.textContent = ("Wins: "+ win);
        restart();
    }

    else  {
        alert("Wrong guess, you lose!");
        lose++;
        guessLeft = guessLeft - 1;
        guessesLeft.textContent = ("Guess Left: "+ guessLeft);
    }
}
if(guessesLeft== 0){
    restart();
}