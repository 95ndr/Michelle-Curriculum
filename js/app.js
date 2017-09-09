$(document).ready(function(){
// canvas
function dibujarY(){
	var $c = $("#cuadros");
	$($c).width($(".box").width());
 var $w = $($c).width();
 $($c).attr('width', $w);
 
 $($c).height($(".box").height());
 var $h = $($c).height();
 $($c).attr('height', $h);
	
	var i = 5;
	while(i < $c.width() ){
	$($c).drawLine({
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

$(window).resize(dibujarY);





}); //fin de toda la app




