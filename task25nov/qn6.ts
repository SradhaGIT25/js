

// type a=string | number |true | object ;

type fal=boolean | "" | 0 | boolean | null | undefined | false;

export default function removeFalsy(array:any):number[] | boolean{
    if(!Array.isArray(array) || array.length===0 || array=== null || array===undefined){
        return false;
    }
    else{
        let arr:number[]=[];
    let falsy:fal  =[ false, 0, "", null, undefined, NaN]
for(let i=0;i<array.length;i++){
    if(!falsy.includes(array[i])){
        arr.push(array[i])
    }
}
return arr;
}
    }
    
console.log(removeFalsy([1,0,2,"",3,null,4]))
console.log(removeFalsy([1,0,2,"",3,"",undefined,null,4, NaN]))