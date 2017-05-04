$(document).ready(function() {
    
    //First SVG
	var svg = $("#drawSvg");
	svg.addClass('initSvg');
    
    
    //Second SVG
    var secondSVG = $("#controller");
    secondSVG.addClass('initSvg');
    
    
    var buttons = $("#buttons");
    buttons.addClass("flashingButtons");

    var number = $('#number');
    number.addClass('drawNum');

    var tiles = $('.tiles');
    tiles.addClass('spinningTiles');

    var scale = $('#tipping');
    scale.addClass('pivot');

    var movindHand = $('#moving_x5F_hand');
    movindHand.addClass('rotateHand');


    //Traffic Lights
     $('.lightBlink').each(function(i){
        var ThisIt = $(this);
        setTimeout(function(){
          ThisIt.addClass('fadeInLights');
        } , i * 3750);
    
    });

     var pressure = $("#gaugeHand");
     pressure.addClass('pressureGauge');
});