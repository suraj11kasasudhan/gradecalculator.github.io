function total()
{ 
var m=parseInt(document.getElementById("math").value);
var s=parseInt(document.getElementById("Science").value);
var sst=parseInt(document.getElementById("Social").value);
var e=parseInt(document.getElementById("English").value);
var h=parseInt(document.getElementById("Hindi").value);
var total1=(m+s+sst+e+h);
document.getElementById("total1").value=total1;
var per=(total1/500)*100;
var c1=" (Excellent)";
var c2=" (Outstanding)";
var c3=" (Improve)";
var c4=" (work hard)";

if(per>90)
        {   
        	var grade="A";
        	document.getElementById("Grade").value=grade+c1;
			
        }
	else if (per>80 && per<=90) 
		{ 	var grade="B";
	      	document.getElementById("Grade").value=grade+c2;
        
        }
	else if (per>70 && per<=80)
		{
            var grade="C";
	      	document.getElementById("Grade").value=grade+c3;
		}
	else
		{
		var grade="Fail";

		document.getElementById("Grade").value=grade+c4;

		}		
}




