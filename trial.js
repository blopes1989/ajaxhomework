$( document ).ready(function() {

    var sarray = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "MMA", "Extreme Sports"];

    function renderButtons() {

        // Deleting the buttons prior to adding new buttons
        $(".searchbuttons").empty();

        // Looping through the array
        for (var i = 0; i < sarray.length; i++) {

          // Then dynamicaly generating buttons for each item array.
          var a = $("<button>");
          // Adding a class
          a.addClass("btn btn-primary");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", sarray[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(sarray[i]);
          // Adding the button to the HTML
          $(".searchbuttons").append(a);
        }}


renderButtons();



    $("#submitted").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // This line will grab the text from the input box
        var sport = $("#added").val().trim();
        // The word from the textbox is then added to our array
        sarray.push(sport);
        console.log(sarray)
        // calling renderButtons which handles the processing of array
      renderButtons();
      });

            // displayMovieInfo function re-renders the HTML to display the appropriate content
            function displayGif() {

                var sport = $(this).attr("data-name");
                var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Sdu6oyK6zBMPIF0HZ2AGmwSOGLlCLorw&q="+ sport +"&limit=10&offset=0&rating=PG&lang=en";
        
                // Creating an AJAX call for the specific movie button being clicked
                $.ajax({
                  url: queryURL,
                  method: "GET"
                }).then(function(response) {
        
                  // Creating a div to hold the movie
                  var gif = $("<div class='gifDiv'>");
                  gif=response

                });
        console.log(queryURL)
              }
              $(document).on("click", ".searchbuttons", displayGif);
        









});

