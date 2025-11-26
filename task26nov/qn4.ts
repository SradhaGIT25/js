
export default function convertsectotime(seconds:number):string | boolean{
    if(typeof seconds !=="number" || seconds<0 || seconds===null || seconds===undefined){
        return false;
    }
    else{
        let mins:number=seconds/60;

let hours:number=mins/60;
let hrstr:string=hours.toString();
let hrsplit:string[]=hrstr.split(".");
let h:number=Number(hrsplit[0]);

let min:string="0."+hrsplit[1];
if(hrsplit[1]===undefined){
    min=0;
}
// console.log(min)
let m:number=Number(min)*60;
let msplit:string[]=m.toString().split(".")
let minutes:number=Number(msplit[0]);
// console.log(msplit)

let secs:string="0."+msplit[1];
if(msplit[1]===undefined){
    secs="0";
}
// console.log(secs)

let s:number=Number(secs)*60;
// console.log(s)

let secsplit:string[]=s.toString().split(".")
// console.log(secsplit);
let sec:number=Number(secsplit[0]);
let millisec:string="0."+secsplit[1]
if(secsplit[1]===undefined){
    millisec="0";
}
let ms:string=(Number(millisec)*1000).toFixed(0);
// console.log(ms)

return `${h} hours ${minutes} minutes ${sec} seconds ${ms} milliseconds`
}
    }

// console.log(convertsectotime(9000));
// console.log(convertsectotime(9100));
// console.log(convertsectotime(9200));