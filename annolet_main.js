
var $j = jQuery.noConflict();

annolet_main();

var annolet_btn;
var count=0;
var cnt=0;
// function to create annolet controls container
function annolet_createContainer() {
    // appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'annoletjs/master'
    link.href = "https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName('head')[0].appendChild(link);

    // appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var annolet_container = document.createElement('div');
    annolet_container.id = 'annolet-container';
    body.appendChild(annolet_container);
    //injecting html code
    document.getElementById('annolet-container').innerHTML = "<ul id='annolet' class=annolet-tools-menu>"+
    "<span id='annolet' style='border-radius:10px;  color:orange;font-weight:bold;font-family:monospace; font-size:1.3em'>AnnoLet!</span>"+
    "<span id='annolet' style='color:grey;'>|</span>"+
    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=1;'>TagIt!</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=2;'>Tag_function</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=3;'>Phonetics</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=4;'>Translation</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=rtag-btn onclick='annolet_btn=6;'>rtag</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=audio-btn onclick='annolet_btn=9;'>audio</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=audio-btn onclick='annolet_btn=10;'>edit</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=audio-btn onclick='annolet_btn=11;'>Modify</li>"+
    "<li id='annolet' class=annolet-tools-menu-item id=exit-btn onclick='annolet_btn=0;'>exit</li>"+
    "</ul>"; //HTML to create a list of options
}

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

var phonetic_trans = "default_value";
var language_trans = "default_value";

function get_phonetics(str){

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "//localhost:5000/phonetic-trans", true); // replace localhost afterwards.
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify({"sentence":str}));


  xhr.onreadystatechange = processRequest;

  function processRequest(e)
  {
    if (xhr.readyState == 4)
    {
      console.log('pho trans set');
      phonetic_trans = xhr.responseText;
    }
  }

}

function get_languagetrans(str,fr,to){

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "//localhost:5000/language-translive", true); // replace localhost afterwards
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify({"sentence":str,"from-language":fr,"to-language":to}));

  xhr.onreadystatechange = processRequest;

  function processRequest(e)
  {
    if (xhr.readyState == 4)
    {
      console.log('language trans set');
      language_trans = xhr.responseText;
    }
  }

}



//function for getting phonetic
function anno_phonetic(xpath) {
  clicked_element = anno_getElementByXpath(xpath);
  if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
      console.log('not permitted');
  }
  else {
    //if element is already translated
  if (anno_getElementByXpath(xpath).id != "phonetic" || !(anno_getElementByXpath(xpath).id)) {
    var text_to_translate = $j(anno_getElementByXpath(xpath)).html();
    get_phonetics(text_to_translate);
    var timer = window.setInterval
    (
      function ()
      {
        if(typeof phonetic_trans !== "default_value")
        {
          console.log("text changing");
          $j(anno_getElementByXpath(xpath)).text(phonetic_trans);
          phonetic_trans = "default_value";
          window.clearInterval(timer);
        }
        else
        {
          console.log("returned without change");
        }
      }
      ,1000
    );
  }
  else {
        console.log('already translated');
    }
  }
}


//function for getting phonetic
function anno_language(xpath) {
  clicked_element = anno_getElementByXpath(xpath);
  //if element is already highlighted
  if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
      console.log('not permitted');
  }
  else {
  //if element is already translated
  if (anno_getElementByXpath(xpath).id != "language" || !(anno_getElementByXpath(xpath).id)) {
    var text_to_translate = $j(anno_getElementByXpath(xpath)).html();
    get_languagetrans(text_to_translate,'en','hi');
    var timer = window.setInterval
    (
      function ()
      {
        if(typeof language_trans !== "default_value")
        {
          console.log("text changing");
          $j(anno_getElementByXpath(xpath)).text(language_trans);
          language_trans = "default_value";
          window.clearInterval(timer);
        }
        else
        {
          console.log("returned without change");
        }
      }
      ,1000
    );
  }
  else {
        console.log('already translated');
    }
  }
}


