
var enter=["a","b","c","d","e","f","g","h",
           "i","j","k","l","m","n","o","p",
           "q","r","s","t","u","v","w","x",
           "y","z"];
var win = 0;
var lose = 0;
var guessLeft = 9;

var games = document.getElementById("games");
var wins = document.getElementById("wins");
var loses = document.getElementById("loses");
var guessLeft = document.getElementById("guessLeft");
var yourGuess= document.getElementById("yourGuess");
var computerGuess = enter[Math.floor(Math.random() * enter.length)];

document.onkeyup = function(event){
    win;
    lose;
    guessLeft;

   var guessValue = event.key;
    console.log('my guess: ' + guessValue);
    console.log('computer guess: '+ computerGuess);
    
   if(guessValue == computerGuess ){
       win++;
       console.log(win);
       alert("You Win!");

}
       
   
    else {
        lose++;
        console.log(lose);
        alert("you lose!");

    }


}

