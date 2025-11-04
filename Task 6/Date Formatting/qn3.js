const date=new Date();

function formatting(date){
const format=new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
dateStyle:"long",
timeStyle:"short",
}).format(date);
return format;
}
console.log(formatting(date));