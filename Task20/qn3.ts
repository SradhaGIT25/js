
export default function SortMixedNested(arr:Array<any>){

    if(!Array.isArray(arr) || arr.length===0 || arr === null || arr === undefined){
        return false;
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(typeof arr[i] === "string" || "boolean" || null || undefined || arr[i]===[]){
                return false;
            }
        }
        let k:number=0;
    let flatten:number[];
    flatten=arr.flat(Infinity).sort((a,b)=>a-b);

    function sortArray(arr:number[][]){
for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="number"){
        arr[i]=flatten[k];
         k++;
    }
    else if(Array.isArray(arr[i])){
        sortArray(arr[i]) 
    }
}
return (arr)
}
 return sortArray(arr)
}
    }
    
// console.log(SortMixedNested([3, [2, [5, 1]], 4]));
// console.log(SortMixedNested([3, [2, [5, 1]], 0]));
// console.log(SortMixedNested([3, [2, [-5, 1]], 4]));
// console.log(SortMixedNested([3, [2, [-5, 4]], 4]));
// console.log(SortMixedNested([3, [-2, [-5, 1]], 4]));
// console.log(SortMixedNested([3, [-2, [-5, 1]], 4, 7, [-2, 5] , -3]));
// console.log(SortMixedNested([3, [-2, [-5, 1]], [4] , [-3 , 5]]));