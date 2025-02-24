//Writing a text to an elent when its clicked
$(document).ready(function() {
	$('#update_header').click(function() {
		$('header').text('New Header!!!');
	});
});

