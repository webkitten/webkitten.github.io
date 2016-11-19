$(document).ready(function(){
	$.ajax({
		url: 'data/2009g-06m.json',
		dataType: 'json',
		success: function(data) {
			console.log(data)
		},
		error: function(err) {
			console.log(err)
		};
	});
})

