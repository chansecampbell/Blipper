////// Strategic game
////// 6 x 6 grid 
////// Player moves across the squares, but each time you move the computer randomly turns
////// You need to avoid being caught by the computer who may turn towards you. If your in the square next to the computer then your caught and the game is over.
///// Need to add a randomiser onto the player move which means that the computer chooses one of 4 div classes.

//// The game is created as an object
var game = game || {};

$(function(){

// The zombie is added to a variable by it's class
 game.computer = $(".computer").attr("class");
 game.obstacle = $(".obstacle").attr("class");
 game.moveCounter = 0;



 game.playerMove = function playerMove(){
  // Click event is set up to listen on all li's on the page.
  $("li").on("click", function(){
  // If a li is clicked that contains the class of zombie then don't allow it
  if ($(this).attr("class") === game.computer){
    alert("You've been caught.");
  } else if ($(this).attr("class") === game.obstacle) {
    alert("You can't go here.");
  } else {
  // Else add the class 'player' to that spot and remove it from the currently existing one
   $(this).addClass('player').siblings('li').removeClass('player');
   console.log(this.id);
   
   $("div").removeClass().addClass("arrow-down")
   //detection
   // if div (enemy) is facing right && player position is on li with an id of 31 then game over
   // $("div").hasClass() && game.playerMove === li.
 }

//  this.id will tell me where the player is
// div.id will tell me where the




/// function that assigns the div two different classes of directions

   // console.log(this);
   // game.moveCounter++;
   // console.log(game.moveCounter);
   // Assign 4 classes to the enemy and make them run randomly when I click

   /// Currently this moves anywhere. Set up and if/else rule to only be able to move to a sibling in -1 +1 -6 and +6 if possible (meaning up down left and right)
 // }
})
}
game.playerMove();

})


/// Variables needed

// var score = 0;
// var lives = 3;
// var player;
// // console.log(player)
// var zombie1;
// var zombie2;
// var zombie3;
// var powerUp1;
// var powerUp2;








// $.fn.toggle2classes = function(class1, class2){
//   if( !class1 || !class2 )
//     return this;

//   return this.each(function(){
//     var $elm = $(this);

//     if( $elm.hasClass(class1) || $elm.hasClass(class2) )
//       $elm.toggleClass(class1 +' '+ class2);

//     else
//       $elm.addClass(class1);
//   });
// };


// var exit = $('.exit');
// console.log(player)

// $('.menu-toggle').click( function() {
    // var i = 0;
// } );
 // $('player').removeAttr('class');
 /// Remove all instances of this class after the click so that it doesnt trail like it currently does.
// var player =
// var player = $('.player');
// var li = document.getElementsByClassName('li');

// for (var i = 0; i < li.length; i++){
//  li[i].addEventListener("click", function(){
//    console.log(this);
//  })
// $('.player').removeClass();
// $('player').empty();
// $("#34").toggleClass("player");
// $(this).append($(player).html());

// player = $(player).contents().appendTo(this);
// console.log(this);



