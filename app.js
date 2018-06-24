$( document ).ready(function() {
    console.log( "ready!" );
    var sarray = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "MMA", "Extreme Sports"];

      // starting here create a function that loads the next question
    loadbutton();  
    function loadbutton(){
      for  (var i = 0; i < sarray.length; i++) {
        var sportDiv = $("<button>");
          sportDiv.addclass("#searchbuttons")
          sportDiv.text(sarray[i]);
          
          $("#searchbuttons").prepend(sportDiv);

      }
    }
    $("#submission").on(click, loadbutton)
    
    console.log(sarray)
    
    
    

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

        var sport = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Sdu6oyK6zBMPIF0HZ2AGmwSOGLlCLorw&q="+ sport +"&limit=10&offset=0&rating=PG&lang=en";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creating a div to hold the movie
          var gif = $("<div class='gifDiv'>");



          gifDiv.append(image);
          
        });

      }

});