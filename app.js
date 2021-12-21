const dateip=document.querySelector(".ip");
const btn=document.querySelector(".bttn");
const ans=document.querySelector(".answer");

function reverse1(date11){
var datesp= date11.split('');
var temp= datesp.reverse();
var tempf=temp.join('');
return tempf;
}

function ispalindrome1(date1){
var date2=reverse1(date1);
console.log(date1)
console.log(date2)
if(date1===date2)
{
    return true;
}
else{
    return false;
}

}

function cnvrtdate(dateipnew1){


 var strdatetemp = { day: '', month: '', year: ''};
 
 if(dateipnew1.day < 10){
 
   strdatetemp.day='0'+ dateipnew1.day; 
}
else{
    strdatetemp.day=dateipnew1.day.toString();
}

if(dateipnew1.month < 10){
    strdatetemp.month='0'+dateipnew1.month;
}
else{
   strdatetemp.month=dateipnew1.month.toString();
}

strdatetemp.year=dateipnew1.year.toString();


return strdatetemp;

}

function getalldatefrmt(cdate){
    
    const dateipnew=cdate;  
                  
var strdate=cnvrtdate(dateipnew);

var ddmmyyyy = strdate.day + strdate.month + strdate.year ;
var mmddyyyy=strdate.month+strdate.day+strdate.year;
var yyyymmdd=strdate.year+strdate.month+strdate.day;
var ddmmyy=strdate.day+strdate.month+strdate.year.slice(-2);
var mmddyy=strdate.month+strdate.day+strdate.year.slice(-2);
var yymmdd=strdate.year.slice(-2)+strdate.month+strdate.day;
return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}



function palinbday(){
   var datenf=dateip.value.split('-');
   
     var datef = {
day: Number(datenf[2]),
month: Number(datenf[1]),
year: Number(datenf[0])
     };

  var alldatef= getalldatefrmt(datef);

    for(let i=0;i<alldatef.length;i++){

        if(ispalindrome1(alldatef[i])){
 ans.innerText="Palindrom hai";
 break;
        }
        else{
            ans.innerText="Palindrom nahi";
        }
    }
}

btn.addEventListener("click",palinbday);