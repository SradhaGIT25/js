function insertionsort(array){
    let temp;
    let k=1;
for(let i=k;i<array.length;i++){
    let key=array[i];
    if(array[i+1]<array[i]){
        temp=array[i+1];
        array[i+1]=array[i];
        array[i]=temp;
    }
    for(let i=k;i>=0;i--){
        if(array[i+1]<array[i]){
        temp=array[i+1];
        array[i+1]=array[i];
        array[i]=temp;
    }
    }
k++;
}
return array;
}
console.log(insertionsort([7,12,9,11,3]))
console.log(insertionsort([12,11,13,5,6]))
console.log(insertionsort([23,1,10,5,2]))