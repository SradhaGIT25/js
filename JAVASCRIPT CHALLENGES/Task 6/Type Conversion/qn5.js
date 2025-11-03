function removeFalsy(arr){
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        if((arr[i] === false) || (arr[i] === 0) || (arr[i] === '') || (arr[i] === null) || (arr[i] === undefined) || (arr[i] === NaN)){
            continue;
        }
        else{
            newarr.push(arr[i]);
            console.log(newarr);
        }
    }
}
removeFalsy([1,'',7,0,false]);