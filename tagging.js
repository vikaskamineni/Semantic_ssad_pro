function func_tagging(stri)
{
    var span = document.createElement("span");
    var prop = document.createAttribute("property");
    
    var prop2 = document.createAttribute("style");
    if (window.getSelection().toString().length!==0) {    
        console.log('highlighted');

        prop.value=stri;
	prop2.value = 'background-color:yellow';
        span.setAttributeNode(prop);
        span.setAttributeNode(prop2);
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }  
}

function toggle_tagging()
{
  var element = document.getElementById("page-wrap") ;
  if(element.hasAttribute("hidden"))
  {
    element.removeAttribute("hidden");
  }
  else
  {
    element.setAttribute("hidden","");
  }
}
//function to tag a selected text and modify function
function tag_function(stri)
{
    var span = document.createElement("span");
    var prop1 = document.createAttribute("property");
    var prop2 = document.createAttribute("style");

    if (window.getSelection().toString().length!=0)
    {
        console.log('highlighted');
        tagName = prompt('tagName');
        tagInfo = prompt('tagInfo');
        prop2.value = stri;
        prop1.value = tagName;
        console.log(tagName);
        span.setAttributeNode(prop2);
        span.setAttributeNode(prop1);
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
function bold_tag()
{
    var span = document.createElement("span");
    var prop1 = document.createAttribute("property");
    var prop2 = document.createAttribute("style");

    if (window.getSelection().toString().length!=0)
    {
        console.log('highlighted');
        tagName = prompt('tagName');
        tagInfo = prompt('tagInfo');
        prop2.value = "font-weight:bold";
        prop1.value = tagName;
        console.log(tagName);
        span.setAttributeNode(prop2);
        span.setAttributeNode(prop1);
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
