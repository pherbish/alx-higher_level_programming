$(document).ready(function() {
	// Add a new <li> element to UL.my_list
	$('#add_item').click(function() {
		$('ul.my_list').append('<li>Item</li>');
	});
	// Remove the last <li> element from UL.my_list
	$('#remove_item').click(function() {
		$('ul.my_list li:last-child').remove();
	});
	// Clear all <li> elements from UL.my_list
	$('#clear_list').click(function() {
		$('ul.my_list').empty();
	});
});
