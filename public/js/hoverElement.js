$(document).ready(function(){
	$('.container .text-center > div').bind('mouseover', function () {
	    $(this).addClass('hoversDiv');
	    $(this).find('.btn-group > .btn:first-child').removeClass( "btn btn-primary btn-sm disabled" ).addClass( "btn btn-primary btn-sm" );
	    $('.container .text-center > div').not('.hoversDiv').animate({
	    });
	});
	$('.container .text-center > div').bind('mouseout', function () {
		$(this).find('.btn-group > .btn:first-child').removeClass( "btn btn-primary btn-sm" ).addClass( "btn btn-primary btn-sm disabled" );
	    $('.container .text-center > div').removeClass('hoversDiv').fadeTo('normal', 1);
	});
    });