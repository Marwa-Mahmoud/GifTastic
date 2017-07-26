
  	var topics = ["dog", "cat" , "rabbit", "parrot", "hamster", "tortoise", "horse", "cow"];

  	var displayButtons = function(){

  		$("#buttons-view").empty();
  		for (var i = 0; i < topics.length; i++) {
  			var btn = $("<button>");
  			btn.text(topics[i]);
  			btn.addClass("topic");
  			btn.attr("data-value", topics[i]);
  			$("#buttons-view").append(btn);
  		}
  	}

  	var displayGifs =  function(){
      
      $("#gifs-view").empty();
  		var topic =  $(this).attr("data-value");

  		queryURL = "https://api.giphy.com/v1/gifs/search?q="+ topic +"&api_key=dc6zaTOxFJmzC&limit=10";

  		$.ajax({url: queryURL, method:"GET"})
  			.done(function(response){
          var result = response.data;

          for (var i = 0; i < result.length; i++) {

            var gifDiv = $("<div class='item'>"); 
            var rating = result[i].rating;
            var pRating = $("<p>").text("Rating: " + rating); 
  				  var imgStillSrc = result[i].images.fixed_height_still.url;
            var imgAnitmatedSrc = result[i].images.fixed_height.url;

  				  var img = $("<img class='gifItem'>");
            img.attr("still-src", imgStillSrc);
            img.attr("animated-src", imgAnitmatedSrc);
            img.attr("animate-state", "off");
            img.attr("src", imgStillSrc);
            

            gifDiv.append(pRating);
            gifDiv.append(img);
  			
            $("#gifs-view").prepend(gifDiv);
          }

  			});

  		}
     
     var animateOnOff = function(){

        var animateState = $(this).attr("animate-state");

        if(animateState == "off"){
          
          var newSrc = $(this).attr("animated-src");
          $(this).attr("src", newSrc);
          $(this).attr("animate-state", "on");
        }
        else{
          var newSrc = $(this).attr("still-src");
          $(this).attr("src", newSrc);
          $(this).attr("animate-state", "off");
        }
     } 
    

  	$("#submit-topic").on("click", function(){
  		event.preventDefault();
  		var newTopic = $("#topic-input").val().trim();
  		topics.push(newTopic);
      $("#topic-input").val("");
  		displayButtons();

  	});

  	$(document).on("click", ".topic", displayGifs);
    $(document).on("click", ".gifItem", animateOnOff);

  	displayButtons();