function formatTimeAgo(timeStamp:string){
    if(typeof timeStamp !== "string"){
        return false;
    }
    else{
        let date2:Date= new Date(timeStamp)
console.log(date2)
const today:Date=new Date;
console.log(today);

let remaining:number=(today-date2);
// console.log(remaining);

let milliseconds:number=Math.floor(remaining);
let seconds:number=Math.floor(remaining/1000)%60;
let minutes:number=Math.floor(remaining/(1000*60))%60;
let hours:number=Math.floor(remaining/(1000*60*60))%24;
let days:number=Math.floor(remaining/(1000*60*60*24));

console.log(`Days:${days.toFixed(0)} , Hours:${hours.toFixed(0)} , Minutes:${minutes.toFixed(0)} , Seconds:${seconds.toFixed(0)} , Milliseconds:${milliseconds.toFixed(0)} time Ago`);

}
    }

// console.log(formatTimeAgo("2025-11-14T10:33:42.718Z"));









