

function sumOf(...numbers){
    if(!Array.isArray(numbers)){
        return false;
    }
    else{
        let len=numbers.length;
    let sum=0;
    for(let i=0;i<len;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
    }
}
// console.log(sumOf(1,2));