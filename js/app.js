////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

  var width = 6;

  game.position = function position(i){
   (width*width)-(i);
  }

  game.gameBoard = function gameBoard(){
   $("body").append("<ul class='grid'></ul>");
   for (var i=0; i < (width*width); i++){
     $(".grid").append("<li id="+i+" class='empty'></li>");
     $("#35").addClass("player").removeClass('empty');
     $("#2").addClass("computer-down").removeClass('empty');
     $("#31").addClass("computer-left").removeClass('empty');
     $("#1").addClass("obstacle").removeClass('empty');
     $("#4").addClass("obstacle").removeClass('empty');
     $("#12").addClass("obstacle").removeClass('empty');
     $("#14").addClass("obstacle").removeClass('empty');
     $("#15").addClass("obstacle").removeClass('empty');
     $("#17").addClass("obstacle").removeClass('empty');
     $("#25").addClass("obstacle").removeClass('empty');
     $("#28").addClass("obstacle").removeClass('empty');
   }
  }

  game.start = function(){
    this.obstacle = $("obstacle");
    this.player = $("player");
    this.moveCounter = 0;
    this.truthy = true;
    this.currentPosition = 35;
    this.$squares = $('li');
    this.borders = { // else var borders =
      top : [0,1,2,3,4,5],
      bottom : [30,31,32,33,34,35],
      right : [5,11,17,23,29,35],
      left : [0,6,12,18,24,30]
    }
  }

// This checks the value of current positions number against an array. Isnt yet integrated
// Have a look at what position is doing
// game.checkBorders = function checkBorders(currentPosition){
//   $.each(game.borders.left, function(key, value){
//     if (currentPosition === value) {
//      game.currentPosition+=1;
//      var position = game.$squares[game.currentPosition]; }
//     })
// }
// game.checkBorders(30);
// When you click right, new position is current position +1
// When you click up, new position is current position - grid width
// When you click left, new position is current position -1
// When you click down, new position is current position + grid width


// Not currently in use
// game.checkCollision = function checkCollision(){
// }


game.playerMove = function playerMove(){

  $('body').on("keyup", function(e) {
    event.preventDefault();
    /// UP
    if (e.which === 38) {
      $($("li")[game.currentPosition]).removeClass("player");
      game.currentPosition-=6;
       
        if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
          console.log("You can't walk here!");
        game.currentPosition+=6;
        $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
        } 
        else {
      $($("li")[game.currentPosition]).addClass("player").removeClass('empty');
      game.checkForWin();
        }
    /// RIGHT
    } else if (e.which === 39) {
    $($("li")[game.currentPosition]).removeClass("player");
    game.currentPosition+=1;
     
      if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
        console.log("You can't walk here!");
      game.currentPosition-=1;
      $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
      } 
      else {
    $($("li")[game.currentPosition]).addClass("player").removeClass('empty');
      }
    /// DOWN
    } else if (e.which === 40) {
      $($("li")[game.currentPosition]).removeClass("player");
          game.currentPosition+=6;
           
            if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
              console.log("You can't walk here!");
            game.currentPosition-=6;
            $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
            } 
            else {
          $($("li")[game.currentPosition]).addClass("player").removeClass('empty');
            }
    //// LEFT
    } else if (e.which === 37) {
     $($("li")[game.currentPosition]).removeClass("player");
     game.currentPosition-=1;
      
       if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
         console.log("You can't walk here!");
       game.currentPosition+=1;
       $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
       } 
       else {
     $($("li")[game.currentPosition]).addClass("player").removeClass('empty');
       }

    }
    game.moveCounter++;
    $( ".moveCounter" ).append(game.moveCounter);
    game.computerMove();
  })

  }

// Function rotates the enemy
 game.computerMove = function computerMove(){
  if (game.truthy === true){
  $("#31").addClass("computer-left").removeClass('computer-right');
  $("#2").addClass("computer-right").removeClass('computer-down');
    game.truthy = false;
  } else {
  $("#31").addClass("computer-right").removeClass('computer-left');
  $("#2").addClass("computer-down").removeClass('computer-right');
    game.truthy = true;
  }
}

 game.checkForWin = function checkForWin(){
  if ($("#0").hasClass("player")) {
    $("h1").append("Congratulations, you beat the level!");
 }
}

   // game.detection = function detection(){
    // player loses
    // if #31 has a class of computer right && #32 has a class of player then game over
    // if #31 has a class of computer left && #30 has a class of player then game over
    // if #2 has a class of computer right && #3 has a class of player then game over
    // if #2 has a class of computer down && #8 has a class of player then game over

  //   if (this.currentPosition = 0) {
  //               alert("You've won!");
  //  }
  // }
 // }

 
 game.gameBoard();
 game.start();
 game.playerMove();
 game.checkForWin();
})


