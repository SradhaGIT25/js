function flattening(obj:object){
  let arr=[]
  let array=[]
  let newArray=[]
  let pattern=/[A-Za-z]/
  arr=Object.entries(obj);
// console.log(arr)
for(let i=0;i<arr.length;i++){
    if(pattern.test(arr[i])){
        array.push(arr[i]);
        console.log(array)
        for(let j=0;j<arr[i];j++){
            if(pattern.test(arr[i][j])){
                newArray.push(arr[i][j]);
                console.log(newArray)
            }
        }
        
    }
    // else if(typeof arr[i]==="object"){
    //     array.push(arr[i][key]);
    // }
}
// console.log(array)
}
console.log(flattening({a:{b:{c:1}}, d:2}))





































































