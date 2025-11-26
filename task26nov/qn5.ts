

export default function sumofunique(numbers:number[]):number | boolean{
    if(!Array.isArray(numbers) || numbers.length===0 || numbers === null || numbers===undefined){
        return false;
    }
    else{
        for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i] !== "number" || numbers[i]===null || numbers[i]===undefined){
            return false;
        }
    }
    let newArray:number[]=[];
    let count:number;
    let sum:number=0;
    for(let i=0;i<numbers.length;i++){
        count=0;
        for(let j=0;j<numbers.length;j++){
            if(numbers[i]===numbers[j]){
                count++;
            }
        }
        if(count===1){
        newArray.push(numbers[i]);
    }
        
    }
    for(let i=0;i<newArray.length;i++){
        sum+=newArray[i];
    }
    return sum;

    

}
    }
    
// console.log(sumofunique([1,2,3,2])) //4
// console.log(sumofunique([1,2,3,3,2])) //1
// console.log(sumofunique([1,2,3,-1,2])) //3