function series(...numseries:numbers[]){
//     let numbers=numseries.split("+");
//     console.log(numbers);
// for(let i=numbers[0];i<numbers[numbers.length-1];i++){
// array.push(Math.pow(i,i));
// }

    let firstnum:number=numseries[0];
    let lastnum:number=numseries[numseries.length-1];
    let r:number=numseries[2]/numseries[1]

    let GP:number[]=[];
    let sum=firstnum((r^(numseries.length-1))/(r-1));

return sum;
}
console.log(series([1^1 + 2^2 + 3^3 + ….+ 1000^1000]));