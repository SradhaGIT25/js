
export default function commonkeys(obj1:object,obj2:object):string[]|boolean{
    if(typeof obj1 !== "object" || typeof obj2 !== "object" || !Array.isArray(obj1) || !Array.isArray(obj2) || obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined || Object.entries(obj1).length===0 || Object.entries(obj2).length===0){
        return false;
    }
    else{
        let result:string[]=[]
for(const key1 in obj1){
    for(const key2 in obj2){
        if(key1===key2){
            result.push(key1);
        }
    }

}
return result;
}
    }
    
// console.log(commonkeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}));
// console.log(commonkeys({name: "Brad", age: "25" , place: "mars"}, {name: "Titan", place: "mars"}));