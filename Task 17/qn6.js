function largestPrimeFac(number){
    let array=[]
    let arr=[]
    for(let i=2;i<=number;i++){
        if(number%i===0){
            array.push(i);
        }
    }
    console.log(array);

    let factors=[];
    for(let i=0;i<array.length;i++){
        let isPrime=true;
        for(let j=2;j<=Math.sqrt(array[i]);j++)
                if(array[i]%j===0){
            isPrime=false;
            break;
        }
    
    if(isPrime){
        factors.push(array[i]);
    }
}
console.log(factors);
console.log(Math.max(...factors));
}
        
largestPrimeFac(13195)
// largestPrimeFac(600851475143)