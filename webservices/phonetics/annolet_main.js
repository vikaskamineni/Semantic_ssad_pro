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




//function for getting phonetic
function anno_phonetic(xpath) {
  var span = document.createElement("span");
  var prop = document.createAttribute("property");
  var span_id = document.createAttribute("id");
  ID = ID + 1;
  var SID = ID.toString();
  if (window.getSelection().toString().length!=0)
  {
      prop.value = "phonetics";
      span_id.value = SID;
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
  var span_ele = document.getElementById(SID);
  var fin_xpath = anno_getXpathTo(span_ele);
  var clicked_element = anno_getElementByXpath(fin_xpath);
  if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
      console.log('not permitted');
  }
  else {
    //if element is already translated
  if (anno_getElementByXpath(fin_xpath).id != "phonetic" || !(anno_getElementByXpath(fin_xpath).id)) {
    var text_to_translate = $j(anno_getElementByXpath(fin_xpath)).html();
    get_phonetics(text_to_translate);
    var timer = window.setInterval
    (
      function ()
      {
        if(typeof phonetic_trans !== "default_value")
        {
          console.log("text changing");
          $j(clicked_element).text(phonetic_trans);
          $j(clicked_element).id = "phonetic";
          phonetic_trans = "default_value";
          window.clearInterval(timer);
        }
        else
        {
          console.log("returned without change");
        }
      }
      ,2
    );
  }
  else {
        console.log('already translated');
    }
  }
}

//------------------------------------------------------------------------



//main function which will execute other functions
function run_phoneticConversion() {
    document.onclick = function(event) {
        if (event === undefined) {
            event = window.event;
        } // for IE
        var target = 'target' in event ? event.target : event.srcElement; // for IE
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        anno_phonetic(xpath);
        var sel = window.getSelection();
        var temp = window.getSelection().toString().length;
        console.log(temp);
        var pre = anno_getElementByXpath(xpath);
        var offset = getCharOffsetRelativeTo(pre, sel.anchorNode, sel.anchorOffset);
        console.log(offset);
        var start = offset;
        var end = offset + temp;
        var currentLocation = window.location.href;
        var obj = JSON.parse(jsonStr);
        obj['change'].push({"xpath":xpath,"url":currentLocation,"func_triggered":anno_btn,"start_offset":start,"end_offset":end});
        jsonStr = JSON.stringify(obj);
        console.log("inside func");
        console.log(jsonStr);
        
    };
}

