function getValueByPath(obj,path){
let array=Object.entries(obj);
console.log(array.length)
// for(let i=0;i<=array.length;i++){
    // if(path.includes(.))
    // if(typeof array[i]==="object"){
//     for(let i=0;i<path.length;i++){
//         if
//     }
//     }
// // }
// // console.log(obj.a.b)
// }
console.log(getValueByPath( { a: { b: { c: 42 } } }, "a.b.c"))