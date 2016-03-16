$(document).ready(function(){
    $('.inputButton').on('mousedown', function() {
    	$('.inputButton').toggleClass("buttonPressed");
    })
    $('.inputButton').on('mouseleave', function() {
    	$('.inputButton').removeClass("buttonPressed");
    })
});