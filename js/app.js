$(document).ready(function(){
// canvas

 var $c = $("#cuadros");

 $("#cuadros").width(window.innerWidth);
 var $w = $($c).width();
 $($c).attr('width', $w);

 $("#cuadros").height(window.innerHeight);
 var $h = $($c).height();
 $($c).attr('height', $h);


function dibujarY(){
	
	var i = 5;
	while(i < $c.width() ){
	$('canvas').drawLine({
  strokeStyle: 'white',
  strokeWidth: 1,
  x1: i, y1: 0,
  x2: i, y2: $c.height()
});
	i+=5
	}
}

dibujarY();
//responsive 



}); //fin de toda la app




