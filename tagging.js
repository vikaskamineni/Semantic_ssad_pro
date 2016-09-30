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

/*function toggle_tagging()
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
*/
