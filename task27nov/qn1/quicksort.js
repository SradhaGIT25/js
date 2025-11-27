function quicksort(array,low,high){
    low=0;
    high=array.length-1;
    let temp;
    let len=array.length-1;
let pivot=(0+len)/2;
for(let i=low;i<high;i++){
    for(let j=0;j<array.length;j++){
        if(array[i]<pivot){
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    }
}
// if(low<high){
    quicksort(array,0,pivot);
    quicksort(array,pivot,high)
// }
return array
}
console.log(quicksort([4,3,1,2,5,9,7,10,6]))