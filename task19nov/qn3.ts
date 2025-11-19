export default function addSeparator(number:number):string | boolean{
    if(typeof number !== "number" || number===null || number === undefined){
        return false;
    }
    else{
        let numstr:string=number.toString();
let len:number=numstr.length
let sliced2:string=numstr.slice(len-3,len);
let sliced1:string=numstr.slice(0,len-3);
let revslice:string="";

for(let i=sliced1.length-1;i>=0;i-=2) {
    if(sliced1[i-1]!==undefined){
    revslice +=","+sliced1[i]+sliced1[i-1];
}
else{
    revslice +=","+sliced1[i];
}
}

let rev:string="";
for(let i=revslice.length-1;i>=0;i--){
    rev+=revslice[i];
}

let finalnumber:string=rev+sliced2;
return (finalnumber);
}
    }

// console.log(addSeparator(1234567))
// console.log(addSeparator(12345678))
// console.log(addSeparator(123456789))
// console.log(addSeparator(1234))