$(document).ready(function(){
	console.log("Hi!")
	$.ajax({
		url: "https://github.com/webkitten/jsonp-test/blob/master/2009g-06m.json",
		dataType: 'jsonp',
		crossDomain: true,
		success: function(results){
			console.log(results)
		},
		error: function(err) {
			console.log(err)
		}
	});

})