function binarysearch(array,target){
let l=0;
let r=array.length-1;
let tar;
while(l<=r){
tar=(l+r)/2;
if(array[tar]===target){
    return `target found at index ${tar}`
}
else if(array[tar]<target){
    l=tar+1;
}
else if(array[tar]>target){
    r=tar-1;
}
else{
    return -1;
}
}
}
console.log(binarysearch([2,3,7,7,11,15,25],11))
console.log(binarysearch([2,3,7,7,11,15,25],25))