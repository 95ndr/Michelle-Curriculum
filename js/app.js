$(document).ready(function(){
responsive();
dibujarY();
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
} //fin de funcion dibujar
//responsive 
$(window).trigger('change', resize)
$(window).resize(resize);
function resize(){
	responsive();
	dibujarY();
} // fin
function responsive (){
	var $deviceWidth = $(window).width();
if($deviceWidth>320 && $deviceWidth<800){
   $("div.paralelos").css({
   	width: '90%',
   	margin: '3%',
   	minHeight:'100vh'
   });
   return;
}else if($deviceWidth>800 && $deviceWidth<1024){
	$("div.paralelos").css({
   	width: '48.5%',
   	margin:'0px',
    height:'85vh'
   });
	return;
}else if($deviceWidth>1024 && $deviceWidth<1200){
	$("div.paralelos").css({
   	width: '32.5%',
   	marginLeft:'0.3%',
    height:'85vh'
   });
}else if($deviceWidth>1200){
	$("div.paralelos").css({
   	  width: '28%',
   	  minHeight:'90vh',
      maxHeight: '90vh',
      margin:'0px',
      marginLeft:'3.5%'
      
   });
}
}//fin de la funcion responsive
}); //fin de toda la app




