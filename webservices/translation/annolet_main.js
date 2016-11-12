
var $j = jQuery.noConflict();
var language_trans = "default_value";

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
function anno_language(xpath) {
  var span = document.createElement("span");
  var prop = document.createAttribute("property");
  var span_id = document.createAttribute("id");
  ID = ID + 1;
  if (window.getSelection().toString().length!=0)
  {
      prop.value = "language";
      span_id.value = ID;
      span.setAttributeNode(prop);
      span.setAttributeNode(span_id);
      var sel = window.getSelection();
      if(sel.rangeCount){
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(span);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }
  var span_ele = document.getElementById(ID);
  var fin_xpath = anno_getXpathTo(span_ele);
  var clicked_element = anno_getElementByXpath(xpath);
  //if element is already highlighted
  if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
      console.log('not permitted');
  }
  else {
  //if element is already translated
  if (anno_getElementByXpath(fin_xpath).id != "language" || !(anno_getElementByXpath(fin_xpath).id)) {
    var text_to_translate = $j(anno_getElementByXpath(fin_xpath)).html();
    get_languagetrans(text_to_translate,'en','hi');
    var timer = window.setInterval
    (
      function ()
      {
        if(typeof language_trans !== "default_value")
        {
          console.log("text changing");
          $j(anno_getElementByXpath(fin_xpath)).text(language_trans);
          $j(anno_getElementByXpath(fin_xpath)).id("language");
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
  return fin_xpath;
}

//------------------------------------------------------------------------



//main function which will execute other functions
function run_langtrans() {
    anno_btn = 2;
    document.onclick = function(event) {
        if (event === undefined) {
            event = window.event;
        } // for IE
        var target = 'target' in event ? event.target : event.srcElement; // for IE
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        var final_xpath = anno_language(xpath);
        var currentLocation = window.location;
        var obj = JSON.parse(jsonStr);
        obj['change'].push({"xpath":final_xpath,"url":currentLocation,"func_triggered":anno_btn});
        jsonStr = JSON.stringify(obj);
    };
}

