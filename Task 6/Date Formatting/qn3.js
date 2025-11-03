const date=new Date();
console.log(formatting(date));
function formatting(date){
const format=new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
dateStyle:"long",
timeStyle:"short",
}).format(date);
return format;
}