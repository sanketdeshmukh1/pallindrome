const dateip=document.querySelector(".ip");
const btn=document.querySelector(".bttn");
const ans=document.querySelector('.answer');

function cnvrtdate(dateipnew){

 var strdatetemp={ day: '', month: '', year: ''};

 if(strdatetemp.day<10){
     strdatetemp.day='0'+dateipnew.day;
 }
else{
    strdatetemp.day=dateipnew.day.toString();
}

if(strdatetemp.month<10){
    strdatetemp.month='0'+dateipnew.month;
}
else{
   strdatetemp.month=dateipnew.month.toString();
}

strdatetemp.year=dateipnew.year.toString();

return strdatetemp;

}

function getalldatefrmt(){
    const dateipnew=cdate;  
    console.log(cdate);
    console.log(dateipnew);
                      //dateip.value;
var strdate=cnvrtdate(dateipnew);

var ddmmyyyy = strdate.day + strdate.month + strdate.year ;
var mmddyyyy=strdate.month+strdate.day+strdate.year;
var yyyymmdd=strdate.year+strdate.month+strdate.day;
var ddmmyy=strdate.day+strdate.month+strdate.year.slice(-2);
var mmddyy=strdate.month+strdate.day+strdate.year.slice(-2);
var yymmdd=strdate.year.slice(-2)+strdate.month+strdate.day;
return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}

var cdate= {
    day: 2,
    month: 4,
    year: 2011
};

function palinbday(){
//     // const dateipnew=cdate;  
//     // console.log(cdate);
//     // console.log(dateipnew);
//     //                   //dateip.value;
// var strdate=cnvrtdate(dateipnew);
// console.log(strdate);
var qq=getalldatefrmt();
console.log(qq)

    // var av=['a','b','c'];
// var datewohyp=dateipnew.split('');
// console.log(datewohyp);
// var revdate=datewohyp.reverse();
// var revstr=revdate.join('');
// console.log(revdate);


}

btn.addEventListener("click",palinbday);