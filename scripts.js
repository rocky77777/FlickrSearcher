$(document).ready(function(){
    $('.inputButton').on('mousedown', function() {
    	$('.inputButton').addClass("buttonPressed");
    })
    $('.inputButton').on('mouseleave', function() {
    	$('.inputButton').removeClass("buttonPressed");
    })
    $('.inputButton').on('mouseup', function() {
    	$('.inputButton').removeClass("buttonPressed");
    })
});