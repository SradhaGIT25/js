testCases=[
    {expected : [1,4,9,16] , input:[1,2,3,4]},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456,67,3790]} , 
{expected :  false , input: "345869"} , 
{expected :  ["C"] , input: "C"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected : false , input:[{"CAT" : "CAT"}]}
];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = mapping(testCase.input);
        
    console.log(result);
// if(typeof result !== "boolean"){
    for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
   
// }
// else{
//    console.log(`test ${index + 1} failed`);
// }
  });
}

// map()
function mapping(numbers1){
    if(!Array.isArray(numbers1) || numbers1.length === 0){
        return false;
    }
    else{
        for(let i=0;i<numbers1.length;i++){
            if(typeof numbers1[i] !== "number"){
                return false;
            }
        }
        let res=[];
let number=myMap(numbers1,square);
function myMap(array1,fun){
    for(let i=0;i<=array1.length-1;i++){
    let result=fun(array1[i]);
    res.push(result);
    }
   return res;
}
return number;
function square(element){
    return Math.pow(element,2);
}
    }
}
// console.log(mapping([1,2,3,4]));

// // filter()
// let filArray=[];
// let numbers2=[1,2,3,4];
// let evenNum=myFilter(numbers2,isEven);
// console.log(evenNum)
// function myFilter(array1,fun){
// for(let i=0;i<=array1.length-1;i++){

//     if(fun(array1[i])){
//     filArray.push(array1[i]);
//     }        
// }
// console.log(filArray);
// }
// function isEven(element){
//         return element%2==0         
// }

// // reduce()
// let iniValue=0;
// let numbers3=[1,2,3,4];
// let total=myReduce(numbers3,sumOf,0);
// console.log(total)
// function myReduce(array1,fun,iniValue){
//     let value=iniValue;
// for(let i=0;i<=array1.length-1;i++){
//     value=fun(value,array1[i]);
//         }
//         console.log(value);    
// }
// function sumOf(accumulator,element){
//         return accumulator+element;
// }