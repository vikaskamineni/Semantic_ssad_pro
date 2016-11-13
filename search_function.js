function search_function()
{
    document.getElementById("search-wrap").removeAttribute("hidden");
    if(document.getElementById("page-wrap").hasAttribute("hidden"))
    {
    }
    else
    {
        console.log("add hidden");
        document.getElementById("page-wrap").setAttribute("hidden",true);
    }
    var element = document.getElementById("page_wrap_new");
    if(element.hasAttribute("hidden"))
    {
    }
    else
    {
        element.setAttribute("hidden",true);
    }
}
function modify_americanC()
{
    anno_btn = "modify-to-americanC";    
 $j(document).ready(function(){
    $j("[property='date']").each( function() {
  
    var format = "MMMM Do, YYYY";
    var obj = JSON.parse(jsonStr);
    var i=0;
    while ( obj['change'][i]!=null)
    {
        if(obj['change'][i].tagName == 'date')
        {
            var $this = $j( this );
            var old_date = $j.trim($this.text());
            var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
            $this.text($this.text().replace(old_date, new_date));
            var xpath = obj['change'][i].xpath;
            var url = obj['change'][i].url;
            var start = obj['change'][i].start;
            var end = obj['change'][i].end;
            obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});
        }
        i++;
    }
  });
  });
}
function modify_britishA()
{
    anno_btn = "modify-to-britishA";
 $j(document).ready(function(){
    $j("[property='date']").each( function() {
  
    var format = "Do MMMM YYYY";
    var obj = JSON.parse(jsonStr);
    var i=0;
    while ( obj['change'][i]!=null)
    {
        if(obj['change'][i].tagName == 'date')
        {
            var $this = $j( this );
            var old_date = $j.trim($this.text());
            var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
            $this.text($this.text().replace(old_date, new_date));
            var xpath = obj['change'][i].xpath;
            var url = obj['change'][i].url;
            var start = obj['change'][i].start;
            var end = obj['change'][i].end;
            obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            
        }
        i++;
    }
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}  
/*function modify_startdate_britishB()
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
}*/
function modify_americanA()
{
    anno_btn = "modify-to-americanA";
 $j(document).ready(function(){
    $j("[property='date']").each( function() {
  
    var format = "MM-DD-YYYY";
    
    var obj = JSON.parse(jsonStr);
    var i=0;
    while ( obj['change'][i]!=null)
    {
        if(obj['change'][i].tagName == 'date')
        {
            var $this = $j( this );
            var old_date = $j.trim($this.text());
            var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
            $this.text($this.text().replace(old_date, new_date));
            var xpath = obj['change'][i].xpath;
            var url = obj['change'][i].url;
            var start = obj['change'][i].start;
            var end = obj['change'][i].end;
            obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            
        }
        i++;
    }
  });
  });
} 
function modify_americanB()
{
    anno_btn = "modify-to-americanB";
 $j(document).ready(function(){
    $j("[property='date']").each( function() {
  
    var format = "MMMM DD, YYYY";
    var i = 0;
    while ( obj['change'][i]!=null)
    {
        if(obj['change'][i].tagName == 'date')
        {
            var $this = $j( this );
            var old_date = $j.trim($this.text());
            var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD, YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
            $this.text($this.text().replace(old_date, new_date));
            var xpath = obj['change'][i].xpath;
            var url = obj['change'][i].url;
            var start = obj['change'][i].start;
            var end = obj['change'][i].end;
            obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            
        }
        i++;
    }
    
  });
  });
}  
//-----------------------------------------------------------

/*function modify_enddate_americanC()
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
} */ 
function modify_unit_SI()
{
    anno_btn = "modify-to-SI";
$(document).ready(function(){
     $("[property='unit']").each( function() {
        var i = 0;
        while ( obj['change'][i]!=null)
        {
            if(obj['change'][i].tagName == 'unit')
            {
               
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
                if(con=="Km")
                {
                    var out=1000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kms")
                {
                    var out=1000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"m";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=1000*(parseFloat(inp,10));
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

                var xpath = obj['change'][i].xpath;
                var url = obj['change'][i].url;
                var start = obj['change'][i].start;
                var end = obj['change'][i].end;
                obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            
            }
            i++;
        }
    });
    }); 
}

function modify_unit_CGI()
{
    anno_btn = "modify-to cgi";
$(document).ready(function(){
     $("[property='unit']").each( function() {
  
        var i=0;
        while(obj['change'][i]!=null)
        {
            if(obj['change'][i].tagName == 'unit')
            {
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
                if(con=="Km")
                {
                    var out=100000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                }
                else if(con=="kms")
                {
                    var out=100000*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"cm";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=100000*(parseFloat(inp,10));
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
                var xpath = obj['change'][i].xpath;
                var url = obj['change'][i].url;
                var start = obj['change'][i].start;
                var end = obj['change'][i].end;
                obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            
            }
            i++;
        }     
    });
    }); 

}
function modify_unit_FPS()
{
    anno_btn = "modify-to-fps";
$(document).ready(function(){
    $("[property='unit']").each( function() {
  
        var i=0;
        while(obj['change'][i]!=null)
        {
            if(obj['change'][i].tagName == 'unit')
            {
         
        
    
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
                if(con=="Km")
                {
                    var out=3280.84*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kms")
                {
                    var out=3280.84*(parseFloat(inp,10));
                    var ans;
                    ans=out+" "+"ft";
                    $this.text($this.text().replace(inp,ans));

                }
                else if(con=="kilometers")
                {
                    var out=3280.84*(parseFloat(inp,10));
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
                var xpath = obj['change'][i].xpath;
                var url = obj['change'][i].url;
                var start = obj['change'][i].start;
                var end = obj['change'][i].end;
                obj['change'].push({"xpath":xpath,"url":url,"func_triggered":anno_btn,"start_offset":start,"end_offset":end,"tagName":anno_btn});            

            }
            i++;
        }
   });
}); 
}
function modify_event_name()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'event-name']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_event_location_street()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'event-location-street']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_event_location_area()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'event-location-area']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_event_location_city()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'event-location-city']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_organistion_owner()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-owner']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_organistion_contact()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-contact']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_organistion_employee()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-employee']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_organistion_location_street()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-location-street']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
function modify_organistion_location_area()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-location-area']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}

function modify_organistion_location_city()
{
 console.log("entered");
 //console.log(stri);
 $j(document).ready(function(){
    $j("[property = 'organisation-location-city']").each( function() {
    console.log("stri correct");
    //var format = "MMMM Do, YYYY";

    var $this = $j( this );
    //var old_date = $j.trim($this.text());
    //var new_date = moment(old_date ,["MM-DD-YYYY", "DD-MM-YYYY", "MMMM DD,YYYY", "MMMM Do YYYY", "Do MMM YYYY", "Do MMMM YYYY", "MMMM Do, YYYY"] ).format( format );
    $this.css("background-color","silver");
    //$this.text($this.text().replace(old_date, new_date));
  });
  });
}
