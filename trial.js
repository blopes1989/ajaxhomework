$( document ).ready(function() {
    console.log( "ready!" );
    var sarray = ["Football", "Basketball", "Baseball", "Soccer", "Hockey", "MMA", "Extreme Sports"];
    console.log(sarray)
    for  (var i = 0; i < sarray.length; i++) {
        var buttonz = $("<button>");
        buttonz.addClass("btn btn-primary")
        buttonz.attr("clickable")
        buttonz.text(sarray[i])


        $(".searchbuttons").append(buttonz)
    };

console.log(sarray);

console.log($("#clickable"));

});


//$("#clickable").text(sarray[i])
