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
}
//------------------------------------------------------------------------
function getCharOffsetRelativeTo(container, node, offset) {
    var range = document.createRange();
    range.selectNodeContents(container);
    range.setEnd(node, offset);
    return range.toString().length;
}


//main function which will execute other functions
function do_tagging() {
    anno_btn = 1;
    document.onselect = function(event) {
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
        anno_rtag();
        //storing the changes
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
