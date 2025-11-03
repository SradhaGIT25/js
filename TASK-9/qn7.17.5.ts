
function sumOf(...numbers:number[]){
    console.log(numbers);
    let len=numbers.length;
    let sum=0;
    for(let i=0;i<len;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
}
sumOf(1,2);
sumOf(1,2,3,4);