function binaryexplr(number,power){
    let result=1;
    let base=number;
let binary=power.toString(2);
console.log(binary);
for(let i=binary.length-1;i>=0;i--){
    if(binary[i]==="1"){
        result*=base;
        base*=base;
    }
    else{
        result=result;
        base*=base;
    }
}
return result;
}
console.log(binaryexplr(3,13));