# GifTastic

- Make an array topics to hold my topics
- Loop through the array to form buttons, a button for each topic
- when a button is clicked, 10 static gif images of the relative button are displayed.

//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
				