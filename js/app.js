////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

  game.clearBoard = function() {
    $('.grid').remove();
  }

  game.gameBoard = function(){
   var width = 6;
   $("body").append("<ul class='grid'></ul>");
   for (var i=0; i < (width*width); i++){
     $(".grid").append("<li id="+i+" class='empty'></li>");
     $("ul").css("height", 100*width);
     $("ul").css("width", 100*width);
    }
     this.currentPosition = (width*width)-(1);
     this.moveCounter = 0;
     this.truthy = true;

     // game.levels[0];
     // game.levels[1];
     // game.levels[2];
     // game.levels[3];

     // game.levels[0].player = $("#8").addClass("player").removeClass('empty');
     // game.levels[0].computers.one =  $("#2").addClass("computer1-down").removeClass('empty');
     // game.levels[0].computers.two =  $("#3").addClass("computer1-down").removeClass('empty');

     // game.levels[1].player = $("#11").addClass("player").removeClass('empty');
     // game.levels[1].computers.one =  $("#1").addClass("computer1-down").removeClass('empty');
     // game.levels[1].computers.two =  $("#1").addClass("computer1-down").removeClass('empty');
     // game.levels[1].computers.three = $("#4").addClass("computer3-left").removeClass('empty');
     // game.levels[1].computers.four = $("#6").addClass("computer4-down").removeClass('empty');
     // game.levels[1].obstacles[0] = $("#3").addClass("obstacle").removeClass('empty');
     game.level = game.levels[0];

     // $("#" + game.level.player).addClass("player").removeClass('empty');
     // $("#" + game.level.computers.one).addClass("computer1-down").removeClass('empty');
     // $("#8").addClass("computer1-down").removeClass('empty');
     // $("#10").addClass("computer3-left").removeClass('empty');
     // $("#12").addClass("computer4-down").removeClass('empty');
     // $("#14").addClass("computer5-down").removeClass('empty');
     // $("#21").addClass("computer6-right").removeClass('empty');
     // $("#3").addClass("obstacle").removeClass('empty');
     // $("#5").addClass("obstacle").removeClass('empty');
     // $("#18").addClass("obstacle").removeClass('empty');


    $("#" + game.level.player).addClass("player").removeClass('empty');
    $("#" + game.level.computers.one).addClass("computer1-right").removeClass('empty');
    $("#" + game.level.computers.two).addClass("computer2-right").removeClass('empty');
    $("#" + game.level.computers.three).addClass("computer3-down").removeClass('empty');
    $("#" + game.level.computers.four).addClass("computer4-down").removeClass('empty');
    $("#" + game.level.computers.five).addClass("computer5-down").removeClass('empty');
    $("#" + game.level.computers.six).addClass("computer6-right").removeClass('empty');
    $("#" + game.level.computers.seven).addClass("computer7-left").removeClass('empty');
    // $("#" + level.computers.one).addClass("computer8-left").removeClass('empty');
    for (var i = 0; i < game.level.obstacles.length; i++) {
      $("#" + game.level.obstacles[i]).addClass("obstacle").removeClass("empty");
    }
 }

 game.levels = [
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
    player: 35,
    borders: { 
      top : [0,1,2,3,4,5],
      bottom : [30,31,32,33,34,35],
      right : [5,11,17,23,29,35],
      left : [0,6,12,18,24,30]
    }    
  }
];
console.log(game.levels[0].borders.bottom[2]);
// Need to figure out how to restrict movements.


// Function rotates the enemy
game.computerMove = function computerMove(){
  if (game.truthy === true){
    $(".computer1-right").addClass("computer1-down").removeClass('computer1-right');
    $(".computer2-right").addClass("computer2-down").removeClass('computer2-right');
    $(".computer3-down").addClass("computer3-left").removeClass('computer3-down');
    $(".computer4-down").addClass("computer4-right").removeClass('computer4-down');
    $(".computer5-down").addClass("computer5-right").removeClass('computer5-down');
    $(".computer6-right").addClass("computer6-left").removeClass('computer6-right');
    $(".computer7-left").addClass("computer7-down").removeClass('computer7-left');
    $(".computer8-left").addClass("computer8-right").removeClass('computer8-left');
    game.truthy = false;
  } else {
    game.level.computers.one.addClass("computer1-right").removeClass('computer1-down');
   game.level.computers.two.addClass("computer2-right").removeClass('computer2-down');
    game.level.computers.three.addClass("computer3-down").removeClass('computer3-left');
  game.level.computers.four.addClass("computer4-down").removeClass('computer4-right');
   game.level.computers.five.addClass("computer5-down").removeClass('computer5-right');
   game.level.computers.six.addClass("computer6-right").removeClass('computer6-left');
  game.level.computers.seven.addClass("computer7-left").removeClass('computer7-down');
  game.level.computers.eight.addClass("computer8-left").removeClass('computer8-right');
    game.truthy = true;
  }
}

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
game.playerMove();
})


