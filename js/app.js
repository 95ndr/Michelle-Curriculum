$(document).ready(function(){


 // canvas
var dibujo= document.getElementById('cuadros');
var lienzo = dibujo.getContext("2d");
console.log(lienzo);

function dibujarY(){
	var $c = $("#cuadros");
	var i = 5;
	while(i < $c.width()){
	$('canvas').drawLine({
  strokeStyle: 'white',
  strokeWidth: 1,
  x1: i, y1: 0,
  x2: i, y2:699
});
	i+=10
	}
}
dibujarY();
}); //fin de toda la app




