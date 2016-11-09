function func_tagging(stri)
{
    var span = document.createElement("span");
    var prop = document.createAttribute("property");
    
    //var prop2 = document.createAttribute("style");
    if (window.getSelection().toString().length!==0) {    
        console.log('highlighted');

        prop.value=stri;
	//prop2.value = 'background-color:yellow';
        span.setAttributeNode(prop);
        //span.setAttributeNode(prop2);
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
}*/
function tag_function()
{
    //if(cnt%2==1)
    //{
    console.log("remove new hidden");
    var temp=document.getElementById("page_wrap_new");
    console.log(temp);
    document.getElementById("page_wrap").removeAttribute("hidden");
    //}
    //else
    //{
    if(document.getElementById("page_wrap_new").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
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
    
 
}
