/*
 AUTHOR: Raghav Mittal
 email: raghavmittal101@gmail.com
*/
//
// annolet.metafile = {
//   fileCSS: null,  // CSS file to be injected
//   HTMLParentTagName: "body",  // tag name under which new HTML tag will be appended
//   HTMLParentTagNameIndex: 0, // index of the tag if there are multiple tags of same name
//   newTagName: null, // name of new tag to be created
//   newTagId: null,
//   newTagClass: null,
//	 innerHTMLFile: null, // path to HTML file
//   innerHTMLText: "", // if path not available. (deapriciated)
//   fileJS: "#", // javascript file to be injected
//   JSParentTagName: "head", // tag name under which new HTML tag will be appended
//   JSParentTagNameIndex: 0,
//   menuButtonName: null, // name of button which will be created in annolet interface
//   eventOnClick: null, // function to be called when user clicks dom element. to pass xpath through this function. pass "annolet.xpath"
// }

var $j = jQuery.noConflict();

var annolet = {}; //namespace

annolet.getJSON = function(){
      /*
        This function is for getting json from server and loading it to
        frontend. it will help us in calling webservices to from using
        manifest file JSON file.
      */
      var pathJSON = "https://rawgit.com/vikaskamineni/Semantic_ssad_pro/master/manifest.json"+ "?v=" + parseInt(Math.random() * 999);
      console.log("fup");
	
      $j.ajaxSetup({
	      async: false
	      )};
      $j.getJSON(pathJSON, function(json) {
          annolet.metafile = json;
	  console.log("entered");
	  console.log(annolet.metafile);
	  $j(window.annolet.metafile).load(function(){
		      console.log("sol2");
		      annolet.connectWebservices();
		      annolet.createUI();});
      });
	$j.ajaxSetup({
	     async: true
	     )};
      console.log("fdec");
  };

annolet.connectWebservices = function() {
    console.log("continues");
    var services = annolet.metafile.services;
    console.log("end");
    for(var i = 0; i < services.length; i++) {
        services[i].id = i + 1; // reserving 0 for exit.
        if (services[i].fileCSS !== null) {
            annolet.inject.injectCSS(services[i]);
            console.log("injectedCSS");
        }
        if (services[i].innerHTMLText !== null || services[i].innerHTMLFile !== null) {
            annolet.inject.injectHTML(services[i]);
            console.log("injectedHTML");
        }
        if (services[i].fileJS !== null) {
            annolet.inject.injectJS(services[i]);
            console.log("injectedJS");
        }
        if (services[i].menuButtonName !== null) {
            annolet.createButtons(services[i]);
            console.log("buttons done");
        }
    }
};

annolet.inject = {};

annolet.inject.injectCSS = function(service) {
  var link = document.createElement('link');
  // using rawgit.com MaxCDN.. files directly linked to git repo 'annoletjs/master'
  link.href = service.fileCSS; //random version number removed bcoz some browser take it as text file and not as CSS.
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName('head')[0].appendChild(link);
};

annolet.inject.injectHTML = function(service) {
// HTMLParentTagName: name of parent node (required, when you want to add HTML else leave this null)
// HTMLParentTagNameIndex: index of parent node under which new element will be created(required, when you want to add HTML else leave this null)(default: null)
// newTagName: name of new child node to be created(required, when you want to add HTML else leave this null)(default: null)
// newTagId: id of newTagName (optional)(default: NULL)
// newTagClass: className of newTagName (optional)(default: NULL)
// innerHTMLFile: path to html file to be inserted into DOM. (required if innerHTMLText is not provided, when you want to add HTML else leave this null)
//innerHTMLText: If you dont have saparate file for HTML, directly add HTML here in single string form, without spaces. (deapriciated)(its better to provide HTML Text inside your JS file)
// if you dont want to add new child, then dont provide newTagId, newTagName, newTagClass

    var parent = document.getElementsByTagName(service.HTMLParentTagName)[service.HTMLParentTagNameIndex]; // if newTagName is given, else append innerHTML to body.
    if (service.newTagName !== null) {
        var tagName = document.createElement(service.newTagName);
        if (service.newTagId !== null) {
            tagName.id += " " + service.newTagId;
        }
        if (service.newTagClass !== null) {
            tagName.className += service.newTagClass;
        }
        if(service.innerHTMLFile !== null && service.innerHTMLText === null ){
            $j.ajax({ url: service.innerHTMLFile, success: function(data) { 
                tagName.innerHTML = data;
                parent.appendChild(tagName);
                console.log("injectingHTML");
                } 
            });
        }
        else if(service.innerHTMLFile === null && service.innerHTMLText !== null){
             tagName.innerHTML = service.innerHTMLText;
             parent.appendChild(tagName);
             console.log("injectingHTML");
        }

    } 
    else {
        if(service.innerHTMLFile !== null && service.innerHTMLText === null ){
            $j.ajax({ url: service.innerHTMLFile, success: function(data) { 
                parent.innerHTML += "\n" + data;
                console.log("injectingHTML");
                } 
            });
        }
        else if(service.innerHTMLFile === null && service.innerHTMLText !== null){
            parent.innerHTML += "\n" + service.innerHTMLText;
            console.log("injectingHTML");
        }
    }
};

annolet.inject.injectJS = function(service) {
  // JSParentTagName(required, if you want to add JS to DOM else leave empty)(defaut: null)
  // JsParentTagNameIndex(required, if you want to add JS to DOM else leave empty)(default: null)
  // jsLocation(required, if you want to add JS to DOM else leave empty)(default: null)

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = service.fileJS;
    document.getElementsByTagName(service.JSParentTagName)[service.JSParentTagNameIndex].appendChild(script);
    console.log("injectingJS");
};

annolet.buttonHTML = "";
annolet.createButtons = function(service) {
    annolet.buttonHTML += "<li id='annolet' class=annolet-tools-menu-item onclick=" + service.eventOnClick + ">" + service.menuButtonName + "</li>";
    console.log("butons created");
};
annolet.createUI = function(){
  var menuUI = annolet.metafile.initial[0];
  menuUI.innerHTMLText = "<ul id='annolet' class=annolet-tools-menu><span id='annolet' style='border-radius:10px; color:orange;font-weight:bold;font-family:monospace; font-size:1.3em'>AnnoLet!</span><span id='annolet' style='color:grey;'>|</span>"+ annolet.buttonHTML +"<li id='annolet' class=annolet-tools-menu-item id=annolet-exit-btn >exit</li></ul>";
  annolet.inject.injectCSS(menuUI);
  annolet.inject.injectHTML(menuUI);
  annolet.inject.injectJS(menuUI);
  console.log("ui created");
};

/* this function waits until JSON is completely loaded to avoid error */
annolet.run = function(){
	annolet.getJSON();
	console.log("sol1");
	console.log(annolet.metafile);
	
}

annolet.run();
