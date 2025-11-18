
function dateformatter(date,pattern){
let p=pattern.split(/[-,: ]/);
let result1=[]
let result2=[]
for(let i=0;i<p.length;i++){
   let s1=p[i];
   
 let year=date.getFullYear();
//  console.log(year);
 let month=date.getMonth()+1;
//   console.log(month);
 let day=date.getDay();
//   console.log(day);
 let hours=date.getHours();
//   console.log(hours);
 let thours=date.getHours()%12 || 12;
//   console.log(thours);
 let mins=date.getMinutes();
//   console.log(mins);
 let sec=date.getSeconds();
//   console.log(sec);

 if(s1 === "YY"){
let y=year.toString().slice(2,4);
console.log(y);
result1.push(y);    
}
else if(s1==="YYYY"){
    console.log(year);
    result1.push(year);
}
result1.push("-");


if(s1 ==="M"){
        console.log(month);
        result1.push(s1);
    }
    else if(s1 ==="MM"){
        console.log(month.toString().padStart(2,'0'));
        result1.push(s1);
}
result1.push("-");

if(s1 ==="D"){
        console.log(day);
        result1.push(s1);
    }
    else if(s1 ==="DD"){
         console.log(day.toString().padStart(2,'0'));
         result1.push(s1);
}


if(s1==="H"){
        console.log(hours);
        result2.push(s1);
    }
    else if(s1==="HH"){
         console.log(hours.toString().padStart(2,'0'));
         result2.push(s1);
}
result2.push("-");


if(s1==="h"){
        console.log(thours);
        result2.push(s1);
    }
    else if(s1==="hh"){
        console.log(thours.toString().padStart(2,'0'));
        result2.push(s1);
}
result2.push("-");

if(s1==="m"){
        console.log(mins);
        result2.push(s1);
    }
    else if(s1==="mm"){
        console.log(mins.toString().padStart(2,'0'));
        result2.push(s1);
}
result2.push("-");


if(s1==="s"){
        console.log(sec);
        result2.push(s1);
    }
    else if(s1==="ss"){
        console.log(sec.toString().padStart(2,'0'))
        result2.push(s1);
    }
}

}
console.log(dateformatter(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'))
