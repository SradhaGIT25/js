

export default function convertquerytoobj(query:string):object | boolean{
    if(typeof query !== "string" || query.length===0 || query === null || query === undefined || (!query.includes("&")) || (!query.includes("="))){
        return false;
    }
    else{
        let obj:object={}
    let str:string=query.replaceAll("?","");
let mainarray:string[]=str.split("&")

for(let i=0;i<mainarray.length;i++){
   let element:string[]=mainarray[i].split("=")
   for(let j=0;j<element.length;j++){
    if(element[j+1] !== undefined){
        obj[element[j]]=element[j+1];
    }
   }
}
return obj;
    }
    
}
// console.log(convertquerytoobj("?name=John&age=20&active=true"));