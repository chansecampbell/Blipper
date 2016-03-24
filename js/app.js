////// Survival Game
////// 6 x 6 grid 
////// Player starts at the bottom of the grid
////// You can use the directional keys to move across the grid.
////// There are things in your way that damage your HP - 3 lives and your dead.
////// There are also things on the screen that give you HP back - 3 lives max.
////// Your goal is to strategically make your way across the screen bottom to top and escape the horror house.
///// You either have to be strategic with your moves to survive but you are also rewarded for the less moves you can complete the level within.

//// Dom content is loaded
$(function(){

var player = $('.player');
console.log(player)
/// Click event is set up to listen on all id's by their class type.
$('li').on("click", function(){
  // console.log(this.id);
  $('player').removeAttr('class');
  /// Remove all instances of this class after the click so that it doesnt trail like it currently does.
 var player = $(this).addClass('player');



/// Need to plan what happens as a consequence of the click? 
// These are the potential outcomes:
// If the square is empty and next to the player then move to it.
// If the square has an enemy and is next to the to the player then move to it and lose a life.
// If the square has an item and is next to the player then move to it and gain a life/powerup.
// If the square is the exit then the level is complete and a new level is generated.
// If the square is not next to the player then move invalid.
})

/// Variables needed

var score = 0;
var lives = 3;
var player;
// console.log(player)
var zombie1;
var zombie2;
var zombie3;
var powerUp1;
var powerUp2;





})