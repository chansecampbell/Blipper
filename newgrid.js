var width = 4;
var start = (width*width)-(width);
var path  = [start];

function gridBuilder(){
 $("body").append("<ul class='grid'></ul>");
 for (var i=0; i < (width*width); i++){
   $(".grid").append("<li class='mines'>"+i+"</li>")
 }
}