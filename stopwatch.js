 
 var sec= 0;
 var min=0;
 var hrs=0;
 var interval=0;

 var sec1=0;
 var min1=0;
 var hrs1=0;
 
 function timer()
 {
     sec++;
     if(sec==60)//shifting the counter to min and hrs
     {
         sec=0;
         min++;
     }
     if(min==60)
     {
         min=0;
         hrs++;
     }

        if(sec<10)//for displaying the "0" in front when its less than 10
        sec1= "0"+sec.toString();
        else
        sec1=sec;

        if(min<10)
        min1="0"+ min.toString();
        else
        min1= min;

        if(hrs<10)
        hrs1= "0"+ hrs.toString();
        else
        hrs1=hrs;
    
    document.getElementById("display").innerHTML=hrs1 + ":" + min1 + ":"+ sec1;
}
function start()
{
  interval=window.setInterval(timer,1000);
}

function stop()
{
   window.clearInterval(interval);
}

function reset()
{
    sec=0;
    min=0;
    hrs=0;
    window.clearInterval(interval);
    document.getElementById("display").innerHTML="00" + ":" + "00" + ":" + "00";
}
