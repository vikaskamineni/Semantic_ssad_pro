function store_changes()
{
	console.log("outside func");
	console.log(jsonStr);
	data = {};
	data['url'] = window.location.href;
	data['json'] = jsonStr;
	$.post("http://54.71.184.131/save.php",data,function(data,status)
	{
		alert('Success');
		alert(data);
	}
		);
	window.alert(jsonStr);
}
