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

/// Click event is set up to listen on all li's on the page.
$('li').on("click", function(){
  var clickedId= $(this).attr("class");
  // var hello = $('li').class();
  // (console.log(hello));
  // Whichever li is clicked, add the class 'player' to it and remove it from the currently existing one
 $(this).addClass('player').removeClass('floor');
 $(this).next('li').removeClass('player');
 // $('li').toggle2classes('player', clickedId);
})


 })

/// Need to plan what happens as a consequence of the click? 
// These are the potential outcomes:
// If the square is empty and next to the player then move to it.
// If the square has an enemy and is next to the to the player then move to it and lose a life.
// If the square has an item and is next to the player then move to it and gain a life/powerup.
// If the square is the exit then the level is complete and a new level is generated.
// If the square is not next to the player then move invalid.

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



