// Business Logic
var inputtedPlayerNames = []

function Player(playerName, playerLetter){
this.playerName = playerName;
this.playerLetter = playerLetter;
this.spaces = [];
this.total = 0;
}

function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.playerTurn = playerOne;
}

Game.prototype.switchPlayerTurn = function () {
  if (this.playerTurn === this.playerTwo) {
    this.playerTurn = this.playerOne;
  } else {
    this.playerTurn = this.playerTwo;
  }
}

function add(a, b) {
    return a + b;
}

function clickedSpacesCombo(spaces, three) {
  var combos = [];
  var head;
  var smallCombos;
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	// if (three > spaces.length || three <= 0) {
	// 	return [];
	// }

	// K-sized set has only one K-sized subset.
	if (three == spaces.length) {
		return spaces;
	}

	// There is N 1-sized subsets in a N-sized set.
	// if (three == 1) {
	// 	combos = [];
	// 	for (i = 0; i < set.length; i++) {
	// 		combos.push([set[i]]);
	// 	}
	// 	return combos;
	// }
	for (i = 0; i < spaces.length - three + 1; i++) {
		// head is a list that includes only our current element.
		head = spaces.splice(i, i + 1);
    console.log("heda" + head);
		// We take smaller combinations from the subsequent elements
		smallCombos = clickedSpacesCombo(spaces.splice(i + 1), three - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < smallCombos.length; j++) {
			combos.push(head.concat(smallCombos[j]));
		}
		return combos;
	}
}
//
//   newArray = [];
//   console.log("67");
//   combos.forEach(function(arrayCombo){
//     // The reduce() method applies a function against an
//     // accumulator and each value of the array (from
//     // left-to-right) to reduce it to a single value.
//     console.log("72");
//     newArray.push(arrayCombo.reduce(add ,0));
//     console.log(newArray);
//     });
//
//   return newArray;
//   }
// }

//========================================//
// User Interface Logic
$(document).ready(function(){
  var spaceIdNum = [];
  var player1;
  var player2;
  var newGame;

  // Submit listener on form
  $('form#sign-up').submit(function(event){
    event.preventDefault();
    // player1 object via Player constructor
    var player1name = $("input#player1-name").val();
    var player2name = $("input#player2-name").val();
    player1 = new Player(player1name, "X");
    player2 = new Player(player2name, "O");
    newGame = new Game(player1, player2);
  });
    // Assign X to first value in inputtedPlayerNames array
    // for (var i=0; i<1; i++) {
    //   if (i===0) {
    //     var player1 = new Player(inputtedPlayerNames[0], "X");
    //   } else {
    //     console.log("break");
    //   }
    //   console.log(player1);
    // }
    //
    // // player2 object via Player constructor
    // inputtedPlayerNames.push($(this).find("input#player2-name").val());
    //
    // // Assign O to second value in inputtedPlayerNames array
    // for (var i=1; i<2; i++) {
    //   if (i===1) {
    //     var player2 = new Player(inputtedPlayerNames[1], "O");
    //   } else {
    //     console.log("break");
    //   }
    //   console.log(player2);
    // }
    // Start new game



    // Click event listner on td, prevent default
    $('td').click(function(event){
      event.preventDefault();
      // IdNum Array containing td id value upon click
      var IdNum = parseInt($(this).attr('id'));
      // newGame.playerTurn accesses player1/player2
      var spaces = newGame.playerTurn.spaces;
      spaces.push(IdNum);
      newGame.playerTurn.total += IdNum;
      // console.log(newGame.playerTurn.playerLetter + " " + newGame.playerTurn.spaces);
      // console.log(newGame.playerTurn.total);

      // Switch X/O upon click
      newGame.switchPlayerTurn();

      // calling combo function on spaces arry in increments of 3
      var result = clickedSpacesCombo(spaces, 3);
      console.log(result);
      // if (clickedSpacesCombo([newGame.playerTurn.spaces], 3) === 7) {
      //   console.log("winner");
      // } else {
        //console.log(clickedSpacesCombo([newGame.playerTurn.spaces], 3));
      // }
    });
});
