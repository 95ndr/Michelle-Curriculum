$(document).ready(function(){
$('html').ready(function(){
	 $("#titulo").slideDown(2000, function() {
 	$(".navegacion").slideDown(1000);
 });

})	

 $(".fondo").hover(function() {
  $("#titulo").slideToggle('slow');

});

 // canvas


var dibujo= document.getElementById('cuadros');
var lienzo = dibujo.getContext("2d");
console.log(lienzo);
function dibujarY(){
	var $c = $("#cuadros");
	var i = 5;
	while(i < $c.width()){
	$('canvas').drawLine({
  strokeStyle: '#000',
  strokeWidth: 1,
  x1: i, y1: 0,
  x2: i, y2:799
});
	i+=5
	}
}
dibujarY();

function dibujarX(){
	  	var $c = $("#cuadros");
	var i = 5;
	while(i < $c.height()){
	$('canvas').drawLine({
  strokeStyle: '#000',
  strokeWidth: 1,
  x1:0, y1: i,
  x2:1399, y2:i
});
	i+=5
	}
}
dibujarX();




});//fin de toda la app




