export default function isEven(number:number){
    if(typeof number !== "number" || number===null || number === undefined){
        return false;
    }
    else{
        let quotient:number=number/2;
if(Math.floor(quotient)===quotient ){
    return true;
}
else{
    return false;
}
}
    }

