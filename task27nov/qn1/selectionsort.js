function selectionsort(array){
    let pos;
    let mini;
let current;
let temp;
let k=0;
for(let i=k;i<array.length;i++){
    let mini=1000;
    for(let i=k;i<array.length;i++){
        if(array[i]<mini){
                mini=array[i];
                pos=i;
            }
        }
        console.log(mini)
        temp=array[pos];
        array[pos]=array[k];
        array[k]=temp;       
     k++;
    }
   
    return (array)
}

console.log(selectionsort([7,12,9,11,3]))
console.log(selectionsort([64,25,12,22,11]))