//var $j = jQuery.noConflict();

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
function tag_function()
{
    //if(cnt%2==1)
    //{
    console.log("remove new hidden");
    var temp=document.getElementById("page_wrap_new");
    console.log(temp);
    document.getElementById("page_wrap_new").removeAttribute("hidden");
    //}
    //else
    //{
    if(document.getElementById("page-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("page-wrap").setAttribute("hidden",true);
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

function change_font(stri1,stri2)
{
    anno_btn = 11;
    var span = document.createElement("span");
    var prop1 = document.createAttribute("style");
    var prop2 = document.createAttribute("property");
    var span_id = document.createAttribute("id");
    ID = ID + 1; 
    if (window.getSelection().toString().length!=0)
    {
        prop2.value = stri1;
        prop1.value = stri2;
        span_id.value = ID;
        span.setAttributeNode(prop2);
        span.setAttributeNode(prop1);
        span.setAttributeNode(span_id);
        var sel = window.getSelection();
        if(sel.rangeCount){
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    var span_ele = document.getElementById(ID);
    var fin_xpath = anno_getXpathTo(span_ele);
    var currentLocation = window.location.href;
    var obj = JSON.parse(jsonStr);
    obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
    jsonStr = JSON.stringify(obj);
    console.log("inside func");
    console.log(jsonStr);
}


function underline() {
    anno_btn = 12;
    var span = document.createElement("span");   
    var prop = document.createAttribute("style"); 
    var span_id = document.createAttribute("id");
    ID = ID + 1;

    if (window.getSelection().toString().length!=0)  
    {       
        prop.value="text-decoration:underline";
        span_id.value = ID;
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
    var span_ele = document.getElementById(ID);
    var fin_xpath = anno_getXpathTo(span_ele);
    var currentLocation = window.location.href;
    var obj = JSON.parse(jsonStr);
    obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
    jsonStr = JSON.stringify(obj);
    console.log("inside func");
    console.log(jsonStr);
}


function conv_to_href()
{
    anno_btn = 13;
    //var span=document.createElement("span");
    //var prop = document.createAtrribute("class");
    var link = document.createElement("a");
    //var prop = document.createElement("href");
    ID = ID + 1;
    if (window.getSelection().toString().length!=0)
    {
        //prop.value="myclass";
        //span.setAttributeNode(prop);
        www=prompt("Enter the link");
        //span_id.value = ID;
        link.setAttribute('href',www);
        link.setAttribute('style','color:blue');
        link.id = ID;
        link.className="myClass";
        document.getElementsByClassName('myClass').onmouseover=function()
        {
            this.style.backgroundColor = "green";
        }
        //prop.value=www;
        //link.setAttributeNode(prop);
        var sel = window.getSelection();
        if (sel.rangeCount)
        {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(link);
            sel.removeAllRanges();
            sel.addRange(range)
        }
    }
    var link_ele = document.getElementById(ID);
    var fin_xpath = anno_getXpathTo(link_ele);
    var currentLocation = window.location.href;
    var obj = JSON.parse(jsonStr);
    obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
    jsonStr = JSON.stringify(obj);
    console.log("inside func");
    console.log(jsonStr);
    /*$j(function(){
        $j("#btn1").click(function(){
            var elems = $j("span.myClass > span");
            elems.each(function(){
                var linkText= $j(this).text();
                $j("<a/>").attr({"href": linkText, "target": "_blank"}).text(linkText).appendTo("body");
            });
    elems.remove();
        });
    });*/
}
function header_func(stri1,stri2)
{
    anno_btn = 14;
    var head=document.createElement(stri1);
    ID = ID + 1;
    //var head_id = document.createAtrribute("property");
    if (window.getSelection().toString().length!=0)
    {
       // prop.value=stri2;
        //head.setAttribute(prop);
        head.property=stri2;
        head.id = ID;
        var sel = window.getSelection();
        if (sel.rangeCount)
        {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(head);
            sel.removeAllRanges();
            sel.addRange(range)
        }
    }
    var head_ele = document.getElementById(ID);
    var fin_xpath = anno_getXpathTo(head_ele);
    var currentLocation = window.location.href;
    var obj = JSON.parse(jsonStr);
    obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
    jsonStr = JSON.stringify(obj);
    console.log("inside func");
    console.log(jsonStr);
}
function bold_tag(stri)
{
    anno_btn = 15;
    var span = document.createElement("span");
    var prop1 = document.createAttribute("property");
    var prop2 = document.createAttribute("style");
    var span_id = document.createAttribute("id");
    ID = ID + 1;
    if (window.getSelection().toString().length!=0)
    {
        console.log('highlighted');
        //tagName = prompt('tagName');
        //tagInfo = prompt('tagInfo');
        prop2.value = "font-weight:bold";
        prop1.value = stri;
        span_id.value = ID;
        console.log(stri);
        span.setAttributeNode(prop2);
        span.setAttributeNode(prop1);
        span.setAttributeNode(span_id);
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    var span_ele = document.getElementById(ID);
    var fin_xpath = anno_getXpathTo(span_ele);
    var currentLocation = window.location.href;
    var obj = JSON.parse(jsonStr);
    obj['change'].push({"xpath":fin_xpath,"url":currentLocation,"func_triggered":anno_btn});
    jsonStr = JSON.stringify(obj);
    console.log("inside func");
    console.log(jsonStr);
}
