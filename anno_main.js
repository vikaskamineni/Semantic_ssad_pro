//main function which will execute other functions
function annolet_main() {
    disableAllLinks()  // it will disable all the links present in webpage iteratively
}

// funtion to disable all links
function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}

// for exiting annolet
$j("#annolet-exit-btn").click(function(e) {
    if (e === undefined) {
        e = window.event;
    } // for IE
    e.stopPropagation();
});

$j(document).ready(function() {
    // Get the div's width
    var divWidth = $("#").width();
    // Update div's width
    $("#").css("width", divWidth + 'px');
});
    
// calling main function
annolet_main();
