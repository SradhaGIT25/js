export default function findLongestChain(arr:number[]){
if(!Array.isArray(arr) || arr.length===0 || arr===null || arr===undefined){
    return false;
}
else{
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!=="number"){
            return false;
        }
        let max:number[]=[]
    let newArray:number[]=[];
let temp:number=0;
let len=arr.length;
let objarr={}
    for(let i=0;i<len;i++){
    temp=arr[i];
     newArray.push(arr[i]);
    for(let j=i+1;j<len;j++){
        if(arr[j]>temp){
            newArray.push(arr[j]);
            temp=arr[j]
        }
    }
    if(newArray.length>max.length){
        max=newArray;
    }
        newArray=[];
    }
    type obje={
        list:number[],
        length:number,
    }
let obj:obje={};
obj.list=max;
obj.length=max.length;
console.log(max); 
console.log(max.length) ;
return obj

}
}
    }
    
// console.log(findLongestChain( [5, 1, 2, 3, 0, 4, 6]))
