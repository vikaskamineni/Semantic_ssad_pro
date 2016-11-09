//main function which will execute other functions
function annolet_main() {
    disableAllLinks(); // it will disable all the links present in webpage iteratively
    var jsonStr = { "change":[] };
    var anno_btn;
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

$j(document.getElementByClassName="annolet-tools-menu").ready(function() {
    // Get the div's width
    var divWidth = $j("#").width();
    // Update div's width
    $j("#").css("width", divWidth + 'px');
});
    
// calling main function
annolet_main();
