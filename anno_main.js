//main function which will execute other functions
var jsonStr = '{ "change":[] }';
var anno_btn = 0;
var start = 0;
var end = 0;
var ID = 0;
var $j = jQuery.noConflict();
function annolet_main() {
    disableAllLinks(); // it will disable all the links present in webpage iteratively
    //var jsonStr = { "change":[] };
    //var anno_btn;
    //add_tagging();
    //add_func_tagging();
    //add_search_tagging();
}
/*function add_tagging()
{
    $j("body").append('<div id=\"page-wrap\" hidden> <ul class=\"annolet_dropdown\"> <li><a href=\"#\" >Event</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'event-name\')\">Name</a> </li> <li> <a href=\"#\">Date</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'event-date-startdate\')\" >Start date</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-date-enddate\')\">End date</a></li> </ul> </li> <li> <a href=\"#\">Location</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-street\')\" >Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-city\')\">City</a></li> </ul> </li> </ul> </li> <li><a href=\"#\" >Organization</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-owner\')\">Owner</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-employee\')\" >Employee</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-contact\')\">Contact</a> </li> <li> <a href=\"#\">Location</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-street\')\">Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-city\')\">City</a></li> </ul> </li> </ul> </li> <li><a href=\"#\" >Person</a> <ul class=\"sub_menu\"> <li> <a href=\"#\">Name</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'person-name-firstname\')\" >First Name</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-name-secondname\')\">Second Name</a></li> </ul> </li> <li> <a href=\"#\">Address</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-street\')\">Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-city\')\">City</a></li> </ul> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'person-contact\')\">Contact</a> </li> </ul> </li> <li><a href=\"#\" >Date</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'date-startdate\')\">Start date</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'person-enddate\')\">End date</a> </li> </ul> </li> <li><a href=\"#\" >Currency</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-rupee\')\">Rupee</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-dollar\')\">Dollar</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-euro\')\">Euro</a> </li> </ul> </li> <li><a href=\"#\" onclick=\"func_tagging(\'unit\')\">Unit</a>  </li> </ul> </div>');
}
function add_func_tagging()
{
    $j("body").append('<div id=\"page_wrap_new\" hidden> <ul class=\"annolet_dropdown\"> <li><a href=\"#\" >Tag_function</a> <ul class=\"sub_menu\"> <li><a href=\"#\" onclick=\"underline()\">underline</a></li> <li><a href=\"#\">heading</a><ul><li><a href=\"#\" onclick=header_func(\'h1\',\'heading-h1\')>h1</a></li> <li><a href=\"#\" onclick=header_func(\'h2\',\'heading-h2\')>h2</a></li> <li><a href=\"#\" onclick=header_func(\'h3\',\'heading-h3\')>h3</a></li> <li><a href=\"#\" onclick=header_func(\'h4\',\'heading-h4\')>h4</a></li> <li><a href=\"#\" onclick=header_func(\'h5\',\'heading-h5\')>h5</a></li> <li><a href=\"#\" onclick=header_func(\'h6\',\'heading-h6\')>h6</a></li> </ul></li> <li><a href=\"#\">italics</a> <ul> <li><a href=\"#\" onclick=change_font(\'italics-arial\',\'font-family:arial\')>arial</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-courier\',\'font-family:courier\')>courier</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-Helvetica\',\'font-family:Helvetica\')>Helvetica</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-Times\',\'font-family:Times\')>Times</a> </li></ul></li> <li id=\"btn1\"> <a href=\"#\" onclick=\"conv_to_href()\">conv_to_link</a></li> <li> <a href=\"#\">Highlight</a><ul> <li><a href=\"#\" onclick=\"tagging_function(\'background-color:yellow\',\'Hghlight_BG_yellow\')\">BG_color_Yellow</a></li> <li><a href=\"#\" onclick=\"tagging_function(\'background-color:red\',\'Highlight_BG_red\')\">BG_color_red</a> </li> </ul>  </li> <li> <a href=\"#\" onclick=\"bold_tag(\'bold\')\">Bold</a></li></ul></li></ul> </div>');
}
function add_search_tagging()
{
     $j("body").append('<div id=\"search-wrap\" hidden> <ul class=\"annolet_dropdown\"><li><a href=\"#\">Search</a> <ul class=\"sub-menu\"> <li><a href=\"#\" onclick=\"modify_event_name()\">Name</a></li> <li><a href=\"#\">Location</a> <ul><li><a href=\"#\" onclick=\"modify_event_location_street()\">Street</a></li> <li><a href=\"#\" onclick=\"modify_event_location_area()\">Area</a></li> <li><a href=\"#\" onclick=\"modify_event_location_city()\">City</a></li></ul></li> <li><a href=\"#\">Organisation</a> <ul><li><a href=\"#\" onclick=\"modify_organisation_owner()"\>Owner</a></li> <li><a href=\"#\" onclick=\"modify_organisation_employee()"\>Employee</a></li> <li><a href=\"#\" onclick=\"modify_organisation_contact()"\>Contact</a></li> <li><a href=\"#\">Location</a> <ul><li><a href=\"#\" onclick=\"modify_organisation_location_street()\">Street</a></li> <li><a href=\"#\" onclick=\"modify_organisation_location_area()\">Area</a></li> <li><a href=\"#\" onclick=\"modify_organisation_location_city()\">City</a></li></ul></li></ul></li></ul></li> <li><a href=\"#\">Modify</a> <ul class=\"sub_menu\"> <li> <a href=\"#\">Date</a><ul><li><a href=\"#\">startdate</a> <ul><li><a href=\"#\" onclick=\"modify_startdate_britishA()\">British-A</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanA()\">American-A</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanB()\">American-B</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanC()\">American-C</a></li> </ul></li> <li><a href=\"#\">enddate</a> <ul><li><a href=\"#\" onclick=\"modify_enddate_britishA()\">British-A</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanA()\">American-A</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanB()\">American-B</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanC()\">American-C</a></li></ul> </li></ul></li> <li><a href=\"#\">Unit</a><ul><li><a href=\"#\" onclick=modify_unit_SI()>SI</a></li> <li><a href=\"#\" onclick=modify_unit_CGI()>CGI</a></li> <li><a href=\"#\" onclick=modify_unit_FPS()>FPS</a></li></ul></li> <li><a href=\"#\">Currency</a><ul><li><a href=\"#\" onclick=modify_unit_euro()>euro</a></li> <li><a href=\"#\" onclick=modify_currency_rupee()>rupee</a></li> <li><a href=\"#\" onclick=modify_currency_dollar()>dollar</a></li></ul></li> </ul></li></ul></div>');
}*/

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

function getCharOffsetRelativeTo(container, node, offset) {
    var range = document.createRange();
    range.selectNodeContents(container);
    range.setEnd(node, offset);
    return range.toString().length;
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
