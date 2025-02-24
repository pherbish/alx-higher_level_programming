//JavaScript script that fetches from url and displays data.
$(document).ready(function() {
	$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
		$('#hello').text(data.hello);
	});
});

