////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.

var game = game || {};

game.levelNumber = 0;
game.width = 6;

///// Game levels stored in objects
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
    bestScore: 12   
  },
   { /// game 2
    obstacles: [0, 14, 15, 16, 17, 18, 24, 30, 31],
    computers: {
      one: 2,
      twelve: 10,
      four: 7,
      six: 19,
      seven: 21,
      thirteen: 26,
      nine: 23
    },
    player: 35,
    exit: 5,
    round: 2,
    bestScore: 15    
  },
   { /// game 3
    obstacles: [0, 5, 6, 15, 25, 26, 27],
    computers: {
      four: 22,
      one: 16,
      six: 10,
      twelve: 7,
      five: 18,
      fourteen: 13,
      two: 3,
      ten: 14,
      twelve: 32 
    },
    player: 35,
    exit: 21,
    round: 3,
    bestScore: 14   
  },
   { /// game 4
    obstacles: [0, 5, 14, 15, 25, 27],
    computers: {
      one: 20,
      two: 3,
      three: 11,
      four: 22,
      five: 18,
      six: 7,
      seven: 2,
      eleven: 12,
      twelve: 33
    },
    player: 35,
    exit: 30,
    round: 4,
    bestScore: 17   
  },
   { /// game 5
    obstacles: [0, 1, 10, 30, 31, 32, 33, 34],
    computers: {
      one: 8,
      two: 13,
      three: 12,
      four: 24,
      five: 14,
      six: 19,
      seven: 16,
      eight: 17,
      nine: 18,
      ten: 15,
      eleven: 20,
      twelve: 21,
      thirteen: 22,
      fourteen: 23
    },
    player: 35,
    exit: 5,
    round: 5,
    bestScore: 14   
  }
  ];

  game.rules = function(){
    $("body").append("<div><h3>Blipper</h3><button>Welcome to Blipper! You are the Blip Man. Your mission is a simple one, sneak past the enemy without being detected. Enemies move in two directions so keep an eye on their move patterns and learn from your mistakes. Good luck. You may click anywhere to begin.</button></div>");
    $('#theme').get(0).play();
    $("button").on("click", game.start);

  }

  game.start = function(){
    $("button").hide();
    $("h3").hide();
    game.clearBoard();
    game.gameBoard();
    $("#restart" ).on("click", function(){
      game.clearBoard();
      game.gameBoard();
      game.moveCounter = 0;
      $("#score").html(game.moveCounter);
    });
  }

  game.gameBoard = function(){

    $("#wrapper").append("<ul class='grid'></ul>");

    for (var i=0; i < (game.width*game.width); i++){
      $(".grid").append("<li id="+i+" class='empty'></li>");
      $("ul").css("height", 100*game.width);
      $("ul").css("width", 100*game.width);
    }

    this.currentPosition = (game.width*game.width)-(1);
    this.moveCounter = 0;
    this.truthy = true;

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
    $("#" + game.level.computers.ten).addClass("computer10-right").removeClass('empty');
    $("#" + game.level.computers.eleven).addClass("computer11-right").removeClass('empty');
    $("#" + game.level.computers.twelve).addClass("computer12-up").removeClass('empty');
    $("#" + game.level.computers.thirteen).addClass("computer13-up").removeClass('empty');
    $("#" + game.level.computers.fourteen).addClass("computer14-down").removeClass('empty');
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
   $("#" + game.level.computers.ten).addClass("computer10-up").removeClass('computer10-right');
   $("#" + game.level.computers.eleven).addClass("computer11-up").removeClass('computer11-right');
   $("#" + game.level.computers.twelve).addClass("computer12-right").removeClass('computer12-up');
   $("#" + game.level.computers.thirteen).addClass("computer13-down").removeClass('computer13-up');
   $("#" + game.level.computers.fourteen).addClass("computer14-up").removeClass('computer14-down');
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
   $("#" + game.level.computers.ten).addClass("computer10-right").removeClass('computer10-up');
   $("#" + game.level.computers.eleven).addClass("computer11-right").removeClass('computer11-up');
   $("#" + game.level.computers.twelve).addClass("computer12-up").removeClass('computer12-right');
   $("#" + game.level.computers.thirteen).addClass("computer13-up").removeClass('computer13-down');
   $("#" + game.level.computers.fourteen).addClass("computer14-down").removeClass('computer14-up');
   game.truthy = true;
 }
}

