var $j = jQuery.noConflict();

function wrapText(elem, start, length, tagName ,st) {
    var before = elem.textContent.substr(0, start);
    var after = elem.textContent.substr(start + length, elem.textContent.length - length);
    var letters = elem.textContent.substr(start, length);
    elem.innerHTML = '';
    var text1=document.createTextNode(before);
    var text2=document.createElement('span');
    var prop1 = document.createAttribute('property');
    var prop2 = document.createAttribute('style');
    var text3=document.createTextNode(after);
    prop1.value = tagName;
    prop2.value = st;
    text2.setAttributeNode(prop1);
    text2.setAttributeNode(prop2);
    text2.innerHTML = letters;
    elem.appendChild(text1);
    elem.appendChild(text2);
    elem.appendChild(text3);
}

function wrapa(elem , start, length, tagName, st) {
    var before = elem.textContent.substr(0, start);
    var after = elem.textContent.substr(start + length, elem.textContent.length - length);
    var letters = elem.textContent.substr(start, length);
    elem.innerHTML = '';
    var text1=document.createTextNode(before);
    var text2=document.createElement('a');
    //var prop1 = document.createAttribute('property');
    //var prop2 = document.createAttribute('style');
    var text3=document.createTextNode(after);
    //text2.property = tagName;
    text2.style = st;
    text2.href = tagName;
    //text2.setAttributeNode(prop1);
    //text2.setAttributeNode(prop2);
    text2.innerHTML = letters;
    elem.appendChild(text1);
    elem.appendChild(text2);
    elem.appendChild(text3);
}
function wrapheading(elem , start, length, tagName, st) {
    var before = elem.textContent.substr(0, start);
    var after = elem.textContent.substr(start + length, elem.textContent.length - length);
    var letters = elem.textContent.substr(start, length);
    elem.innerHTML = '';
    var text1=document.createTextNode(before);
    var text2=document.createElement('h1');
    //var prop1 = document.createAttribute('property');
    //var prop2 = document.createAttribute('style');
    var text3=document.createTextNode(after);
    //text2.property = tagName;
    //text2.style = st;
    //text2.href = tagName;
    //text2.setAttributeNode(prop1);
    //text2.setAttributeNode(prop2);
    text2.innerHTML = letters;
    elem.appendChild(text1);
    elem.appendChild(text2);
    elem.appendChild(text3);
}
function get_languagetrans(str,fr,to){

  var xhr = new XMLHttpRequest();
  var language_trans = "default_value";
  xhr.open("POST", "//localhost:5000/language-translive", true); // replace localhost afterwards
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify({"sentence":str,"from-language":fr,"to-language":to}));

  xhr.onreadystatechange = processRequest;

  function processRequest(e)
  {
    if (xhr.readyState == 4)
    {
      console.log('language trans set');
      language_trans = xhr.responseText;
    }
  }
  return language_trans;

}

function get_phonetics(str){

  var xhr = new XMLHttpRequest();
  var phonetic_tran = "Default_value";
  xhr.open("POST", "//localhost:5000/phonetic-trans", true); // replace localhost afterwards.
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify({"sentence":str}));


  xhr.onreadystatechange = processRequest;

  function processRequest(e)
  {
    if (xhr.readyState == 4)
    {
      console.log('pho trans set');
      phonetic_trans = xhr.responseText;
    }
  }
  return phonetic_trans;
}

function retrieve_changes()
{
  var obj = JSON.parse(jsonStr);
  var j=0;
  while(obj['change'][j]!=null)
  {
      var xpath = obj['change'][j].xpath;
      var start_offset = obj['change'][j].start_offset;
      var end_offset = obj['change'][j].end_offset;
      var length = start_offset - end_offset;
      var anno_btn = obj['change'][j].func_triggered;
      var tagName = obj['change'][j].tagName;
      var ele = anno_getElementByXpath(xpath);
      if (anno_btn == 1)
      {
        wrapText(ele, start_offset, length, tagName ,null);
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span property=tagName>" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 2)
      {
        wrapText(ele, start_offset, length, tagName ,null);
        var stri = $j(ele).html(function(i,val) {
          return val.substr(start_offset,end_offset-start_offset);
        });
        var text_to_translate = stri;
        var language_trans = get_languagetrans(text_to_translate,'en','hi');
        var timer = window.setInterval
        (
          function ()
          {
            if(typeof language_trans !== "default_value")
            {
              console.log("text changing");
              $j(anno_getElementByXpath(xpath)).text(language_trans);
              language_trans = "default_value";
              window.clearInterval(timer);
            }
            else
            {
              console.log("returned without change");
            }
          }
          ,3
        );
      }
      if (anno_btn == 3)
      {
        wrapText(ele, start_offset, length, tagName ,null);
        var stri = $j(ele).html(function(i,val) {
          return val.substr(start_offset,end_offset-start_offset);
        });
        var text_to_translate = stri;
        var phonetic_trans = get_languagetrans(text_to_translate,'en','hi');
        var timer = window.setInterval
        (
          function ()
          {
            if(typeof phonetic_trans !== "default_value")
            {
              console.log("text changing");
              $j(anno_getElementByXpath(xpath)).text(phonetic_trans);
              language_trans = "default_value";
              window.clearInterval(timer);
            }
            else
            {
              console.log("returned without change");
            }
          }
          ,3
        );
      }
      if (anno_btn == 11)
      {
        wrapText(ele, start_offset, length, tagName ,"background-color:yellow");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "background-color:yellow" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 12)
      {
        wrapText(ele, start_offset, length, tagName ,"background-color:red");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "background-color:red" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 13)
      {
        wrapText(ele, start_offset, length, tagName ,"font-family:arial");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:arial" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 14)
      {
        wrapText(ele, start_offset, length, tagName ,"font-family:courier");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:courier" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 15)
      {
        wrapText(ele, start_offset, length, tagName ,"font-family:Helvetica");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:Helvetica" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 16)
      {
        wrapText(ele, start_offset, length, tagName ,"font-family:Times");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:Times" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 17)
      {
        wrapText(ele, start_offset, length, tagName ,"text-decoration:underline");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "text-decoration:underline" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 18)
      {
        wrapText(ele, start_offset, length, tagName ,"text-color:blue");  
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<a style = "text-color:blue" href = tagName >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</a>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 19)
      {
        wrapa(ele, start_offset, length, tagName ,"font-weight:bold");
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-wieght:bold" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      if (anno_btn == 20)
      {
        wrapheading(ele, start_offset, length, tagName ,null);  
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<h1>" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</h1>" +
                val.substr(end_offset);
        });*/
      }
      if(tagName == "event-date-startdate"|| tagName == "event-date-enddate" || tagName == "event-location-street" ||tagName == "event-location-area" ||tagName == "event-location-city" ||tagName == "organization-owner" ||tagName == "organisation-employee" ||tagName == "organization-contact" ||tagName == "organization-location-street" ||tagName == "organization-location-area" ||tagName == "organization-location-city" || tagName == "person-name-firstname" ||tagName == "person-name-secondname" ||tagName == "person-address-street" ||tagName == "person-address-city" || tagName == "person-address-area" || tagName == "person-contact" || tagName == "date-startdate" || tagName == "date-enddate" || tagName == "currency-rupee" || tagName == "currency-dollar" || tagName == "currency-euro" || tagName == "unit-si" || tagName == "unit-cgi" || tagName == "unit-fps")
      {
        wrapText(ele, start_offset, length, tagName ,null);
        /*$j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span property = tagName >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });*/
      }
      
      
    j = j + 1;
  }
}
