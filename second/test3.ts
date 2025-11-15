import formatTimeAgo from './qn3.ts'
const testCases:obj[] = [{ expected : Days:1 , Hours:2 , Minutes:30 , Seconds:19 , Milliseconds:95419017 time Ago
 , input:" 2025-11-14T10:33:42.718Z"
 }, 
{ expected : false , input : []} ,
{ expected : false, input : [3, 10, 25, 30, 12, 50] } ,
{ expected : false, input : "string"} ,
{ expected : false, input : [3, 10, 25, 30, 12, 50] , input2 : "string" } ,
{ expected : false, input : "" } ,
{ expected : false , input : "string"}];


type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: number | boolean,
}

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result:obje = formatTimeAgo(testCase.input);

if(typeof result==="boolean"){
    if(result===testCase.expected){
      console.log(`test ${index + 1} passed`);
    } 
    else{
        console.log(`test ${index + 1} failed`);
    }     
}
else{

    for(let i=0;i<result.length;i++){
    if(result[i]!==testCase.expected[i]){
      console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);  
}
});
}