export default function intersection(a1:number[],a2:number[]):number[] | boolean{
    if(!Array.isArray(a1) || !Array.isArray(a2) || a1.length===0 || a2.length===0 || a1===undefined || a2===undefined || a1===null || a2===null){
        return false;
    }
    else{
        for(let i=0;i<a1.length;i++){
            if(typeof (a1[i])!== "number"){
                return false;
            }
        }
        for(let i=0;i<a2.length;i++){
            if(typeof (a2[i])!== "number"){
                return false;
            }
        }

        let result:number[]=[]
        for(let i=0;i<a1.length;i++){
            if(a2.includes(a1[i])){
                result.push(a1[i]);
            }
        }
        return result;
        }


    }

