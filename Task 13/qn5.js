function sorting(numbers){
for(let i=0;i<numbers.length;i++){
    for(let i=0;i<numbers.length;i++){
    if(numbers[i]>numbers[i+1]){
        let temp=numbers[i];
        numbers[i]=numbers[i+1];
        numbers[i+1]=temp;
    }
}
}
return numbers;
}
console.log(sorting([5, 4, 1, 2, 3]));