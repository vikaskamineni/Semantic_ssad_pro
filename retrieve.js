function retrieve_changes()
{
  var obj = JSON.parse(jsonStr);
  var i=0;
  while(obj['change'][i]!=NULL)
  {
      var xpath = obj['change'][i].xpath;
      var start_offset = obj['change'][i].start_offset;
      var end_offset = obj['change'][i].end_offset;
      var anno_btn = obj['change'][i].func_triggered;
      var tagName = obj['change'][i].tagName;
      var ele = anno_getElementByXpath(xpath);
      if (anno_btn == 1)
      {
        //wrapText(ele,start_offset,end_offset-start_offset);
        $(ele).html(function(i,val) {
          return val.substr(0,start_offset) +
                "<span property=tagName>" +
                val.substr(start_offset,end_offset-start_offset ) +
                "</span>" +
                val.substr(end_offset);
        });
      }      
  }

}
