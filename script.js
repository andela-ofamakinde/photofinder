$(document).ready(function(){
   
 $('#submit').click(function(){
 	var tag = $('#tag').val();

 	$.ajax({
 		url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f3b29e6157ba3c709b16e46755ab83ad&tags=" + tag + "&per_page=20&format=json&nojsoncallback=1",
 		success: function(data) {
 			$('#photos').empty();
 			console.log(data);

 		var photoArray = data.photos.photo;

 			$.each(photoArray, function(index, value) {
 				var farmId = value.farm;
 				var serverId = value.server;
 				var photoId = value.id;
 				var secret = value.secret;

 				var imgSrc = "https://farm"+farmId+".staticflickr.com/"+ serverId+ "/"+photoId+"_"+secret+ "_m.jpg"

 				$('#photos').append("<img id='searchImg' src=" + imgSrc + ">");

 			});
 		}
   	});
   	
   });

});
