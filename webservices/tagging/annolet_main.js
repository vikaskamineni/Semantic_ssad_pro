function anno_rtag()
{
  var span = document.createElement("span");
  var prop = document.createAttribute("property");
  var span_id = document.createAttribute("id");
  if (window.getSelection().toString().length!==0) {
    prop.value = prompt("Enter the tag name you want to add");
    span_id.value = ID;
    span.setAttributeNode(prop);
    span.setAttributeNode(span_id);
    var sel = window.getSelection();
    if (sel.rangeCount) {
      var range = sel.getRangeAt(0).cloneRange();
      range.surroundContents(span);
      sel.removeAllRanges();
      sel.addRange(range);
    }     
  } 
    var span_element = document.getElementById(ID);
    console.log(span_element);
    var final_xpath = anno_getXpathTo(span_element);
    console.log(final_xpath);
    var fin_ele = anno_getElementByXpath(final_xpath);
    console.log(fin_ele);
    return final_xpath;
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
        var ele = anno_getElementByXpath(xpath);
        //console.log(ele);
        var fin_xpath = anno_rtag();
        //storing the changes
        var currentLocation = window.location.href;
        var obj = JSON.parse(jsonStr);
        obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
        jsonStr = JSON.stringify(obj);
        console.log("inside func");
        console.log(jsonStr);
    };
}
