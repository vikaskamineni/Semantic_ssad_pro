function modify_startdate_americanC()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "MMMM Do, YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_startdate_britishA()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "Do MMMM YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}  
function modify_startdate_britishB()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "DD-MM-YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_startdate_americanA()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "MM-DD-YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
} 
function modify_startdate_americanB()
{
 $j(document).ready(function(){
    $j("[property='date-startdate']").each( function() {
  
    var format = "MMMM DD, YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD, YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}  
//-----------------------------------------------------------

function modify_enddate_americanC()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "MMMM Do, YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_enddate_britishA()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "Do MMMM YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}  
function modify_enddate_britishB()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "DD-MM-YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_enddate_americanA()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "MM-DD-YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
} 
function modify_enddate_americanB()
{
 $j(document).ready(function(){
    $j("[property='date-enddate']").each( function() {
  
    var format = "MMMM DD, YYYY";

    var $this = $j( this );
    var old_date = $j.trim($this.text());
    var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD, YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );

    $this.text($this.text().replace(old_date, new_date));
  });
  });
}  

