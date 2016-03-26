////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caugt and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

 // game.computerUp = $(".computer-up").attr("class");
 // game.computerRight = $(".computer-right").attr("class");
 // game.computerDown = $(".computer-down").attr("class");
 // game.computerLeft = $(".computer-left").attr("class");
 game.obstacle = $(".obstacle").attr("class");
 game.player = $(".player").attr("class");
 game.moveCounter = 0;
 game.truthy = true;
 game.currentPosition = 35;
 game.$squares = $('li');
 game.borders = { // else var borders =
   top : [0,1,2,3,4,5],
   bottom : [30,31,32,33,34,35],
   right : [5,11,17,23,29,35],
   left : [0,6,12,18,24,30]
 }

// This checks the value of current positions number against an array. Isnt yet integrated
// Have a look at what position is doing
game.checkBorders = function checkBorders(currentPosition){
  $.each(game.borders.left, function(key, value){
    if (currentPosition === value) {
     game.currentPosition+=1;
     var position = game.$squares[game.currentPosition]; }
    })
}
// game.checkBorders(30);
// When you click right, new position is current position +1
// When you click up, new position is current position - grid width
// When you click left, new position is current position -1
// When you click down, new position is current position + grid width


// Not currently in use
game.checkCollision = function checkCollision(){
}


game.playerMove = function playerMove(){

  $('body').on("keyup", function(e) {
    event.preventDefault();
    if (e.which === 38) {
      console.log("up");
      game.currentPosition-=6;
      var position = game.$squares[game.currentPosition];
      if ($(position).attr("class") === game.obstacle){
        alert("You can't move here.");
        game.currentPosition+=6;
        var position = game.$squares[game.currentPosition];
      } else {
        $(position).addClass("player").siblings('li').removeClass('player');
      }
      console.log(game.currentPosition);

    } else if (e.which === 39) {
      console.log("right");
      game.currentPosition+=1;
      var position = game.$squares[game.currentPosition];
      if ($(position).attr("class") === game.obstacle){
        alert("You can't move here.");
        game.currentPosition-=1;
        var position = game.$squares[game.currentPosition];
      } else {
        $(position).addClass("player").siblings('li').removeClass('player');
      }  
      console.log(game.currentPosition);

    } else if (e.which === 40) {
      console.log("down");
      game.currentPosition+=6;
      var position = game.$squares[game.currentPosition];
      if ($(position).attr("class") === game.obstacle){
        alert("You can't move here.");
        game.currentPosition-=6;
        var position = game.$squares[game.currentPosition];
      } else {
        $(position).addClass("player").siblings('li').removeClass('player');
      }      
      console.log(game.currentPosition);

    } else if (e.which === 37) {
      console.log("left");
      game.currentPosition-=1;
      var position = game.$squares[game.currentPosition];
      // Checks for collision
      if ($(position).attr("class") === game.obstacle){
        alert("You can't move here.");
        game.currentPosition+=1;
        var position = game.$squares[game.currentPosition];
      } else {
        $(position).addClass("player").siblings('li').removeClass('player');
      }
      console.log(game.currentPosition);
    }
    game.moveCounter++;
    game.computerMove();
  })

  }


  // BUT 


// Function rotates the enemy
 game.computerMove = function computerMove(){
  if (game.truthy === true){
 // $("li").removeClass().addClass("computer-right");
 // game.computerDirection = game.computerRight;
 // $('computerUp').addClass('computerRight').removeClass('computerUp');
  $("#31").addClass("computer-left").removeClass('computer-right');
  $("#2").addClass("computer-right").removeClass('computer-down');
  console.log("ello world");
    game.truthy = false;
  } else {
  // game.computerDirection = $("div").removeClass().addClass("arrow-right");
  // game.computerDirection = game.computerUp;
  $("#31").addClass("computer-right").removeClass('computer-left');
  $("#2").addClass("computer-down").removeClass('computer-right');
  console.log("goodbey world");
    game.truthy = true;
  }
}

 // game.detection = function detection(){
 //  // if game.computerDirection.hasClass("arrow-left")
 //  // && this.id has an id of 32
 //  // if (game.computerDirection.hasClass("arrow-left"){
 //  //   console.log("hello world");
 //  // }
 // }

 // game.movements = function movements(){
 //  // I only want to allow a movement if the player clicks on an li that has an id of +1, -1, +6 or -6
 //  // if (this.id.val() === 0 + 1 || 0 - 1 || 0 + 6)
 // }





/// function that assigns the div two different classes of directions


   // console.log(this);
   // 
   // console.log(game.moveCounter);
   // Assign 4 classes to the enemy and make them run randomly when I click

   /// Currently this moves anywhere. Set up and if/else rule to only be able to move to a sibling in -1 +1 -6 and +6 if possible (meaning up down left and right)
 // }

 game.playerMove();

})


