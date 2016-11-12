function anno_rtag()
{
  var span = document.createElement("span");
  var prop = document.createAttribute("property");
  //var span_id = document.createAttribute("id");
  //ID = ID + 1;
  var SID = ID.toString();
  if (window.getSelection().toString().length!==0) {
    prop.value = prompt("Enter the tag name you want to add");
    //span_id.value = SID;
    span.setAttributeNode(prop);
    //span.setAttributeNode(span_id);
    var sel = window.getSelection();
    if (sel.rangeCount) {
      var range = sel.getRangeAt(0).cloneRange();
      range.surroundContents(span);
      sel.removeAllRanges();
      sel.addRange(range);
    }     
  } 
    //var span_element = document.getElementById(SID);
    //console.log(span_element);
    //var final_xpath = anno_getXpathTo(span_element);
    //console.log(final_xpath);
    //var fin_ele = anno_getElementByXpath(final_xpath);
    //console.log(fin_ele);
    //return final_xpath;
  return prop.value;
}
//------------------------------------------------------------------------


//main function which will execute other functions
function do_tagging() {
    anno_btn = 1;
    document.onclick = function(event) {
        if (event === undefined) {
            event = window.event;
        } // for IE
        var target = 'target' in event ? event.target : event.srcElement; // for IE
        //console.log(target);
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        //console.log(xpath);
        //var ele = anno_getElementByXpath(xpath);
        //console.log(ele);
        var prompt_val = anno_rtag();
        //storing the changes
        var sel = window.getSelection();
        console.log("look here");
        console.log(sel);
        var temp = window.getSelection().toString().length;
        console.log(temp);
        var pre = anno_getElementByXpath(xpath);
        var offset = getCharOffsetRelativeTo(pre, sel.anchorNode, sel.anchorOffset);
        console.log(offset);
        start = offset;
        end = offset + temp;
        var currentLocation = window.location.href;
        var obj = JSON.parse(jsonStr);
        if (start != end)
        {
          obj['change'].push({"xpath":xpath,"url":currentLocation,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":prompt_val});
        }
        jsonStr = JSON.stringify(obj);
        console.log("inside func");
        console.log(jsonStr);
    };
}
