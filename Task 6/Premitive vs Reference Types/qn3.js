// [ ] Deep clone  { user: { name: 'John', age: 25 } }  using JSON.parse(JSON.stringify())  and verify independence

let obj1={ user: { name: 'John', age: 25 } };
let cloneobj1=JSON.parse(JSON.stringify(obj1));
console.log(cloneobj1);
if(obj1.name==cloneobj1.name && obj1.age==cloneobj1.age){
    console.log("objects are dependent")
}
else{
    console.log("objects are independent")
}