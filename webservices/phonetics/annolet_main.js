var phonetic_trans = "default_value";
var language_trans = "default_value";

function get_phonetics(str){

  var xhr = new XMLHttpRequest();
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

}




//function for getting phonetic
function anno_phonetic(xpath) {
  clicked_element = anno_getElementByXpath(xpath);
  if (clicked_element.id == "mark" || clicked_element.id == "annolet") {
      console.log('not permitted');
  }
  else {
    //if element is already translated
  if (anno_getElementByXpath(xpath).id != "phonetic" || !(anno_getElementByXpath(xpath).id)) {
    var text_to_translate = $j(anno_getElementByXpath(xpath)).html();
    get_phonetics(text_to_translate);
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
      ,1000
    );
  }
  else {
        console.log('already translated');
    }
  }
}

//------------------------------------------------------------------------



//main function which will execute other functions
function run_phoneticConversion() {
    document.onclick = function(event) {
        if (event === undefined) {
            event = window.event;
        } // for IE
        var target = 'target' in event ? event.target : event.srcElement; // for IE
        var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
        var xpath = anno_getXpathTo(target);
        anno_phonetic(xpath);
        
    };
}

