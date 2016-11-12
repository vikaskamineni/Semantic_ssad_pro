function func_tagging(stri)
{
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
        var span = document.createElement("span");
        var prop = document.createAttribute("property");
        if (window.getSelection().toString().length!==0) {    
            console.log('highlighted');

            prop.value=stri;
            span.setAttributeNode(prop);
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                range.surroundContents(span);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
        var sel = window.getSelection();
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
            obj['change'].push({"xpath":xpath,"url":currentLocation,"func_triggered":anno_btn,"start_offset":start,"end_offset":end});
        }
        jsonStr = JSON.stringify(obj);
        console.log("inside func");
        console.log(jsonStr);
    };
}

function toggle_tagging()
{
  console.log("remove new hidden");
    var temp=document.getElementById("page_wrap");
    console.log(temp);
    document.getElementById("page_wrap").removeAttribute("hidden");
    //}
    //else
    //{
    if(document.getElementById("page-wrap-new").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("page-wrap-new").setAttribute("hidden",true);
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
