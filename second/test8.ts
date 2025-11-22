import isEven from './qn8.ts'
const testCases:obj[]= [{ expected : true , input: 2 }, 
{ expected : false , input : 457 } ,
{ expected : true , input : 456 } ,
{ expected : true , input : 0 } ,
{ expected : true, input : -2 } ,
{ expected : false , input : -3 } ,
{ expected : false, input : [] } ,
{ expected : false, input : [3, 10, 25, 30, 12, 50] } ,
{ expected : false, input : [-2,0,2,6,-18,8] } ,
{ expected : false , input : "string" }]

type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: boolean,
}

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = isEven(testCase.input);

if(typeof result==="boolean"){
    if(result===testCase.expected){
      console.log(`test ${index + 1} passed`);
    } 
    else{
        console.log(`test ${index + 1} failed`);
    }     
}

});
}