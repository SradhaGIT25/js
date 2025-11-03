
function arePrime(number:number){
    if(number<2){
        return false;
    }
        for(let i=2;i<number;i++){
            if(number%i==0){
                return false;
            }
    }
    
    return true;
    }
console.log(arePrime(7));
console.log(arePrime(10));
console.log(arePrime(29));