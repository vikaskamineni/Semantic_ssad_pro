function anno_audio(xpath)
{
  if (window.getSelection().toString().length!==0) {
    console.log("inside audio");
    var clicked_element = anno_getElementByXpath(xpath);
    var node = document.createElement("audio");
    var prop1 = document.createAttribute("src");
    var prop2 = document.createAttribute("controls");
    var prop3 = document.createAttribute("autoplay");
    var prop4 = document.createAttribute("id");
    var string1 = "https://api.voicerss.org/?key=24041d6a5a6c4f0db89edfbff791e8cb&src=";
    var string2 = window.getSelection().toString();
    var string3 = "&hl=en-in";
    var str = string1.concat(string2,string3);
    prop1.value = str;
    prop4.value = "uniqueid";
    node.setAttributeNode(prop1);
    node.setAttributeNode(prop2);
    node.setAttributeNode(prop3);
    node.setAttributeNode(prop4);
    clicked_element.appendChild(node);
    var node_ele = document.getElementById("uniqueid");
    var fin_xpath = anno_getXpathTo(node_ele);
    document.getElementById("uniqueid").remove();
    
  }
  return fin_xpath;
}

//------------------------------------------------------------------------


function listenOnSelection(){
    anno_btn = 4;
  //main function which will execute other functions
    document.onclick = function(event) {
      console.log("mouse down hello");
      event.preventDefault();
      if (event === undefined) {
        event = window.event;
      } // for IE
      var target = 'target' in event ? event.target : event.srcElement; // for IE
      var root = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
      var xpath = anno_getXpathTo(target);
      console.log(xpath);
      var ele = anno_getElementByXpath(xpath);
      console.log(ele);
      var final_xpath = anno_audio(xpath);
      var currentLocation = window.location.href;
      var obj = JSON.parse(jsonStr);
      obj['change'].push({"xpath":final_xpath,"url":currentLocation,"func_triggered":anno_btn});
      jsonStr = JSON.stringify(obj);
      console.log("inside func");
      console.log(jsonStr);
    };
}
