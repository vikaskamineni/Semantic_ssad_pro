function store_changes()
{
	console.log("outside func");
	var jsonStr = JSON.stringify(obj);
	console.log(jsonStr);
	var xhr = new XMLHttpRequest();
  	xhr.open("POST", "//localhost:5000/framework", true); // replace localhost afterwards.
  	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  	xhr.send(JSON.stringify({"jsonStr":jsonStr}));
	
	xhr.onreadystatechange = processRequest;

  	function processRequest(e)
  	{
    		if (xhr.readyState == 4)
    		{
      		console.log('saving done');
      		phonetic_trans = xhr.responseText;
    		}
  	}
	window.alert(jsonStr);
}