function anno_audio(xpath)
{
    if (window.getSelection().toString().length!==0) {
        console.log("inside audio");
        var clicked_element = anno_getElementByXpath(xpath);
        var node = document.createElement("audio");
        var prop1 = document.createAttribute("src");
        var prop2 = document.createAttribute("controls");
        var prop3 = document.createAttribute("autoplay");
        var prop4 = document.createAttribute("id");
        var string1 = "https://api.voicerss.org/?key=24041d6a5a6c4f0db89edfbff791e8cb&src=";
        var string2 = window.getSelection().toString();
        var string3 = "&hl=en-in";
        var str = string1.concat(string2,string3);
        prop1.value = str;
        prop4.value = "uniqueid";
        node.setAttributeNode(prop1);
        node.setAttributeNode(prop2);
        node.setAttributeNode(prop3);
        node.setAttributeNode(prop4                         );
        clicked_element.appendChild(node);
        document.getElementById("uniqueid").remove();

    }
}

function anno_edit(xpath)
{
        document.getElementsByTagName("body")[0].setAttribute('contenteditable','true');
}

function anno_remove_edit(xpath)
{
  document.getElementsByTagName("body")[0].removeAttribute('contenteditable');
  document.getElementById("page-wrap").setAttribute("hidden","");
}
//------------------------------------------------------------------------
function add_tagging()
{
    $j("body").append('<div id=\"page-wrap\" hidden> <ul class=\"annolet_dropdown\"> <li><a href=\"#\" >Event</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'event-name\')\">Name</a> </li> <li> <a href=\"#\">Date</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'event-date-startdate\')\" >Start date</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-date-enddate\')\">End date</a></li> </ul> </li> <li> <a href=\"#\">Location</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-street\')\" >Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'event-location-city\')\">City</a></li> </ul> </li> </ul> </li> <li><a href=\"#\" >Organization</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-owner\')\">Owner</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-employee\')\" >Employee</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'organization-contact\')\">Contact</a> </li> <li> <a href=\"#\">Location</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-street\')\">Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'organization-location-city\')\">City</a></li> </ul> </li> </ul> </li> <li><a href=\"#\" >Person</a> <ul class=\"sub_menu\"> <li> <a href=\"#\">Name</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'person-name-firstname\')\" >First Name</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-name-secondname\')\">Second Name</a></li> </ul> </li> <li> <a href=\"#\">Address</a> <ul> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-street\')\">Street</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-area\')\">Area</a></li> <li><a href=\"#\" onclick=\"func_tagging(\'person-address-city\')\">City</a></li> </ul> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'person-contact\')\">Contact</a> </li> </ul> </li> <li><a href=\"#\" >Date</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'date-startdate\')\">Start date</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'person-enddate\')\">End date</a> </li> </ul> </li> <li><a href=\"#\" >Currency</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-rupee\')\">Rupee</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-dollar\')\">Dollar</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'currency-euro\')\">Euro</a> </li> </ul> </li> <li><a href=\"#\" >Unit</a> <ul class=\"sub_menu\"> <li> <a href=\"#\" onclick=\"func_tagging(\'unit-si\')\">SI</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'unit-cgi\')\">CGI</a> </li> <li> <a href=\"#\" onclick=\"func_tagging(\'unit-fps\')\">FPS</a> </li> </ul> </li> </ul> </div>');

  $j("head").append('<script src="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/tagging.js">    </script>');

  $j("head").append('<link rel="stylesheet" href="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/style.css" type="text/css" media="screen, projection"/>');
  
 
}
//-----------------------------
function add_func_tagging()
{
    $j("body").append('<div id=\"page_wrap_new\" hidden> <ul class=\"annolet_dropdown\"> <li><a href=\"#\" >Tag_function</a> <ul class=\"sub_menu\"> <li><a href=\"#\" onclick=\"underline()\">underline</a></li> <li><a href=\"#\">heading</a><ul><li><a href=\"#\" onclick=header_func(\'h1\',\'heading-h1\')>h1</a></li> <li><a href=\"#\" onclick=header_func(\'h2\',\'heading-h2\')>h2</a></li> <li><a href=\"#\" onclick=header_func(\'h3\',\'heading-h3\')>h3</a></li> <li><a href=\"#\" onclick=header_func(\'h4\',\'heading-h4\')>h4</a></li> <li><a href=\"#\" onclick=header_func(\'h5\',\'heading-h5\')>h5</a></li> <li><a href=\"#\" onclick=header_func(\'h6\',\'heading-h6\')>h6</a></li> </ul></li> <li><a href=\"#\">italics</a> <ul> <li><a href=\"#\" onclick=change_font(\'italics-arial\',\'font-family:arial\')>arial</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-courier\',\'font-family:courier\')>courier</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-Helvetica\',\'font-family:Helvetica\')>Helvetica</a> </li> <li><a href=\"#\" onclick=change_font(\'italics-Times\',\'font-family:Times\')>Times</a> </li></ul></li> <li id=\"btn1\"> <a href=\"#\" onclick=\"conv_to_href()\">conv_to_link</a></li> <li> <a href=\"#\">Highlight</a><ul> <li><a href=\"#\" onclick=\"tagging_function(\'background-color:yellow\',\'Hghlight_BG_yellow\')\">BG_color_Yellow</a></li> <li><a href=\"#\" onclick=\"tagging_function(\'background-color:red\',\'Highlight_BG_red\')\">BG_color_red</a> </li> </ul>  </li> <li> <a href=\"#\" onclick=\"bold_tag(\'bold\')\">Bold</a></li></ul></li></ul> </div>');
    
    $j("head").append('<script src="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/my_tagging.js">    </script>');
    
    $j("head").append('<link rel="stylesheet" href="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/my_style.css" type="text/css" media="screen, projection"/>');
  
}
function add_search_tagging()
{
    $j("body").append('<div id=\"search-wrap\" hidden> <ul class=\"annolet_dropdown\"> <li><a href=\"#\">Search_modify</a> <ul class=\"sub_menu\"> <li> <a href=\"#\">Date</a><ul><li><a href=\"#\">startdate</a> <ul><li><a href=\"#\" onclick=\"modify_startdate_britishA()\">British-A</a></li> <li><a href=\"#\" onclick=\"modify_startdate_britishB()\">British-B</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanA()\">American-A</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanB()\">American-B</a></li> <li><a href=\"#\" onclick=\"modify_startdate_americanC()\">American-C</a></li> </ul></li> <li><a href=\"#\">enddate</a> <ul><li><a href=\"#\" onclick=\"modify_enddate_britishA()\">British-A</a></li> <li><a href=\"#\" onclick=\"modify_enddate_britishB()\">British-B</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanA()\">American-A</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanB()\">American-B</a></li> <li><a href=\"#\" onclick=\"modify_enddate_americanC()\">American-C</a></li></ul> </li></ul></li></ul></li></ul></div>');
    
    $j("head").append('<script src="http://momentjs.com/downloads/moment.min.js"> </script>');
    
    $j("head").append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>');
    
    $j("head").append('  <script src="jquery-1.6.1.js"></script>');
    
    $j("head").append('  <script src="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/search_function.js"></script>');
    
    $j("head").append('<link rel="stylesheet" href="https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/my_style1.css" type="text/css" media="screen, projection"/>');
  
    
}

