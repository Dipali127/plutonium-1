//DatePrint():will print the date.
//Monthprint():will print the month.
//getBatchInfo():will print the information abot my batch,which week in plutonium batch and what i taught in node js recently.
//getDate is in builtin function which give current date.
//New Date alone give us to Date,month,year and time but if we want to print individually date,month,year and time
//then we give it like new Date()function and with this function for accesing current date for that 
//we give new Date().getDate()"here .(dot) will help to access current date."  

function DatePrint(){
    let day=new Date().getDate();
    console.log("Today's Date:",day);
}
 function Currentmonth(){
     let Month=new Date().getMonth()+1;//month index start from 0 to 11 thats why we add 1 to it.
     console.log("Today's Month:",Month);
 }
 function getBatchInfo(){
    console.log("BATCH INFORMATION")
    console.log("Batch:Plutonium  Week:3rd Day:21 Current Topic:Node.js Modules")
 }
module.exports.TodayDate=DatePrint
module.exports.Currentmonths=Currentmonth;
module.exports.BatchInfo=getBatchInfo;