// Business Logic
var inputtedPlayerNames = []

function Player(playerName, playerLetter, playerMark){
this.playerName = playerName;
this.playerLetter = playerLetter;
this.playerMarks = playerMarks;
}

Player.prototype.switchPlayerTurn = function () {
  if (this.playerLetter === "X") {
    this.playerLetter = "O";
  } else {
    this.playerLetter = "X";
  }
}

// scrap code
// function TicTacToe() {
//   this.board = new TicTacToeBoard();
// }
// TicTacToe.prototype.new = function() {
//   this.board = new TicTacToeBoard();
// };
// var board = [ 1, 2, 4, 8, 16, 32, 64, 128, 256 ];
// var winningCombos = [7, 56, 448, 73, 146, 292, 273, 84]

//========================================//
// User Interface Logic
$(document).ready(function(){

  // Submit listener on form
  $('form#sign-up').submit(function(event){
    event.preventDefault();

    // player1 object via Player constructor
    inputtedPlayerNames.push($(this).find("input#player1-name").val());

    // Assign X to first value in inputtedPlayerNames array
    for (var i=0; i<1; i++) {
      if (i===0) {
        var player1 = new Player(inputtedPlayerNames[0], "X", []);
      } else {
        console.log("break");
      }
      console.log(player1);
    }

    // player2 object via Player constructor
    inputtedPlayerNames.push($(this).find("input#player2-name").val());

    // Assign O to second value in inputtedPlayerNames array
    for (var i=1; i<2; i++) {

      if (i===1) {
        var player2 = new Player(inputtedPlayerNames[1], "O", []);
      } else {
        console.log("break");
      }
      console.log(player2);
    }
  });

  // Click event listner on td, prevent default
  $('td').click(function(event){
    event.preventDefault();
    console.log("clicked");

    var spaceIdNum = $(this).attr('id');
    console.log(spaceIdNum);
    player1.playerLetter.push(spaceIdNum[1,3,5,7,9])
    player1.playerLetter.push(spaceIdNum[2,4,6,8])
    // newGame.currentPlayer.spaces.push(spaceId);
    // console.log(newGame.currentPlayer);
    // console.log(newGame.currentPlayer.spaces);
    // newGame.switchPlayer();
  });

});
