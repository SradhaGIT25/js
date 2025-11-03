const date=new Date();
console.log(date);
const format=new Intl.DateTimeFormat("Asia/Kolkata").format(date);
console.log(format);