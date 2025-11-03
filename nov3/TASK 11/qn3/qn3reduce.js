// // filter()
testCases=[
{expected : 10 , input:[1,2,3,4]},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  456 , input: [456]} , 
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
    const result = reducing(testCase.input);
        
    console.log(result);

  console.log(testCase.expected , " " , result )
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
   

function reducing(numbers3){
    if(!Array.isArray(numbers3) || numbers3.length === 0 || numbers3 === null || numbers3 === undefined){
        return false;
    }
    else{
        for(let i=0;i<numbers3.length;i++){
            if(typeof numbers3[i] !== "number"){
                return false;
            }
        }
        // // reduce()
        let iniValue=0;
        let total=myReduce(numbers3,sumOf,0);
        return (total)
        function myReduce(array1,fun,iniValue){
            let value=iniValue;
        for(let i=0;i<=array1.length-1;i++){
            value=fun(value,array1[i]);
                }
                return (value);    
        }
        function sumOf(accumulator,element){
                return accumulator+element;
        }         
        }
        }
