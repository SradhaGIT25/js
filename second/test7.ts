import romanToInteger from './qn7.ts'
const testCases:obj[]= [{ expected : 10 , input: "X" }, 
{ expected : 100 , input : "C" } ,
{ expected : 200 , input : "CC" } ,
{ expected : false , input : "cc" } ,
{ expected : false, input : -"sgfu" } ,
{ expected : false , input : -3 } ,
{ expected : false, input : [] } ,
{ expected : false, input : [3, 10, 25, 30, 12, 50] } ,
{ expected : false, input : [-2,0,2,6,-18,8] } ,
{ expected : false , input : "string" }]

type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: boolean | number,
}

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result:boolean | number = romanToInteger(testCase.input);

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