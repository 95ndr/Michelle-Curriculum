$(document).ready(function(){

$('html').ready(function(){
	 $(".f").slideUp(5000);
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
  strokeStyle: 'white',
  strokeWidth: 1,
  x1: i, y1: 0,
  x2: i, y2:799
});
	i+=10
	}
}
dibujarY();

/*	  	var $c = $("#cuadros");
	var i = 5;
	while(i < $c.height()){
	$('canvas').drawLine({
  strokeStyle: 'white',
  strokeWidth: 1,
  x1:0, y1: i,
  x2:1399, y2:i
});
	i+=3
	}
}
dibujarX();*/



var $h = $("html");

}); //fin de toda la app




