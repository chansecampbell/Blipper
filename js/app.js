////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caught and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

 game.computer = $(".computer").attr("class");
 game.obstacle = $(".obstacle").attr("class");
 game.moveCounter = 0;
 game.truthy = true;

 game.playerMove = function playerMove(){
  // Click event is set up to listen on all li's on the page.
  $("li").on("click", function(){
  // If a li is clicked that contains the class of the computer
  if ($(this).attr("class") === game.computer){
    alert("You can't move here.");
  } else if ($(this).attr("class") === game.obstacle) {
    alert("You can't move here.");
  } else {
  // Else add the class 'player' to that spot and remove it from the currently existing one
   if (this.id == (this.id - 1) || this.id == (this.id + 1) || this.id == (this.id - 6) || this.id == (this.id + 6) )
   {
    $(this).addClass('player').siblings('li').removeClass('player');
   }
   console.log(this.id);
  // This changes the computers move every time the player clicks and moves
   // $("div").removeClass().addClass("arrow-down")
  // Tracking moves made
   game.moveCounter++;
   // game.computerMove();
 }
 })
 }

// Function rotates the enemy
 // game.computerMove = function computerMove(){
 //  if (game.truthy === true){
 //  game.computerDirection = $("div").removeClass().addClass("arrow-left");
 //    game.truthy = false;
 //  } else {
 //  game.computerDirection = $("div").removeClass().addClass("arrow-right");
 //    game.truthy = true;
 //  }

 // }

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


