function linearsearch(array,target){
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return `the index of target is at ${i}`;
    }
}
return -1;
}
console.log(linearsearch([12,8,9,11,5,11],11))