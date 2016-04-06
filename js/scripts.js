// Business Logic
function Player(playerName, playerLetter){
this.playerName = playerName;
this.playerLetter = playerLetter;
}
var inputtedPlayerNames = []
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
    event.preventDefault();
    // player1 object via Player constructor
    // $(".new-player1-input").each(function() {
      inputtedPlayerNames.push($(this).find("input#player1-name").val());
      console.log(inputtedPlayerNames[1]);
      // Assign X to first value in inputtedPlayerNames array
      for (var i=0; i<1; i++) {

        if (i===0) {
          var player1 = new Player(inputtedPlayerNames[0], "X");
        }
        else{
          console.log("break");
        }
        console.log(player1);
      }
    // });

    // $(".new-player2-input").each(function() {
      inputtedPlayerNames.push($(this).find("input#player2-name").val());
      console.log(inputtedPlayerNames[2]);
      // Assign O to second value in inputtedPlayerNames array
      for (var i=1; i<2; i++) {

        if (i===1) {
          var player2 = new Player(inputtedPlayerNames[1], "O");
        }
        else{
          console.log("break");
        }
        console.log(player2);
      }
    // });
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
