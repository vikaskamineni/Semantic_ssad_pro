function modify_startdate()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "Do MMM YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date , 'YYYY-MM-DD').format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_enddate()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "Do MMM YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date , 'YYYY-MM-DD').format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
