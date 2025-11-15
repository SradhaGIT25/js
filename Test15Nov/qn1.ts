export default function findPrime(number:number[], n:number):number{
// let array=[...number]
//     for(let i=array[0];i<n;i++){
//         if(array[i]%i===0){
//             return false;
//         }
//     }
//     return true;

// for(let i=start;i<=n;i++){
//     if()
// }

if(!Array.isArray(number)||number.length===0|| number===null|| number===undefined){
    return false;
}
else{
    for(let i=0;i<number.length;i++){
        if(typeof number[i]!=="number" || number[i]===null || number[i]===undefined){
            return false;
        }
    }
    let a:number=number[0];
    let d:number=number[2]-number[1];
    let lastTerm:number=a+(n-1)*d;
    return lastTerm;
}
}

    
// console.log(findPrime([2,3,5,7,11,13],10001));