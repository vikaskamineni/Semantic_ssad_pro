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
  var obj = JSON.parse(jsonStr);
  var j=0;
  while(obj['change'][j]!=NULL)
  {
      var xpath = obj['change'][j].xpath;
      var start_offset = obj['change'][j].start_offset;
      var end_offset = obj['change'][j].end_offset;
      var anno_btn = obj['change'][j].func_triggered;
      var tagName = obj['change'][j].tagName;
      var ele = anno_getElementByXpath(xpath);
      if (anno_btn == 1)
      {
        //wrapText(ele,start_offset,end_offset-start_offset);
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span property=tagName>" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 2)
      {
        var stri = $j(ele).html(function(i,val) {
          return val.substr(start_offset,end_offset-start_offset);
        });
        var text_to_translate = $j(anno_getElementByXpath(xpath)).html();
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
        var stri = $j(ele).html(function(i,val) {
          return val.substr(start_offset,end_offset-start_offset);
        });
        var text_to_translate = $j(anno_getElementByXpath(xpath)).html();
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
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "background-color:yellow" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 12)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "background-color:red" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 13)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:arial" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 14)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:courier" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 15)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:Helvetica" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 16)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-family:Times" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 17)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "text-decoration:underline" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 18)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<a style = "text-color:blue" href = tagName >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</a>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 19)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span style = "font-wieght:bold" >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      if (anno_btn == 20)
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<h1>" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</h1>" +
                val.substr(end_offset);
        });
      }
      if(tagName == "event-date-startdate"|| tagName == "event-date-enddate" || tagName == "event-location-street" ||tagName == "event-location-area" ||tagName == "event-location-city" ||tagName == "organization-owner" ||tagName == "organisation-employee" ||tagName == "organization-contact" ||tagName == "organization-location-street" ||tagName == "organization-location-area" ||tagName == "organization-location-city" || tagName == "person-name-firstname" ||tagName == "person-name-secondname" ||tagName == "person-address-street" ||tagName == "person-address-city" || tagName == "person-address-area" || tagName == "person-contact" || tagName == "date-startdate" || tagName == "date-enddate" || tagName == "currency-rupee" || tagName == "currency-dollar" || tagName == "currency-euro" || tagName == "unit-si" || tagName == "unit-cgi" || tagName == "unit-fps")
      {
        $j(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span property = tagName >" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }
      
      
    j = j + 1;
  }
}
