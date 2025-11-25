

export default function removeduplicates(array:number[] | string[]):number[] | string[] | boolean{
    if(!Array.isArray(array) || array.length===0 || array===null || array===undefined){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="string" || typeof array[i]!=="number" || array[i]===null || array[i]==="undefined"){
                return false;
            }
        }

        let a:string[] | number[]=[]
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]===array[j]){
                if(!a.includes(array[i])){
                    a.push(array[i]);
                }
            }
        }
    }
return a;
    }
    
}

// console.log(removeduplicates([1,2,2,3,3,3,4]))
// console.log(removeduplicates(["a","b","a","c","d","c","a"]))