$(function() {
	$(document).mousemove(function(e){
	$('#cube').css({
    'transform':`rotateX(${-e.pageY/2}deg) rotateY(${-e.pageX/2}deg)`
	});
	});
});

