$(document).ready(function () {

  var sarray = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "MMA", "Extreme Sports"];

  function renderButtons() {

    // Deleting the buttons prior to adding new buttons
    $(".searchbuttons").empty();

    // Looping through the array
    for (var i = 0; i < sarray.length; i++) {

      // Then dynamicaly generating buttons for each item array.
      var a = $("<button>");
      // Adding a class
      a.addClass("btn btn-primary show");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", sarray[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(sarray[i]);
      // Adding the button to the HTML
      $(".searchbuttons").append(a);
    }
  }


  renderButtons();



  $("#submitted").on("click", function (event) {
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
    $(".sportGif").empty();

    var sportz = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Sdu6oyK6zBMPIF0HZ2AGmwSOGLlCLorw&q=" + sportz + "&limit=10&offset=0&rating=PG&lang=en";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (i = 0; i < response.data.length; i++) {

        // Creating a div to hold the images
        var gif = $("<img>");
        var still = response.data[i].images.fixed_height_still.url;
        var animated = response.data[i].images.fixed_height.url;
        gif.addClass("gif");
        gif.attr("src", still);
        gif.attr("data-still", still);
        gif.attr("data-animate", animated);
        gif.attr("data-state", "still")
        $(".sportGif").append(gif)
      }
    });
    console.log(queryURL)
  }
  $(document).on("click", ".show", displayGif);
  $(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });










});

