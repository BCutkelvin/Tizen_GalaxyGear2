( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName == "back" ) {
			alert("DEBUG: Bye");	//will display before app closes
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				tizen.application.getCurrentApplication().exit();
			} else {
				window.history.back();
			}
		}
	} );
} () );
