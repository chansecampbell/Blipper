$(function(){

/// Planning for changing the game into a multi-level game.

/// then your game.gameBoard just plugs in these values. You would feed in a value of level number depending what level you’re on, and level 1 would use game.levels[0], level 2 would used game.levels[1] etc etc
// So for each level, you would generate the game board using the object for that level
// Lvl1
game.levels = [
  {
    obstacles: [1,4,12,14,15,17,25,28],
    computers: {
      1: 2,
      2: 7,
      3: 10,
      4: 18,
      5: 20,
      6: 31,
      7: 23
    },
    player: 35
  },

  {
     obstacles: [1,4,12,14,15,17,25,28],
     computers: {
       1: 2,
       2: 7,
       3: 10,
       4: 18,
       5: 20,
       6: 31,
       7: 23
     },
     player: 35
   }, 

]

})


game.gameBoard = function gameBoard(){
 $("body").append("<ul class='grid'></ul>");
 for (var i=0; i < (width*width); i++){
   $(".grid").append("<li id="+i+" class='empty'></li>");
   $("#35").addClass("player").removeClass('empty');
   $("#2").addClass("computer1-down").removeClass('empty');
   $("#7").addClass("computer2-right").removeClass('empty');
   $("#10").addClass("computer3-left").removeClass('empty');
   $("#18").addClass("computer4-down").removeClass('empty');
   $("#20").addClass("computer5-down").removeClass('empty');
   $("#31").addClass("computer6-right").removeClass('empty');
   $("#23").addClass("computer7-left").removeClass('empty');
   $("#1").addClass("obstacle").removeClass('empty');
   $("#4").addClass("obstacle").removeClass('empty');
   $("#12").addClass("obstacle").removeClass('empty');
   $("#14").addClass("obstacle").removeClass('empty');
   $("#15").addClass("obstacle").removeClass('empty');
   $("#17").addClass("obstacle").removeClass('empty');
   $("#25").addClass("obstacle").removeClass('empty');
   $("#28").addClass("obstacle").removeClass('empty');
 }
}