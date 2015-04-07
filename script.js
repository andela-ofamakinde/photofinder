$(document).ready(function(){
   
   $('#submit').click(function(){
   	var tag = $('#tag').val();

   	$.ajax({
   		url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=15410c054b26fa22e0278738aea213bb&tags=" + tag + "&per_page=20&format=json&nojsoncallback=1",

   		success: function(data) {
   			$('#photos').empty();
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