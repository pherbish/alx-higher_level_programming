$(document).ready(function() {
	    function fetchTranslation() {
		    let langCode = $('#language_code').val().trim(); // Get user input
		    if (langCode) {
			    let url = `https://www.fourtonfish.com/hellosalut/?lang=${langCode}`;
			    $.get(url, function(data) {
				    $('#hello').text(data.hello); // Display the translated tex
			    });
		    }
	    }
	// Fetch translation when the button is clicked
	$('#btn_translate').click(fetchTranslation);

	// Fetch translation when Enter key is pressed
	$('#language_code').keypress(function(event) {
		if (event.which === 13) { // 13 is the keycode for Enter
			fetchTranslation();
		}
	});
});
