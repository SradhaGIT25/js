


export default function DeepEqual(a:object ,b:object):object |boolean | number[]{
    
         if(a===b) return true;

    if(typeof a!=="object" || typeof b!=="object" || a===null || b===null || a===undefined || b===undefined){
        return false;
    }

    let A=Object.keys(a);
    // console.log(A)
    let B=Object.keys(b);
    // console.log(B)
    
    if(A.length!==B.length){
        return false;
    }

    for(let key of A){
        if(!DeepEqual(a[key],b[key])){
            return false;
        }
    }
        return true;
}
    

   
// console.log(DeepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}));
// console.log(DeepEqual([1, [2]], [1, [2, 3]]));