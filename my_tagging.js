function tagging_function(stri1,stri2)
{
    var span = document.createElement("span");
    var prop1 = document.createAttribute("property");
    var prop2 = document.createAttribute("style");

    if (window.getSelection().toString().length!=0)
    {
        console.log('highlighted');
        //tagName = prompt('tagName');
        //tagInfo = prompt('tagInfo');
        prop2.value = stri1;
        prop1.value = stri2;
        console.log(stri2);
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
function conv_to_href()
{
    var span=document.createElement("span");
    var prop = document.createAtrribute("class");
    
    if (window.getSelection().toString().length!=0)
    {
        prop.value="myclass";
        span.setAttributeNode(prop);
        var sel = window.getSelection();
        if (sel.rangeCount)
        {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range)
        }
    }
    $(function(){
        $("#btn1").click(function(){
            var elems = $("span.myClass > span");
            elems.each(function(){
                var linkText= $(this).text();
                $("<a/>").attr({"href": linkText, "target": "_blank"}).text(linkText).appendTo("body");
            });
    elems.remove();
        });
    });
}
function bold_tag(stri)
{
    var span = document.createElement("span");
    var prop1 = document.createAttribute("property");
    var prop2 = document.createAttribute("style");

    if (window.getSelection().toString().length!=0)
    {
        console.log('highlighted');
        //tagName = prompt('tagName');
        //tagInfo = prompt('tagInfo');
        prop2.value = "font-weight:bold";
        prop1.value = stri;
        console.log(stri);
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
