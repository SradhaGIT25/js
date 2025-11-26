



export default function mergeDupli(array:object[],key:string):object[]|boolean{
    if(!Array.isArray(array) || array.length===0 || array===null || array===undefined || typeof key !== "string"){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="object" || Array.isArray(array[i]) || array[i]===null || array[i]===undefined){
                return false;
            }
        }
        array.sort((a,b)=>{
if(a[key]>b[key]) return 1;
if(a[key]<b[key]) return -1;
// console.log(array)
return 0;
    });

let result:object[]=[];
let indexes:number[]=[];
for(let i=0;i<array.length-1;i++){
        if(array[i][key]===array[i+1][key]){
            let obj={}
            obj[key]=array[i][key];
            obj.value=array[i].value+array[i+1].value;

            if(!indexes.includes(i) && !indexes.includes(i+1)){
                result.push(obj);
                indexes.push(i,i+1);
            }
            }
            else if(!indexes.includes(i)){
                result.push(array[i]);
                indexes.push(i);
            }
        }
            if(!indexes.includes(array.length-1)){
                result.push(array[array.length-1]);
            }
            return result;
            // fval=array[i].value+array[i+1].value;
}
    }
   
// console.log(mergeDupli([
//    {id: 1, value: 10},
//    {id: 2, value: 20},
//    {id: 1, value: 15}
//  ],"id"));

 