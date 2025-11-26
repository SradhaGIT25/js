

export default function rotateArray(array:number[]|string[],steps:number):number[]|string[]|boolean{
   if(!Array.isArray(array) || array.length===0 || array === null || array===undefined || typeof steps !== "number" || steps === null || steps === undefined || steps<0){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
        if(typeof array[i] === "object" || Array.isArray(array[i]) || typeof array[i]==="boolean" || array[i]===null || array[i]===undefined){
            return false;
        }
    }
    let newArray:number[] | string[]=[]
    let res:number[] | string[]=[];
    let arr1:number[] | string[]=array.slice(array.length-(steps),array.length);
    let arr2:number[] | string[]=array.slice(0,array.length-(steps));
    newArray.push(arr1);
    newArray.push(arr2);
    res=newArray.flat(Infinity);
    return res;


}
}
// console.log(rotateArray([1,2,3,4,5],2))
// console.log(rotateArray([1,2,3,4,5],3))
// console.log(rotateArray([1,2,3,4,5],0))