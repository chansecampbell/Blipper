////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};
  
game.levelNumber = 0;
game.width = 6;


game.levels = [
  { /// game 1
    obstacles: [4,12,14,17,25,28],
    computers: {
      one: 2,
      two: 7,
      three: 9,
      four: 18,
      five: 20,
      six: 31,
      seven: 23,
      eight: 16
    },
    player: 35,
    exit: 0,
    round: 1,
    bestScore: 12,
    borders: { 
      top : [0,1,2,3,4,5],
      bottom : [30,31,32,33,34,35],
      right : [5,11,17,23,29,35],
      left : [0,6,12,18,24,30]
    }    
  },
   { /// game 2
    obstacles: [14, 15, 16, 17, 18, 24, 30, 31],
    computers: {
      one: 2,
      two: 3,
      three: 9,
      four: 7,
      five: 10,
      six: 19,
      seven: 21,
      eight: 32,
      nine: 23
    },
    player: 35,
    exit: 5,
    round: 2,
    bestScore: 14,
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

game.clearBoard = function() {
  $('.grid').remove();
}

game.rules = function(){
  $("body").append("<div><button>Start Game</button></div>");
  $("button").on("click", game.start);
}


game.gameBoard = function(){

  $("body").append("<ul class='grid'></ul>");
 
  for (var i=0; i < (game.width*game.width); i++){
    $(".grid").append("<li id="+i+" class='empty'></li>");
    $("ul").css("height", 100*game.width);
    $("ul").css("width", 100*game.width);
  }
 
  this.currentPosition = (game.width*game.width)-(1);
  this.moveCounter = 0;
  this.truthy = true;

  //// how can i alter this value to filter through my different games.
  game.checkForLevel();


  $("#" + game.level.player).addClass("player").removeClass('empty');
  $("#" + game.level.exit).addClass("exit").removeClass('empty');
  $("#" + game.level.computers.one).addClass("computer1-right").removeClass('empty');
  $("#" + game.level.computers.two).addClass("computer2-right").removeClass('empty');
  $("#" + game.level.computers.three).addClass("computer3-left").removeClass('empty');
  $("#" + game.level.computers.four).addClass("computer4-down").removeClass('empty');
  $("#" + game.level.computers.five).addClass("computer5-down").removeClass('empty');
  $("#" + game.level.computers.six).addClass("computer6-right").removeClass('empty');
  $("#" + game.level.computers.seven).addClass("computer7-left").removeClass('empty');
  $("#" + game.level.computers.eight).addClass("computer8-down").removeClass('empty');
  $("#" + game.level.computers.nine).addClass("computer9-left").removeClass('empty');
  $("#best").html(game.level.bestScore);
  $("#which").html(game.level.round);



  for (var i = 0; i < game.level.obstacles.length; i++) {
    $("#" + game.level.obstacles[i]).addClass("obstacle").removeClass("empty");
  }
}

// Function rotates the enemy
game.computerMove = function(){
  if (game.truthy === true){
   $("#" + game.level.computers.one).addClass("computer1-down").removeClass('computer1-right');
   $("#" + game.level.computers.two).addClass("computer2-down").removeClass('computer2-right');
   $("#" + game.level.computers.three).addClass("computer3-down").removeClass('computer3-left');
   $("#" + game.level.computers.four).addClass("computer4-right").removeClass('computer4-down');
   $("#" + game.level.computers.five).addClass("computer5-right").removeClass('computer5-down');
   $("#" + game.level.computers.six).addClass("computer6-left").removeClass('computer6-right');
   $("#" + game.level.computers.seven).addClass("computer7-down").removeClass('computer7-left');
   $("#" + game.level.computers.eight).addClass("computer8-left").removeClass('computer8-down');
   $("#" + game.level.computers.nine).addClass("computer9-down").removeClass('computer9-left');
   game.truthy = false;
 } else {
   $("#" + game.level.computers.one).addClass("computer1-right").removeClass('computer1-down');
   $("#" + game.level.computers.two).addClass("computer2-right").removeClass('computer2-down');
   $("#" + game.level.computers.three).addClass("computer3-left").removeClass('computer3-down');
   $("#" + game.level.computers.four).addClass("computer4-down").removeClass('computer4-right');
   $("#" + game.level.computers.five).addClass("computer5-down").removeClass('computer5-right');
   $("#" + game.level.computers.six).addClass("computer6-right").removeClass('computer6-left');
   $("#" + game.level.computers.seven).addClass("computer7-left").removeClass('computer7-down');
   $("#" + game.level.computers.eight).addClass("computer8-down").removeClass('computer8-left');
   $("#" + game.level.computers.nine).addClass("computer9-left").removeClass('computer9-down');
   game.truthy = true;
 }
}

game.playerMove = function(){

  $('body').on("keyup", function(e) {
    event.preventDefault();
    /// UP
    if (e.which === 38) {
      $($("li")[game.currentPosition]).removeClass("player");
      game.currentPosition-=game.width;

      if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
        console.log("You can't walk here!");
        game.currentPosition+=game.width;
        $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
      } else {
        $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInUp").removeClass('empty');
        $('#slide').get(0).play();
        setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
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
      } else {
        $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInLeft").removeClass('empty');
        $('#slide').get(0).play();
        setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
        game.moveCounter++;
        game.computerMove();
      }
    /// DOWN
    } else if (e.which === 40) {
      $($("li")[game.currentPosition]).removeClass("player");
      game.currentPosition+=game.width;

      if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
        console.log("You can't walk here!");
        game.currentPosition-=game.width;
        $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
      } else {
        $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInDown").removeClass('empty');
        $('#slide').get(0).play();
        setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
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
      } else {
         $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInRight").removeClass('empty');
         $('#slide').get(0).play();
         setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
         game.moveCounter++;
         game.computerMove();
      }
    }
 $("#score").html(game.moveCounter);
    game.detection();
    game.checkForWin();
 
  });
}

// Check for a win
game.checkForWin = function(){
  if ($(".exit").hasClass("player")) {
    $("#which").html("Congratulations, you beat the level!");
    $($("li").addClass("won").css("animation-name", "pulse"));
    $('#end').get(0).play();
    game.levelNumber++;
    alert("Target eliminated! Click OK to continue.");
    game.start();
  }
}

game.checkForLevel = function(){
  game.level = game.levels[game.levelNumber];
}

// Win conditions
game.detection = function(i){
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
      ($($("li")[game.currentPosition]).addClass("player-caught").css("animation-name", "pulse"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compLeft - 1)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught").css("animation-name", "pulse"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compUp - 6)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught").css("animation-name", "pulse"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compDown + 6)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught").css("animation-name", "pulse"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation === compRight) {
      $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInRight").removeClass('.computer'+i+'-right');
    }
  }
}



game.start = function(){
  $("button").hide();
  game.clearBoard();
  game.gameBoard();
  $("#restart" ).on("click", function(){
  game.clearBoard();
  game.gameBoard();
  game.moveCounter = 0;
  $("#score").html(game.moveCounter);
  });
}


$(function(){
  game.rules();
  game.playerMove();
})


