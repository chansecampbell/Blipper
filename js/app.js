////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

  var width = 6;

  game.gameBoard = function gameBoard(){
   $("body").append("<ul class='grid'></ul>");
   for (var i=0; i < (width*width); i++){
     $(".grid").append("<li id="+i+" class='empty'></li>");
     
     this.currentPosition = (width*width)-(1);
     this.moveCounter = 0;
     this.truthy = true;
     game.levels[0];

     game.levels[0].player = $("#35").addClass("player").removeClass('empty');
     game.levels[0].computers.one =  $("#2").addClass("computer1-down").removeClass('empty');
     game.levels[0].computers.two = $("#7").addClass("computer2-right").removeClass('empty');
     game.levels[0].computers.three = $("#10").addClass("computer3-left").removeClass('empty');
     game.levels[0].computers.four = $("#18").addClass("computer4-down").removeClass('empty');
     game.levels[0].computers.five = $("#20").addClass("computer5-down").removeClass('empty');
     game.levels[0].computers.six = $("#31").addClass("computer6-right").removeClass('empty');
     game.levels[0].computers.seven = $("#23").addClass("computer7-left").removeClass('empty');
     game.levels[0].obstacles[0] = $("#1").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[1] = $("#4").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[2] = $("#12").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[3] = $("#14").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[4] =  $("#15").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[5] = $("#17").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[6] = $("#25").addClass("obstacle").removeClass('empty');
     game.levels[0].obstacles[7] = $("#28").addClass("obstacle").removeClass('empty');
     
   }
 }

 game.levels = [
 {
  obstacles: [1,4,12,14,15,17,25,28],
  computers: {
    one: 2,
    two: 7,
    three: 10,
    four: 18,
    five: 20,
    six: 31,
    seven: 23
  },
  player: 35
},
]

  // game.start = function(){
  //   this.obstacle = $("obstacle");
  //   this.player = $("player");
  //   this.moveCounter = 0;
  //   this.truthy = true;
  //   this.currentPosition = (width*width)-(1);
  //   this.$squares = $('li');
  //   this.borders = { // else var borders =
  //     top : [0,1,2,3,4,5],
  //     bottom : [30,31,32,33,34,35],
  //     right : [5,11,17,23,29,35],
  //     left : [0,6,12,18,24,30] };

  // }


// This checks the value of current positions number against an array. Isnt yet integrated
// Have a look at what position is doing
// game.checkBorders = function checkBorders(currentPosition, num){
//   $.each(game.borders.left, function(key, value){
//     if (currentPosition === value) {
//       $($("li")[game.currentPosition]).removeClass("player");
//      game.currentPosition += num;
//      $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
//      } 
//      console.log("out of bounds");
//    })
//  }

// }
// game.checkBorders(30);
// When you click right, new position is current position +1
// When you click up, new position is current position - grid width
// When you click left, new position is current position -1
// When you click down, new position is current position + grid width


game.playerMove = function playerMove(){

  $('body').on("keyup", function(e) {
    event.preventDefault();
    /// UP
    if (e.which === 38) {
      $($("li")[game.currentPosition]).removeClass("player");
      game.currentPosition-=width;

      if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
        console.log("You can't walk here!");
        game.currentPosition+=width;
        $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
      } 
      else {
        $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInUp").removeClass('empty');
        $('#slide').get(0).play();
        game.moveCounter++;
        game.computerMove();
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
      $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInLeft").removeClass('empty');
      $('#slide').get(0).play();
      game.moveCounter++;
      game.computerMove();
    }
    /// DOWN
  } else if (e.which === 40) {
    $($("li")[game.currentPosition]).removeClass("player");
    game.currentPosition+=width;

    if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
      console.log("You can't walk here!");
      game.currentPosition-=width;
      $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
    } 
    else {
      $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInDown").removeClass('empty');
      $('#slide').get(0).play();
      game.moveCounter++;
      game.computerMove();
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
     $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInRight").removeClass('empty');
     $('#slide').get(0).play();
     game.moveCounter++;
     game.computerMove();
   }

 }
 game.detection();
 game.checkForWin();
 $("#score").html(game.moveCounter);
})

}

// Function rotates the enemy
game.computerMove = function computerMove(){
  if (game.truthy === true){
    $("#2").addClass("computer1-right").removeClass('computer1-down');
    $("#7").addClass("computer2-down").removeClass('computer2-right');
    $("#10").addClass("computer3-down").removeClass('computer3-left');
    $("#18").addClass("computer4-right").removeClass('computer4-down');
    $("#20").addClass("computer5-right").removeClass('computer5-down');
    $("#31").addClass("computer6-left").removeClass('computer6-right');
    $("#23").addClass("computer7-down").removeClass('computer7-left');
    game.truthy = false;
  } else {
    $("#2").addClass("computer1-down").removeClass('computer1-right');
    $("#7").addClass("computer2-right").removeClass('computer2-down');
    $("#10").addClass("computer3-left").removeClass('computer3-down');
    $("#18").addClass("computer4-down").removeClass('computer4-right');
    $("#20").addClass("computer5-down").removeClass('computer5-right');
    $("#31").addClass("computer6-right").removeClass('computer6-left');
    $("#23").addClass("computer7-left").removeClass('computer7-down');
    game.truthy = true;
  }
}
//// I need a way to say that if player has an ID of 2, 7, 10, 18, 20, 31 or 23 then this value needs to be removed.

// Check for a win
game.checkForWin = function checkForWin(){
  if ($("#0").hasClass("player")) {
    $("h3").append("Congratulations, you beat the level!");
    $($("li").addClass("won").css("animation-name", "pulse"));
    $('#end').get(0).play();
    alert("You've completed the level!");
    // Need to add in a feature to end the game and reset the level here.
  }
}


  // Win conditions
  game.detection = function detection(i){
    for (i = 0; i < 8; i++) {
     var compRight = $('.computer'+i+'-right').attr('id');
     compRight = parseInt(compRight);
     var compLeft = $('.computer'+i+'-left').attr('id');
     compLeft = parseInt(compLeft);
     var compUp = $('.computer'+i+'-up').attr('id');
     compUp = parseInt(compUp);
     var compDown = $('.computer'+i+'-down').attr('id');
     compDown = parseInt(compDown);
     var playerLocation = $('.player').attr('id');
     playerLocation = parseInt(playerLocation);
   // console.log(compDown);
   // console.log(playerLocation);

   if (playerLocation  == (compRight + 1)) {
    $($("li").addClass("caught").css("animation-name", "pulse"));
    $('#busted').get(0).play();
    alert("You've been caught!");
  } else if (playerLocation == (compLeft - 1)) {
    $($("li").addClass("caught").css("animation-name", "pulse"));
    $('#busted').get(0).play();
    alert("You've been caught!");
  } else if (playerLocation == (compUp - 6)) {
    $($("li").addClass("caught").css("animation-name", "pulse"));
    $('#busted').get(0).play();
    alert("You've been caught!");
  } else if (playerLocation == (compDown + 6)) {
    $($("li").addClass("caught").css("animation-name", "pulse"));
    $('#busted').get(0).play();
    alert("You've been caught!");
  } else if (playerLocation === compRight) {
    $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInRight").removeClass('.computer'+i+'-right');
  }
}
}

game.gameBoard();
 // game.start();
 game.playerMove();
})


