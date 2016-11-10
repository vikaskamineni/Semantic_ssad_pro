//main function which will execute other functions
var jsonStr = '{ "change":[] }';
var anno_btn = 0;
function annolet_main() {
    disableAllLinks(); // it will disable all the links present in webpage iteratively
    //var jsonStr = { "change":[] };
    //var anno_btn;
}

// funtion to disable all links
function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}
//---------------------------------------------------------------------------------------------------------


// function to get Xpath to passed element
function anno_getXpathTo(element) {
    if (element.id !== '') {
        return "//*[@id='" + element.id + "']";
    }
    if (element === document.body) {
        return "html/" + element.tagName.toLowerCase();
    } //added 'html/' to generate a valid Xpath even if parent has no ID.
    var ix = 0;
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element) {
            return anno_getXpathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
            ix++;
        }
    }
}

// function to evaluate element from Xpath
function anno_getElementByXpath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

//------------------------------------------------------------------------


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
