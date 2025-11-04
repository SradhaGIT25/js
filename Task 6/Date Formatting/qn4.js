function formatTimeZone(date, zone){
    const format=new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
dateStyle:"long",
timeStyle:"short",
}).format(date);
return format;
}
console.log(formatTimeZone(new Date(),"America/New_York"));