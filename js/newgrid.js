////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

  var width = 3;

  game.gameBoard = function gameBoard(){
   $("body").append("<ul class='grid'></ul>");
   for (var i=0; i < (width*width); i++){
     $(".grid").append("<li id="+i+" class='empty'></li>");
     
     this.currentPosition = (width*width)-(1);
     this.moveCounter = 0;
     this.truthy = true;
     game.levels[0];
     // game.levels[1];
     // game.levels[2];
     // game.levels[3];
     // game.levels[3];

     game.levels[0].player = $("#8").addClass("player").removeClass('empty');
     game.levels[0].computers.one =  $("#2").addClass("computer1-down").removeClass('empty');
     game.levels[0].computers.two =  $("#3").addClass("computer1-down").removeClass('empty');

     // game.levels[1].player = $("#11").addClass("player").removeClass('empty');
     // game.levels[1].computers.one =  $("#1").addClass("computer1-down").removeClass('empty');
     // game.levels[1].computers.two =  $("#1").addClass("computer1-down").removeClass('empty');
     // game.levels[1].computers.three = $("#4").addClass("computer3-left").removeClass('empty');
     // game.levels[1].computers.four = $("#6").addClass("computer4-down").removeClass('empty');
     // game.levels[1].obstacles[0] = $("#3").addClass("obstacle").removeClass('empty');

     // game.levels[2].player = $("#24").addClass("player").removeClass('empty');
     // game.levels[2].computers.one =  $("#1").addClass("computer1-down").removeClass('empty');
     // game.levels[2].computers.two =  $("#8").addClass("computer1-down").removeClass('empty');
     // game.levels[2].computers.three = $("#10").addClass("computer3-left").removeClass('empty');
     // game.levels[2].computers.four = $("#12").addClass("computer4-down").removeClass('empty');
     // game.levels[2].computers.five = $("#14").addClass("computer5-down").removeClass('empty');
     // game.levels[2].computers.six = $("#21").addClass("computer6-right").removeClass('empty');
     // game.levels[2].obstacles[0] = $("#3").addClass("obstacle").removeClass('empty');
     // game.levels[2].obstacles[1] = $("#5").addClass("obstacle").removeClass('empty');
     // game.levels[2].obstacles[2] = $("#18").addClass("obstacle").removeClass('empty');


     // game.levels[3].player = $("#35").addClass("player").removeClass('empty');
     // game.levels[3].computers.one =  $("#2").addClass("computer1-right").removeClass('empty');
     // game.levels[3].computers.two = $("#7").addClass("computer2-right").removeClass('empty');
     // game.levels[3].computers.three = $("#9").addClass("computer3-down").removeClass('empty');
     // game.levels[3].computers.four = $("#18").addClass("computer4-down").removeClass('empty');
     // game.levels[3].computers.five = $("#20").addClass("computer5-down").removeClass('empty');
     // game.levels[3].computers.six = $("#31").addClass("computer6-right").removeClass('empty');
     // game.levels[3].computers.seven = $("#23").addClass("computer7-left").removeClass('empty');
     // game.levels[3].computers.eight = $("#16").addClass("computer8-left").removeClass('empty');
     // game.levels[3].obstacles[1] = $("#4").addClass("obstacle").removeClass('empty');
     // game.levels[3].obstacles[2] = $("#12").addClass("obstacle").removeClass('empty');
     // game.levels[3].obstacles[5] = $("#17").addClass("obstacle").removeClass('empty');
     // game.levels[3].obstacles[6] = $("#25").addClass("obstacle").removeClass('empty');
     // game.levels[3].obstacles[7] = $("#28").addClass("obstacle").removeClass('empty');
     
   }
 }

 game.levels = [
 { // 3x3
   obstacles: [],
   computers: {
    one: 2,
    two: 3
   },
   player: 8
 },

  {// 4x4
   obstacles: [3],
   computers: {
     one: 1,
     two: 2,
     three: 4,
     four: 6
   },
   player: 11
 },

  {// 5x5
   obstacles: [3, 5, 18],
   computers: {
     one: 1,
     two: 8,
     three: 10,
     four: 12,
     five: 14,
     six: 21
   },
   player: 24
 },
 {// 6x6
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
    $("#2").addClass("computer1-left").removeClass('computer1-down');
    $("#3").addClass("computer2-right").removeClass('computer2-down');
    game.truthy = false;
  } else {
    $("#2").addClass("computer1-down").removeClass('computer1-left');
    $("#3").addClass("computer1-down").removeClass('computer1-right');

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


