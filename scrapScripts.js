/*
 * A complete tic-tac-toe widget.  Just include this script in a
 * browser page and enjoy.  A tic-tac-toe game will be included
 * as a child element of the element with id "tictactoe".  If the
 * page has no such element, it will just be added at the end of
 * the body.
 */
(function () {

    var squares = [],
        EMPTY = "\xA0",
        score,
        moves,
        turn = "X",
        oldOnload,

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */
    wins = [7, 56, 448, 73, 146, 292, 273, 84],

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    startNewGame = function () {
        var i;

        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    },

    /*
     * Returns whether the given score is a winning score.
     */
    win = function (score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    play = function () {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };

    /*
     * Add the play function to the (virtual) list of onload events.
     */
    if (typeof window.onload === "function") {
        oldOnLoad = window.onload;
        window.onload = function () {
            oldOnLoad();
            play();
        };
    } else {
        window.onload = play;
    }
}());
====================================




// Tic Tac Toe
var tictactoe = (function() {
  // Constants
  var X = 'X',
      O = 'O',
      BLANK = ' ';

  // Variables
  var curPlayer = X,
      moves = 0,
      board = [ BLANK, BLANK, BLANK, BLANK, BLANK,
                BLANK, BLANK, BLANK, BLANK ];

  var displayMessage = function( message ) {
    $( '.message' ).html( message );
  };

  var switchPlayer = function() {
    curPlayer = ( curPlayer === X ) ? O : X;
    displayMessage( 'Current Player: ' + curPlayer );
  };

  var isValidMove = function( index ) {
    if ( board[ index ] === BLANK ) {
      return true;
    } else {
      displayMessage( 'Select a blank board position' );
      return false;
    }
  };

  var makeMove = function( $square, index ) {
    board[ index ] = curPlayer;
    $square.html( curPlayer );
    moves++;
  };

  // Check if the game is over. If a player has won, return the 3 squares
  // on which the win occurred as an array. If the game is a draw, return
  // true; if the game is not over, return false
  var gameOver = function() {
    var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ],
        winIndex = -1;
    $.each( winCombinations, function( index, winCombination ) {
      if( allEqual( winCombination ) ){
        winIndex = index;
        return false;
      }
    });
    if( winIndex !== -1 ) {
      return winCombinations[ winIndex ];
    } else if ( moves === 9 ) {
      return true; // Draw
    } else {
      return false;
    }
  };

  // Check if the board pieces at 3 board indexes are the same (that is,
  // if they are all X or all O)
  var allEqual = function( indexes ) {
    return ( board[ indexes[0] ] === board[ indexes[1] ] ) &&
           ( board[ indexes[0] ] === board[ indexes[2] ] ) &&
           ( board[ indexes[0] ] !== BLANK );
  };

  // Handle the end of the game by setting and displaying an appropriate
  // message (including the winning formation, if one exists), then
  // allowing the user to play again
  var endGame = function( endFormation ) {
    var endMessage;

    if( $.isArray(endFormation) ){
      endMessage = 'Game Over.  Player ' + curPlayer + ' Wins';
      showWinFormation( endFormation );
    } else {
      endMessage = 'Game Over.  Draw Game';
    }
    $( '.message' ).addClass( 'end-message' );
    displayMessage( endMessage );

    // Turn off gameboard click listener
    $('.gameboard').off('click');
    $( '.play-again' ).show().on( 'click', function() {
        location.reload();
    });

  };

  // Add a class to highlight the squares that form a winning formation
  var showWinFormation = function( formation ) {
    $.each( formation, function( index, winPosition ) {
      $( '.square' ).eq( winPosition ).addClass(' winning-square ');
    });
  };

  // Main controller to run the game
  var play = function( $square ) {
    var index = +$square.attr( 'id' );

    if( isValidMove( index ) ){
      makeMove( $square, index );
      var winningFormation = gameOver();

      ( winningFormation ) ? endGame( winningFormation ) : switchPlayer();
    }
  };

  return { play: play };

})();

$( document ).ready( function() {
  $( '.gameboard' ).on( 'click', '.square', function() {
    tictactoe.play( $(this) );
  });
});

=========================================




//business logic//
function Player (mark) {
  this.mark = mark;
  this.spaces = [];
}

function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
}

Game.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
}


//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate new instance of Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo);
  $("#gameBoard td").click(function(event) {
    var spaceId = $(this).attr('id');
    newGame.currentPlayer.spaces.push(spaceId);
    console.log(newGame.currentPlayer);
    console.log(newGame.currentPlayer.spaces);
    newGame.switchPlayer();
  });
 });
