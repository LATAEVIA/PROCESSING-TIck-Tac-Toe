// Business Logic
function Player(playerName, playerLetter){
this.playerName = playerName;
this.playerLetter = playerLetter;
}

// scrap code
function TicTacToe() {
  this.board = new TicTacToeBoard();
}
TicTacToe.prototype.new = function() {
  this.board = new TicTacToeBoard();
};
var winningCombos = [7, 56, 448, 73, 146, 292, 273, 84]


//========================================//
// User Interface Logic
$(document).ready(function(){

  // Submit listener on form
  $('form#sign-up').submit(function(event){

    // Both player objects via Player constructor
    $(".new-player-input").each(function() {
      var inputtedPlayerNames = $(this).find("input#player-name").val();
      var playerLetter = $(this).find("input.new-city").val();

      // Assign X or Y value to each player
      for (i=0, i<2, i++){
        if (i===0) {
          var player1 = new Player(inputtedPlayerNames, "X");
        }
        else if (i===1){
          var player2 = new Player(inputtedPlayerNames, "O");
        }
      }
    });
    event.preventDefault();
  });
  // Click event listner on td, prevent default
  $('td').click(function(event){
    event.preventDefault();
    console.log("clicked");
  });
});



// var inputtedPlayerNames = [$("input#player-name").val()];
// var player1 = new Player(inputtedPlayerNames, "X");
// var player2 = new Player(inputtedPlayerNames, "O");

// function test(playerNumber){
//   this.playerNumber = playerNumber;
// }
// test.prototype.trial = function(){
//   return this.playerNum
// }
// var player1 = new Player("X");
// var player2 = new Player("O");

// Player.prototype.assignLetter= function() {
// }

// $('form#sign-up').submit(function(event){
//
// var inputtedPlayerNames = [$("input#player-name").val()];
// console.log(inputtedPlayerName);
// var
// if (inputtedPlayerName.length > 2) {
//   alert("This is a two player game. You should call next.")
// }

// var test = new Player ()

// for (i=0, i<3, i++){
// var playerL
// }
// var
// inputtedPlayerNames.forEach(function(PlayerLetter){
//
// });
//
// $("input#player-name").val("")
// event.preventDefault();
// });
