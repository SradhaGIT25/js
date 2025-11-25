

export default function checkarmstrong(num:number):boolean{
    if(typeof num !=="number" || num<0 || num===null || num===undefined){
        return false;
    }
    else{
        let  sum=0;
let rem:number=0;
let temp:number=num;
let numstr:string=num.toString();
let len:number=numstr.length

while(temp!==0){
rem=Math.floor(temp%10);
sum=sum+Math.pow(rem,len);
temp=temp/10;
}

if(num===sum){
return true;
}
else{
    return false;
}
    }
}
// console.log(checkarmstrong(153))
// console.log(checkarmstrong(9474))
// console.log(checkarmstrong(370))
// console.log(checkarmstrong(371))
