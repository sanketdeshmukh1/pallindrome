const dateip=document.querySelector(".ip");
const btn=document.querySelector(".bttn");
const ans=document.querySelector('.answer');

function cnvrtdate(dateipnew){
 var strdatetemp={ day: '', month: '', year: ''};
 if(strdatetemp.day<10){
     strdatetemp.day='0'+strdatetemp.day;
 }
else{
    strdatetemp.day=strdatetemp.day.toString();
}

if(strdatetemp.month<10){
    strdatetemp.month='0'+strdatetemp.month;
}
else{
   strdatetemp.month=strdatetemp.month.toString();
}

strdatetemp.year=strdatetemp.year.toString();

return strdatetemp;
}


}

function palinbday(){
    const dateipnew=dateip.value;
var strdate=cnvrtdate(dateipnew);

    // var av=['a','b','c'];
// var datewohyp=dateipnew.split('');
// console.log(datewohyp);
// var revdate=datewohyp.reverse();
// var revstr=revdate.join('');
// console.log(revdate);


}

btn.addEventListener("click",palinbday);