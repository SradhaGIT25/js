// const day=new Date(2025, 1, 4, 13, 44, 3);
// console.log(day);
// let year=day.getFullYear()
// let y=year.toString().slice(2,4);
// console.log(y)
// if(year)
// let 
function dateformatter(date,pattern){
let p=pattern.split(',');
for(let i=0;i<p.length;i++){
   let p1=p[i];
   let p2=p[i+1];
   let p1s=p[i].split("-");
   let p2s=p[i+1].split("-");
    console.log(p1s)


 let year=date.getFullYear();
//  console.log(year);
 let month=date.getMonth();
//   console.log(month);
 let day=date.getDay();
//   console.log(day);
 let hours=date.getHours();
//   console.log(hours);
 let thours=date.getHours();
//   console.log(thours);
 let mins=date.getMinutes();
//   console.log(mins);
 let sec=date.getSeconds();
//   console.log(sec);

 if(year.toString()==="YY"){
let y=year.toString().slice(2,4);
console.log(y);    
}
else{
    console.log(year);
}

if(month==="M"){
    if(month.toString().length===1){
        console.log(month)
    }
    else{
        month.padStart(2,'0');
        console.log(month);
    }
}

if(day==="D"){
    if(day.toString().length===1){
        console.log(day)
    }
    else{
        day.padStart(2,'0');
         console.log(day);
    }
}

if(hours==="H"){
    if(hours.toString().length===1){
        console.log(hours)
    }
    else{
        hours.padStart(2,'0');
         console.log(hours);
    }
}

if(thours==="h"){
    if(thours.toString().length===1){
        console.log(thours)
    }
    else{
        thours.padStart(2,'0');
        console.log(thours);
    }
}

if(mins==="m"){
    if(mins.toString().length===1){
        console.log(mins);
    }
    else{
        mins.padStart(2,'0');
        console.log(mins)
    }
}

if(sec==="s"){
    if(sec.toString().length===1){
        console.log(sec);
    }
    else{
        sec.padStart(2,'0');
        console.log(sec)
    }
}
}

}
console.log(dateformatter(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'))