function store_changes()
{
	console.log("outside func");
	var jsonStr;
	var obj = { "change" : [
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":17,"start_offset":4,"end_offset":13,"tagName":"underline"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":20,"start_offset":0,"end_offset":3,"tagName":"heading"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":14,"start_offset":22,"end_offset":29,"tagName":"courier"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":18,"start_offset":34,"end_offset":58,"tagName":"www.abc.com"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":11,"start_offset":59,"end_offset":67,"tagName":"yellow"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":19,"start_offset":78,"end_offset":87,"tagName":"bold"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":'rtag',"start_offset":88,"end_offset":93,"tagName":"date"},
    {"xpath":"//*[@id='main']/p[1]","url":"http://www.w3schools.com/sql/sql_join_left.asp#","func_triggered":'rtag',"start_offset":112,"end_offset":121,"tagName":"event-name"}]
            }
	var jsonStr = JSON.stringify(obj);
	//console.log(jsonStr);
	//var xhr = new XMLHttpRequest();
  	//xhr.open("POST", "//localhost:5000/framework", true); // replace localhost afterwards.
  	//xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  	//xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  	//xhr.send(JSON.stringify({"jsonStr":jsonStr}));
	
	//xhr.onreadystatechange = processRequest;

  	//function processRequest(e)
  	//{
    		//if (xhr.readyState == 4)
    		//{
      		//console.log('saving done');
      		//phonetic_trans = xhr.responseText;
    		//}
  	//}
	window.alert(jsonStr);
}
