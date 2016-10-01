function modify_startdate()
{
 $(document).ready(function(){
    $("[property='date-startdate']").each( function() {
  
    var format = "Do MMM YYYY";

    var $this = $( this );
    var old_date = $.trim($this.text());
    var new_date = moment(old_date , 'YYYY-MM-DD').format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_enddate()
{
 $(document).ready(function(){
    $("[property='date-enddate']").each( function() {
  
    var format = "Do MMM YYYY";

    var $this = $( this );
    var old_date = $.trim($this.text());
    var new_date = moment(old_date , 'YYYY-MM-DD').format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
