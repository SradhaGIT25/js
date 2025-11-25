


export default function sorting(array:number[]):string | boolean{
    if(!Array.isArray(array) || array.length===0 || array===null || array===undefined){
        return false;
    }
    else {
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!== "number" || array[i]===null || array[i]===undefined){
                return false;
            }
        }

        let k:number=0;
    let m:number=0;
    let newArray:number[]=[]
    let dummy1:number[]=[];
    let dummy2:number[]=[];

    for(let i=0;i<array.length;i++){
        newArray.push(array[i]);
    }
    // console.log(newArray);
    for(let i=0;i<array.length;i++){
        dummy1.push(array[i]);
    }
    for(let i=0;i<array.length;i++){
        dummy2.push(array[i]);
    }
dummy1.sort((a,b)=>a-b);
// console.log(dummy1,"dummy1"); ///ascending
dummy2.sort((a,b)=>b-a);
//  console.log(dummy2,"dummy2"); ///descending


for(let i=0;i<newArray.length;i++){
        if(newArray[i]!==dummy1[i]){
            k=1;
        }
}

for(let i=0;i<newArray.length;i++){
        if(newArray[i]!==dummy2[i]){
            m=1;
        }
}

// console.log(k,m)
if(k===0 && m===1){
    return "ascending";
}
else if(m===0 && k===1){
    return "descending";
} 
else{
    return "unsorted";
}


    }
    

}
// console.log(sorting([1,-1,0,8,5]))
// console.log(sorting([ 8, 5, 1, 0, -1 ]))
// console.log(sorting([ -1, 0, 1, 5, 8 ]))