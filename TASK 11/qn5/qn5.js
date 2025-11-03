const targetDate=new Date("2025-10-28");
console.log(targetDate)

let remaining=setInterval(()=>{

const date=new Date;
console.log(date);

let gap=(targetDate-date);
console.log(gap);

let milliseconds=Math.floor(gap);
let seconds=Math.floor(gap/1000)%60;
let minutes=Math.floor(gap/(1000*60))%60;
let hours=Math.floor(gap/(1000*60*60))%24;
let days=Math.floor(gap/(1000*60*60*24));

console.log(`Days:${days.toFixed(0)} , Hours:${hours.toFixed(0)} , Minutes:${minutes.toFixed(0)} , Seconds:${seconds.toFixed(0)} , Milliseconds:${milliseconds.toFixed(0)}`);

if(days<=0 && hours<=0 && minutes<=0 && seconds<=0 && milliseconds<=0){
    console.log("Countdown Finished")
}
},1000)


