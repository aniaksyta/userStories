$(document).ready(function(){

$(".friendly").click(function() {

		$("#item-1").css( "display","none" );
		$("#item-3").css( "display", "none" );
		$("#item-4").css( "display", "none" );
		$("#item-2").fadeIn("slow");
		$( ".friendly" ).addClass( "active" );
		$( ".easy" ).removeClass( "active" );
		$( ".user" ).removeClass( "active" );
		$( ".user-friendly" ).removeClass( "active" );



	});

$( ".user" ).click(function() {

		$("#item-1").css( "display", "none" );
		$("#item-3").fadeIn("slow");
		$("#item-4").css( "display", "none" );
		$("#item-2").css( "display", "none" );
		$( ".friendly" ).removeClass( "active" );
		$( ".easy" ).removeClass( "active" );
		$( ".user" ).addClass( "active" );
		$( ".user-friendly" ).removeClass( "active" );
		


	});

	$( ".user-friendly" ).click(function() {

		$("#item-1").css( "display", "none" );
		$("#item-3").css( "display", "none" );
		$("#item-4").fadeIn("slow");
		$("#item-2").css( "display", "none" );
		$( ".friendly" ).removeClass( "active" );
		$( ".easy" ).removeClass( "active" );
		$( ".user" ).removeClass( "active" );
		$( ".user-friendly" ).addClass( "active" );


	});

	$( ".easy" ).click(function() {

		$("#item-1").fadeIn("slow");
		$("#item-3").css( "display", "none" );
		$("#item-4").css( "display", "none" );
		$("#item-2").css( "display", "none" );
		$( ".friendly" ).removeClass( "active" );
		$( ".easy" ).addClass( "active" );
		$( ".user" ).removeClass( "active" );
		$( ".user-friendly" ).removeClass( "active" );
	
		

	});

  });