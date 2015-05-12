$(".p1").click(function()
{
	$("#text1").css( "display", "none" );
		$("#text2").css( "display", "none" );
		$("#text3").fadeIn("slow");
		$( ".p1" ).addClass( "active" );
		$( ".p2" ).removeClass( "active" );
		$( ".p3" ).removeClass( "active" );



	});

$( ".p2" ).click(function() {

		$("#text1").css( "display", "none" );
		$("#text2").fadeIn("slow");
		$("#text3").css( "display", "none" );
		$( ".p1" ).removeClass( "active" );
		$( ".p2" ).removeClass( "active" );
		$( ".p3" ).addClass( "active" );

	});

	$( ".p3" ).click(function() {

		$("#text1").fadeIn("slow");
		$("#text2").css( "display", "none" );
		$("#text3").css( "display", "none" );
		$( ".p1" ).removeClass( "active" );
		$( ".p2" ).addClass( "active" );
		$( ".p3" ).removeClass( "active" );


	});
