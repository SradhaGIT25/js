

export default function objtoquery(obj:object):string | boolean{
    if(typeof obj !== "object" || obj===null || obj===undefined || Array.isArray(obj)){
        return false;
    }
    else{
        let result:string=""
    for(let [key,value] of Object.entries(obj)){
        result+="&"+key+"="+value
    }
    return result.slice(1);
    }
    
}
console.log(objtoquery({name:"John", age:30}))