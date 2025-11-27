function mergesort(array){
    for(let i=0;i<array.length;i++){
        // let l=0;
        // let h=array.length-1;
        let pivot=Math.floor(array.length/2);
        let first=array.slice(0,pivot);
        // console.log(first)
        let second=array.slice(pivot,array.length)
        // console.log(second)
        while(first.length===1 && second.length===1){
            mergesort(first);
            mergesort(second);
        }
    }
    return array
    
}
console.log(mergesort([12,8,9,3,11,5,4]));