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
    
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Sdu6oyK6zBMPIF0HZ2AGmwSOGLlCLorw&q="+ sarray +"&limit=10&offset=0&rating=PG&lang=en"
    function searchDisplay (){

    };

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var searchDiv = $("<div class='searched'>")


        



console.log(queryURL)

console.log(response)





})

});