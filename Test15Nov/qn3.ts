function getValueByPath(obj,path){
let array=Object.entries(obj);
console.log(array.length)
// console.log(obj.a.b)
}
console.log(getValueByPath( { a: { b: { c: 42 } } }, "a.b.c"))