////// This is the key press event listener for player movement
game.playerMove = function(){
  $('body').on("keyup", function(e) {
    event.preventDefault();

    var previousPosition = game.currentPosition;

    ////////// UP
    if (e.which === 38) {
      game.currentPosition -= game.width;

      //// Prevents movement outside the boundaries.
      if (game.currentPosition < 0) {
        game.currentPosition = previousPosition;
        return true;        
      }

      $($("li")[previousPosition]).removeClass("player");

      if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
        console.log("You can't walk here!");
        game.currentPosition+=game.width;
        $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
    
    }  else {
      $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInUp").removeClass('empty');
      $('#slide').get(0).play();
      setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
      game.moveCounter++;
      game.computerMove();
    }
    /////////// RIGHT
  } else if (e.which === 39) {
    game.currentPosition += 1;

    //// Prevents movement outside the boundaries.
    if (previousPosition % game.width === game.width-1 && game.currentPosition % game.width === 0) {
      game.currentPosition = previousPosition;
      return true;        
    }

    $($("li")[previousPosition]).removeClass("player");
    
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
    } ////////// DOWN
  } else if (e.which === 40) {

    //// Prevents movement outside the boundaries.
    game.currentPosition+=game.width;

    if (game.currentPosition > game.width*game.width) {
      game.currentPosition = previousPosition;
      return true;        
    }

    $($("li")[previousPosition]).removeClass("player");

    if ($($("li")[game.currentPosition]).hasClass("obstacle")) {
      console.log("You can't walk here!");
      game.currentPosition-=game.width;
      $($("li")[game.currentPosition]).addClass("player").removeClass("empty");
    }  
    else {
      $($("li")[game.currentPosition]).addClass("player").css("animation-name", "slideInDown").removeClass('empty');
      $('#slide').get(0).play();
      setTimeout(function() { $($("li")[game.currentPosition]).css("animation-name", "pulse")}, 1000);
      game.moveCounter++;
      game.computerMove();
    }
    /////////// LEFT
  } else if (e.which === 37) {
    game.currentPosition-=1;

    //// Prevents movement outside the boundaries.
    if (game.currentPosition % game.width === game.width-1 && previousPosition % game.width === 0) {
      game.currentPosition = previousPosition;
      return true;        
    }

    $($("li")[previousPosition]).removeClass("player");
    
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


///////// Prevents scrolling from happening when keyup is used
var ar=new Array(33,34,35,36,37,38,39,40);

$(document).keydown(function(e) {
 var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,ar) > -1) {
        e.preventDefault();
        return false;
      }
      return true;
    });

//////// Lose conditions
game.detection = function(i){
  for (i = 0; i < 15; i++) {
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
      ($($("li")[game.currentPosition]).addClass("player-caught"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compLeft - 1)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compUp - 6)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } else if (playerLocation == (compDown + 6)) {
      $($("li").addClass("caught").css("animation-name", "pulse"));
      ($($("li")[game.currentPosition]).addClass("player-caught"));
      $('#busted').get(0).play();
      alert("You've been caught! Click restart to try the level again.");
    } 
  }
}

////////// Check for a win
game.checkForWin = function(){
  if ($(".exit").hasClass("player")) {
    $($("li").addClass("won").css("animation-name", "pulse"));
    $('#end').get(0).play();
    if (game.levelNumber === 4) {
      alert("You've managed to eliminate all of your targets. Congratulations, your legend will forever remain a blip in history. Stay tuned for more adventures.")
    } else {
      game.levelNumber++;
      alert("Target eliminated! Click OK to continue.");
      game.start();
    }
  }
}

//////// Check for level number
game.checkForLevel = function(){
  game.level = game.levels[game.levelNumber];
}

//////// Clear board
game.clearBoard = function() {
  $('.grid').remove();
}

$(function(){
  game.rules();
  game.playerMove();
})


