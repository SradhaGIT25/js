testCases=[
{expected : [1,4,9,16] , input:[1,2,3,4]},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  [456] , input: [456]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "C"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} ,
{expected : false , input:[{"CAT" : "CAT"}]}
];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = mapping(testCase.input);
        
    console.log(result);


let k=0;
for(let i=0;i<testCase.expected.length;i++){
    if (testCase.expected[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
  });
}
   


// map()
function mapping(numbers1){
    if(!Array.isArray(numbers1) || numbers1.length === 0 || numbers1 === null || numbers1 === undefined){
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



