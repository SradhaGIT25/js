


export default function intersection(a1:number[] | string[],a2:number[]| string[] ): number[] | boolean| string[]{
      if(!Array.isArray(a1) || !Array.isArray(a2) || a1.length===0 || a2.length===0 || a1===undefined || a2===undefined || a1===null || a2===null){
        return false;
    }
    else{
        for(let i=0;i<a1.length;i++){
            if(typeof (a1[i])=== "object" || Array.isArray(a1[i]) || typeof (a1[i])=== "boolean"){
                return false;
            }
        }
        for(let i=0;i<a2.length;i++){
            if(typeof (a2[i])=== "object" || Array.isArray(a2[i]) || typeof (a2[i])=== "boolean"){
                return false;
            }
        }
    let inter: number[]| string[]=[]
    for(let i=0;i<a1.length;i++){
        if(a2.includes(a1[i])){
            inter.push(a1[i]);
        }
    }
    return inter;
}
}
console.log(intersection([1,2,3], [2,3,4]));
console.log(intersection(["a","c","d"], ["a","b","c"]));