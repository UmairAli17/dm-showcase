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
});