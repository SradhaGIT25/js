

export default function arrayobjtoobj(array:object[]):object | boolean{
    if(!Array.isArray(array) || array.length===0 || array===null || array===undefined){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="object"){
                return false;
            }
        }
        let obj:object={};
for(let i=0;i<array.length;i++){
    obj[array[i].key]=array[i].value;
    }
return (obj);
}
    }

// console.log(arrayobjtoobj([{key: "a", value: 1}, {key: "b", value: 2}]))
// console.log(arrayobjtoobj([{key: "x", value: "uff"}, {key: "y", value: "uyghg"}]))
// console.log(arrayobjtoobj([{key: 1, value: "uff"}, {key: 2, value: "uyghg"}]))