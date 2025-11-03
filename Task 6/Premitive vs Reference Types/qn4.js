// [ ] Write a function  addItem(arr, item)  that returns a new array with the item added (don’t mutate the original).

function addItem(arr,item){
    let newarr=[...arr,item];
    return newarr;
}
let arr=[1,2,3,4,5]

console.log(addItem(arr,6))
console.log(arr);
