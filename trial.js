$( document ).ready(function() {

    var sarray = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "MMA", "Extreme Sports"];

    function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#searchbuttons").empty();

        // Looping through the array of movies
        for (var i = 0; i < sarray.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("btn btn-primary");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", sarray[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(sarray[i]);
          // Adding the button to the HTML
          $("#searchbuttons").append(a);
        }}
        renderButtons();

    console.log(sarray)
    for  (var i = 0; i < sarray.length; i++) {
        var buttonz = $("<button>");
        buttonz.addClass("btn btn-primary")
        buttonz.attr("clickable")
        buttonz.text(sarray[i])
        buttonz.attr("data-name", sarray[i])


        $(".searchbuttons").append(buttonz)
    };



    $("#submitted").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var sport = $("#added").val().trim();
        // The movie from the textbox is then added to our array
        sarray.push(sport);
        console.log(sarray)
        // calling renderButtons which handles the processing of our movie array
      //  renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();

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
              $(document).on("click", "#searchbuttons", displayGif);
        









});

