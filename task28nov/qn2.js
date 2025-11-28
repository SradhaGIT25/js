function sieveoferatosthenes(n){
    let primeArray=[]
    for(let i=0;i<n;i++){
        primeArray.push(true);
    }
    console.log(primeArray)
    let final=[]
   primeArray[0]=false;
   primeArray[1]=false;

   for(let p=2;p<=Math.sqrt(n);p++){
    if(primeArray[p]===true){
        for(let i=p;i<n;i++){
            primeArray[p*i]=false;
        }
    }
   }
   for(let p=2;p<=n;p++){
    if(primeArray[p]===true){
        final.push(p);
    }
   }
   return (final);
   
}
console.log(sieveoferatosthenes(10));
console.log(sieveoferatosthenes(3));
console.log(sieveoferatosthenes(35));