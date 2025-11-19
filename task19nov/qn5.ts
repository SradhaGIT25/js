export default function objectEquality(obj1:object, obj2:object) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
    else {
        var array1 = Object.entries(obj1);
        var flat1 = array1.flat();
        var array2 = Object.entries(obj2);
        var flat2 = array2.flat();
        if (flat1.length === flat2.length) {
            for (var i = 0; i < flat1.length; i++) {
                if (!flat2.includes(flat1[i])) {
                    return "Not Equal";
                }
            }
            return "Equal";
        }
        else {
            return "Not Equal";
        }
    }
}



// let arr=[];
function findPath(obj:object,target:string,arr:string[]=[]){
    if(typeof obj !== "object" || obj=== null || obj=== undefined || typeof target !== "string" || target === null || target === undefined){
        return false;
    }
    let str:string=""
    for(const key in obj){
        str+=key;
         arr.push(key)
        if(key!==target){
            if(typeof obj[key] ==="object"){
            findPath(obj[key],target,arr);
        }
        else{
            for(let i=0;i<=str.length+1;i++){
                arr.pop();
            }
             str = '';
        }
        }
       
    }
   return arr;
}
// console.log(findPath({a:{b:{c:1}}},"c"));
// console.log(findPath({a:{b:{d:6},c:{e:9}}},"e"));


