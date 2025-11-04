const date=new Date();
console.log(formatting(date));
function formatting(date){
const format=new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
dateStyle:"full",
timeStyle:"long",
}).format(date);
return format;
}


console.log(formatting(date));
function formatting(date){
const format=new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
dateStyle:"full",
timeStyle:"long",
}).format(date);
return format;
}