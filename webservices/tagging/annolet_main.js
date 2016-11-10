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

function anno_rtag()
{
  var span = document.createElement("span");
  var prop = document.createAttribute("property");
  var span_id = document.createAttribute("id");
  if (window.getSelection().toString().length!==0) {
    prop.value = prompt("Enter the tag name you want to add");
    span_id.value = "123";
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
    var span_element = document.getElementById("123");
    console.log(span_element);
    var final_xpath = anno_getXpathTo(span_element);
    console.log(final_xpath);
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
        console.log(target);
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        console.log(xpath);
        var ele = anno_getElementByXpath(xpath);
        console.log(ele);
        var fin_xpath = anno_rtag();
        //storing the changes
        var currentLocation = window.location;
        var obj = JSON.parse(jsonStr);
        obj['change'].push({"xpath":xpath,"url":currentLocation,"func_triggered":anno_btn});
        jsonStr = JSON.stringify(obj);
    };
}
