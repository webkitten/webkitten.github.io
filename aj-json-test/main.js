$(document).ready(function(){
	console.log("Hi!")
	$.ajax({
		url: "https://cdn.rawgit.com/webkitten/jsonp-test/master/2010g-01m.txt",
		dataType: 'text',
		crossDomain: true,
		success: function(results){
			console.log(JSON.parse(results))
		},
		error: function(err) {
			console.log(err)
		}
	});

})