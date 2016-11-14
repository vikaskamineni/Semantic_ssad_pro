var $j = jQuery.noConflict();

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
  console.log("retrieving starts");
  var jsonstr;
  var xhr = new XMLHttpRequest();
  //var phonetic_tran = "Default_value";
  xhr.open("GET", "//localhost:5000/framework", true); // replace localhost afterwards.
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onreadystatechange = processRequest;

  function processRequest(e)
  {
    if (xhr.readyState == 4)
    {
      console.log('pho trans set');
      jsonstr = xhr.responseText;
    }
  }
  var obj = JSON.parse(jsonStr);
  console.log(obj);
  var j=0;
  while(obj['change'][j]!=null)
  {
      console.log("retrieving continues orderly");
      var xpath = obj['change'][j].xpath;
      console.log(xpath);
      var start_offset = obj['change'][j].start_offset;
      console.log(start_offset);
      var end_offset = obj['change'][j].end_offset;
      console.log(end_offset);
      //var length = start_offset - end_offset;
      var anno_btn = obj['change'][j].func_triggered;
      console.log(anno_btn);
      var tagName = obj['change'][j].tagName;
      console.log(tagName);
      var ele = anno_getElementByXpath(xpath);
      console.log(ele);
      if (anno_btn == 1)
      {
        console.log("retrieving tagger changes");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span property=tagName >" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 2)
      {
        console.log("retrieving language_trans changes");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span property=tagName id=tagName>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });  
        var stri = retVal.getElementById(tagName).innerHTML;
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
        retVal.getElementById(tagName).innerHTML = language_trans;
        ele.innerHTML = retVal;
      }
      if (anno_btn == 3)
      {
        console.log("retrieving phonetic_trans");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span property=tagName id=tagName>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });  
        var stri = retVal.getElementById(tagName).innerHTML;  
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
              phonetic_trans = "default_value";
              window.clearInterval(timer);
            }
            else
            {
              console.log("returned without change");
            }
          }
          ,3
        );
        retVal.getElementById(tagName).innerHTML = phonetic_trans;
        ele.innerHTML = retVal;
      }
      if (anno_btn == 11)
      {
        console.log("retrieving bg_yellow color");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='background-color:yellow'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 12)
      {
        console.log("retrieving bg_red color");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='background-color:red'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 13)
      {
        console.log("retrieving italics arial");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='font-family:arial'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 14)
      {
        console.log("retrieving italics courier");  
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='font-family:courier'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 15)
      {
        console.log("retrieving italics Helvetica");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='font-family:Helvetica'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 16)
      {
        console.log("retrieving italics Times");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style='font-family:Times'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 17)
      {
          console.log("retrieving underline changes");
          var retVal;
          $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style= 'text-decoration:underline' >" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
          });
          ele.innerHTML = retVal;
      }
      if (anno_btn == 18)
      {
        console.log("retrieving convtohref");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<a style='text-color:blue' href=tagName>" + oldHtml.slice(spanStart, spanStop) + "</a>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 19)
      {
        console.log("retrieving bold");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span style = 'font-weight:bold'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if (anno_btn == 20)
      {
        console.log("retrieving header");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<h1>" + oldHtml.slice(spanStart, spanStop) + "</h1>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if(tagName == "event-date-startdate"|| tagName == "event-date-enddate" || tagName == "event-location-street" ||tagName == "event-location-area" ||tagName == "event-location-city" ||tagName == "organization-owner" ||tagName == "organisation-employee" ||tagName == "organization-contact" ||tagName == "organization-location-street" ||tagName == "organization-location-area" ||tagName == "organization-location-city" || tagName == "person-name-firstname" ||tagName == "person-name-secondname" ||tagName == "person-address-street" ||tagName == "person-address-city" || tagName == "person-address-area" || tagName == "person-contact" || tagName == "date-startdate" || tagName == "date-enddate" || tagName == "currency-rupee" || tagName == "currency-dollar" || tagName == "currency-euro" || tagName == "unit-si" || tagName == "unit-cgi" || tagName == "unit-fps")
      {
        console.log("retrieving rtag changes");
        var retVal;
        $j(ele).html(function(i,oldHtml) {
              var i, c, spanStart, spanStop;
              for (i = 0, c = 0; i < oldHtml.length; i++) {
                  if (c === start_offset)
                     spanStart = i;
                  else if (c === end_offset) {
                     spanStop = i;
                     break;
                  }
                  if (oldHtml.charAt(i) === "<"){
                     while (++i < oldHtml.length && oldHtml.charAt(i) != ">" && oldHtml.charAt(i+1) != "<");
                  }else
                     c++;
              }        
              if (spanStart === undefined)
                 return oldHtml;
              if (spanStop === undefined)
                 spanStop = oldHtml.length;
              retVal = oldHtml.slice(0, spanStart) +
                     "<span property=tagName >" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      
      
    j = j + 1;
  }
}
