function daysBetween(date1,date2){
const day1=date1.getDay()
const day2=date2.getDay()
let remdates=(date2-date1);
console.log(remdates)
let rem=remdates/(1000*24*60*60);
console.log(rem);
}
console.log(daysBetween("2025-11-4","2025-11-6"));