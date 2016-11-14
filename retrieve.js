//var $j = jQuery.noConflict();

/*function get_languagetrans(str,fr,to){

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
}*/

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
  /*var obj = { "change" : [
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":17,"start_offset":4,"end_offset":13,"tagName":"underline"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":20,"start_offset":0,"end_offset":3,"tagName":"heading"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":14,"start_offset":22,"end_offset":29,"tagName":"courier"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":18,"start_offset":34,"end_offset":58,"tagName":"www.abc.com"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":11,"start_offset":59,"end_offset":67,"tagName":"yellow"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":19,"start_offset":78,"end_offset":87,"tagName":"bold"}]
            }*/
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
                     "<span property='" + tagName + "'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        }); 
        ele.innerHTML = retVal;
        var stri = ele.querySelectorAll('span[property = tagName]');
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
        ele.getAttribute(tagName).innerHTML = language_trans;
        
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
                     "<span property='" + tagName+ "'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
        var stri = ele.querySelectorAll('span[property = tagName]'); 
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
        ele.getAttribute(tagName).innerHTML = phonetic_trans;
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
        console.log(tagName);
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
                     "<a style='color:blue' href= '" + tagName + "'>" + oldHtml.slice(spanStart, spanStop) + "</a>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
        //ele.getElementsByTagName('a').href = tagName;
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
      if(tagName == "event-name"|| tagName = "event-location-street" ||tagName == "event-location-area" ||tagName == "event-location-city" ||tagName == "organization-owner" ||tagName == "organisation-employee" ||tagName == "organization-contact" ||tagName == "organization-location-street" ||tagName == "organization-location-area" ||tagName == "organization-location-city" || tagName == "person-name-firstname" ||tagName == "person-name-secondname" ||tagName == "person-address-street" ||tagName == "person-address-city" || tagName == "person-address-area" || tagName == "person-contact" || tagName == "date" || tagName == "currency-rupee" || tagName == "currency-dollar" || tagName == "currency-euro" || tagName == "unit-si" || tagName == "unit-cgi" || tagName == "unit-fps")
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
              //var string = tagName.toString();
              retVal = oldHtml.slice(0, spanStart) +
                     "<span property='" + tagName + "'>" + oldHtml.slice(spanStart, spanStop) + "</span>" +
                     oldHtml.slice(spanStop);
              //alert("New html: \n\n" + retVal);
              return retVal;
              
        });
        ele.innerHTML = retVal;
      }
      if(anno_btn == 'modify-to-americanC')
      {
        $j("[property='date']").each( function() {
          
          var format = "MMMM Do, YYYY";
          var $this = $j(this);
          var old_date = $j.trim($this.text());
          var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD, YYYY", "MMMM DD YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
          $this.text($ths.text().replace(old_date, new_date));
        });
      }
      if(anno_btn == 'modify-to-britishA')
      {
        $j("[property='date']").each( function() {
          
          var format = "Do MMMM YYYY";
          var $this = $j(this);
          var old_date = $j.trim($this.text());
          var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
          $this.text($ths.text().replace(old_date, new_date));
        });
      }
      if(anno_btn == 'modify-to-americanA')
      {
        $j("[property='date']").each( function() {
          
          var format = "MM-Do-YYYY";
          var $this = $j(this);
          var old_date = $j.trim($this.text());
          var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
          $this.text($ths.text().replace(old_date, new_date));
        });
      }
      if(anno_btn == 'modify-to-americanB')
      {
        $j("[property='date']").each( function() {
          
          var format = "MMMM DD, YYYY";
          var $this = $j(this);
          var old_date = $j.trim($this.text());
          var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
          $this.text($ths.text().replace(old_date, new_date));
        });
      }
      if(anno_btn == 'modify-to-cgi')
      {
        $j("[property='unit']").each( function() {
          
          var $this = $(this);
                var inp=$this.text();

                var con=inp.match(/[a-z,A-Z]+/);


                if(con=="m")
                {
                    var out=100*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="meters")
                {
                    var out=100*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="Km")
                {
                    var out=100000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                }
                else if(con=="kms")
                {
                    var out=100000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=100000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="ft")
                {
                    var out=(30.48)*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="foot")
                {
                    var out=30.48*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));
                }
        });
      }
      if(anno_btn == 'modify-to-fps')
      {
        $("[property='unit']").each( function() {
          var $this = $(this);
                var inp=$this.text();

                var con=inp.match(/[a-z,A-Z]+/);


                if(con=="cm")
                {
                    var out=(parseFloat(inp,10))/(30.48);
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="centimeters")
                {
                    var out=(parseFloat(inp,10))/30.48;
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="Km")
                {
                    var out=3280.84*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kms")
                {
                    var out=3280.84*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=3280.84*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="m")
                {
                    var out=(parseFloat(inp,10))/0.3048;
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="meters")
                {
                    var out=(parseFloat(inp,10))/0.3048;
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));
                }
        });
      }
      if(anno_btn == 'modify-to-SI')
      {
        $("[property='unit']").each( function() {
          var $this = $(this);
                var inp=$this.text();

                var con=inp.match(/[a-z,A-Z]+/);


                if(con=="cm")
                {
                    var out=(parseFloat(inp,10))/100;
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));
                }
                else if(con=="centimeters")
                {
                    var out=(parseFloat(inp,10))/100;
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="Km")
                {
                    var out=1000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kms")
                {
                    var out=1000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=1000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));
                }
                if(con=="ft")
                {
                    var out=(0.3048)*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="foot")
                {
                    var out=0.3048*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));
                }
        });
      }            
      j = j + 1;
  }
}
