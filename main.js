function gun(){
let value=document.getElementById("hr")
let day=new Date();
// value.innerHTML=day; 

const da=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day1=document.getElementById("day")
let days=da[day.getDay()];
day1.innerHTML=days;


let date=document.getElementById("date")
let dats=day.getDate();
date.innerHTML=dats;

const mths=["jan","feb","march","april","may","june","July","august","september","november","December"]
let month=document.getElementById("month")
let months=mths[day.getMonth()];
month.innerHTML=months;


let year1=document.getElementById("year")
let years=day.getFullYear();
year1.innerHTML=years;

let hour=document.getElementById("hour")
let hours=day.getHours();
hour.innerHTML=hours;

let min=document.getElementById("min")
let mins=day.getMinutes();
min.innerHTML=mins;

let sec=document.getElementById("sec")
let secs=day.getSeconds();
sec.innerHTML=secs;

let am=document.getElementById("am")
{
if(hours<12){
	
am.innerHTML="AM";
}
else{
am.innerHTML="PM";	
}
}
let store=hours-12;
if(hours>12){
	hour.innerHTML=store;
}
}
setInterval(gun,1)
