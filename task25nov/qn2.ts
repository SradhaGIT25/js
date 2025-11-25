

export default function mostfreqelement(array:string[] | number[]):string | number | boolean{
    if(!Array.isArray(array) || array.length===0 || array===null || array===undefined){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="string" || typeof array[i]!=="number" || array[i]===null || array[i]==="undefined"){
                return false;
            }
        }
    let freq:object={};
for(let num of array){
    if(freq[num]){
        freq[num]+=1;
    }
    else{
        freq[num]=1;
    }
}

let uniquenums:string[] | number[]=Object.keys(freq);
uniquenums.sort((a,b)=>{
    if(freq[b]===freq[a])
        return a-b;
    else
        return freq[b]-freq[a];
})

let result:string[] | number[]=[];
for(let num of uniquenums){
    for(let i=0;i<freq[num];i++){
        result.push(num);
    }
}
return result[0];
}
}
// console.log(mostfreqelement([1,2,2,3,3,3,4]))
// console.log(mostfreqelement(["a","b","a","c","d","c","a"]))