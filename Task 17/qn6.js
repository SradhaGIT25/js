function largestPrimeFac(number){
    let array=[]
    let arr=[]
    for(let i=0;i<=number;i++){
        if(number%i===0){
            array.push(i);
        }
    }
    console.log(array);

    for(let i=0;i<number;i++){
        for(let j=0;j<array.length;j++)
            if(i!==1 || i!==array[j]){
                if(array[j]%i!==0){
            arr.push(array[j]);
        }
        else{
            continue;
        }
            }
    }
    console.log(arr);

  console.log(arr[arr.length-1]);

}
largestPrimeFac(13195)
// largestPrimeFac(600851475143)