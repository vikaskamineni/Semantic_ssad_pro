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
function modify_unit_SI()
{
$(document).ready(function(){
     $("[property='unit']").each( function() {
  
  
    
     var $this = $(this);
     var inp=$this.text();
      
     var con=inp.match(/[a-z,A-Z]+/);
      
  
      if(con=="cm")
      {
      var out=(parseFloat(inp,10))/100;
      var ans;
      ans=out+" "+"m";
        $this.text($this.text().replace(inp,ans));

      }
      else if(con=="centimeters")
      {
      var out=(parseFloat(inp,10))/100;
      var ans;
      ans=out+" "+"m";
        $this.text($this.text().replace(inp,ans));
      }
      if(con=="ft")
      {
        var out=(0.3048)*(parseFloat(inp,10));
        var ans;
        ans=out+" "+"m";
          $this.text($this.text().replace(inp,ans));

      }
      else if(con=="foot")
      {
        var out=0.3048*(parseFloat(inp,10));
        var ans;
        ans=out+" "+"m";
          $this.text($this.text().replace(inp,ans));
      }
   });
}); 

}

function modify_unit_CGI()
{
$(document).ready(function(){
     $("[property='unit']").each( function() {
  
  
    
     var $this = $(this);
     var inp=$this.text();
      
     var con=inp.match(/[a-z,A-Z]+/);
      
  
      if(con=="m")
      {
      var out=100*(parseFloat(inp,10));
      var ans;
      ans=out+" "+"cm";
        $this.text($this.text().replace(inp,ans));

      }
      else if(con=="meters")
      {
      var out=100*(parseFloat(inp,10));
      var ans;
      ans=out+" "+"cm";
        $this.text($this.text().replace(inp,ans));
      }
      if(con=="ft")
      {
        var out=(30.48)*(parseFloat(inp,10));
        var ans;
        ans=out+" "+"cm";
          $this.text($this.text().replace(inp,ans));

      }
      else if(con=="foot")
      {
        var out=30.48*(parseFloat(inp,10));
        var ans;
        ans=out+" "+"cm";
          $this.text($this.text().replace(inp,ans));
      }
      
   });
}); 

}
function modify_unit_FPS()
{
$(document).ready(function(){
     $("[property='unit']").each( function() {
  
  
    
     var $this = $(this);
     var inp=$this.text();
      
     var con=inp.match(/[a-z,A-Z]+/);
      
  
      if(con=="cm")
      {
      var out=(parseFloat(inp,10))/(30.48);
      var ans;
      ans=out+" "+"ft";
        $this.text($this.text().replace(inp,ans));

      }
      else if(con=="centimeters")
      {
      var out=(parseFloat(inp,10))/30.48;
      var ans;
      ans=out+" "+"ft";
        $this.text($this.text().replace(inp,ans));
      }
      if(con=="m")
      {
        var out=(parseFloat(inp,10))/0.3048;
        var ans;
        ans=out+" "+"ft";
          $this.text($this.text().replace(inp,ans));

      }
      else if(con=="meters")
      {
        var out=(parseFloat(inp,10))/0.3048;
        var ans;
        ans=out+" "+"ft";
          $this.text($this.text().replace(inp,ans));
      }
   });
}); 

}

