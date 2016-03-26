$(function(){



var width = 6;
var start = (width*width)-(width);
var path  = [start];

var gameBoard = function gameBoard(){
 $("body").append("<ul class='grid'></ul>");
 for (var i=0; i < (width*width); i++){
   $(".grid").append("<li id="+i+" class='empty'></li>")
 }
}

$(".grid").addClass("player").removeClass('empty');
$("#2").addClass("computer-down").removeClass('empty');
$("#31").addClass("computer-left").removeClass('empty');

gameBoard();

})