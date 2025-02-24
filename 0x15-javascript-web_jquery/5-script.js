// Adding a list to aclass
$(document).ready(function() {
	$('#add_item').click(function() {
		$('ul.my_list').append('<li>Item</li>');
	});
});