function anno_rtag(xpath)
{
    //if((count%2)==1)
    //{
    console.log("remove hidden");
    var temp=document.getElementById("page-wrap");
    console.log(temp);
    document.getElementById("page-wrap").removeAttribute("hidden");
    //}
    //else
    //{
    if(document.getElementById("page_wrap_new").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        var temp=document.getElementById("page_wrap_new");
        console.log(temp);
        document.getElementById("page_wrap_new").setAttribute("hidden",true);
    }
    if(document.getElementById("search-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("search-wrap").setAttribute("hidden",true);
    }
    
    //toggle_tagging();
}
function toggle_tagging()
{
  var element = document.getElementById("page-wrap") ;
  if(element.hasAttribute("hidden"))
  {
    console.log("remove hidden");
    element.removeAttribute("hidden");
    console.log(element);
  }
  else
  {
      console.log("add hidden");
    element.setAttribute("hidden",true);
      console.log(element);
  }
}
function toggle_tagging2()
{
    var element = document.getElementById("page-wrap");
    if(element.hasAttribute("hidden"))
    {
    }
    else
    {
        element.setAttribute("hidden","");
    }
}
function tag_function()
{
    //if(cnt%2==1)
    //{
    console.log("remove new hidden");
    var temp=document.getElementById("page_wrap_new");
    console.log(temp);
    document.getElementById("page_wrap_new").removeAttribute("hidden");
    //}
    //else
    //{
    if(document.getElementById("page-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("page-wrap").setAttribute("hidden",true);
    }
    if(document.getElementById("search-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("search-wrap").setAttribute("hidden",true);
    }
    
 
}

function search_function()
{
    document.getElementById("search-wrap").removeAttribute("hidden");
    if(document.getElementById("page-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("page-wrap").setAttribute("hidden",true);
    }
    var element = document.getElementById("page_wrap_new");
    if(element.hasAttribute("hidden"))
    {
    }
    else
    {
        element.setAttribute("hidden",true);
    }
}
//main function which will execute other functions
function annolet_main() {
    disableAllLinks()  // it will disable all the links present in webpage iteratively
    annolet_createContainer();
    add_tagging();
    add_func_tagging();
    add_search_tagging();
    document.onclick = function(event) {
        if (event === undefined) {
            event = window.event;
        } // for IE
        var target = 'target' in event ? event.target : event.srcElement; // for IE
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        if (annolet_btn === 1) {
            anno_highlight(xpath);
        }
        if(annolet_btn === 4){
          anno_language(xpath);
        }
        else if (annolet_btn == 3){
          anno_phonetic(xpath);
        }
        else if (annolet_btn == 6){
           count++;
           anno_rtag(xpath);
        }
        else if (annolet_btn===9)
        {
            anno_audio(xpath);
        }
        else if (annolet_btn===10)
        {
             anno_edit(xpath);
        }
        else if (annolet_btn == 2)
        {
            cnt++;
            tag_function();
        }
        else if (annolet_btn == 11)
        {
            search_function();
        }
         else if (annolet_btn===0)
        {
             anno_remove_edit(xpath);
        }
    };
}

// funtion to disable all links
function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}

//function to store tags into JSON object.
var annolet_obj = 0; //will save jason objects
function annolet_insertIntoObject(xpath) {
  if(annolet_obj==0){
    authorname = prompt('enter authorname');
    annolet_obj = {
        url: window.location.href,
        authorname: authorname,
        tags : []
    };
    tagObject(xpath, annolet_obj);
  }
  else {
    tagObject(xpath, annolet_obj);
  }
}

// function for creation of objects
function tagObject(xpath, obj){
  tagName = prompt('tagName:');
  tagInfo = prompt('tagInfo');
  obj.tags.push(
    {
      tagName: tagName,
      tagInfo: tagInfo,
      xpath: xpath
    }
  )
}

//function for highlighting element
function anno_highlight(xpath) {
    clicked_element = anno_getElementByXpath(xpath);
    //if element is already highlighted
    if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
        console.log('not permitted');
    }
    else {
      // hightlight selected element and store it
      $j(anno_getElementByXpath(xpath)).wrapInner("<span id='mark' style='background:yellow;'></span>");
      annolet_insertIntoObject(xpath); // storing into object
    }
}
