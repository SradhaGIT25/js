import snaketocamelcase from './qn4.ts'

const testCases:obj[] = [{ expected : "helloWorldFromJs" , input:  "hello_world_from_js" },
    { expected : false, input: ["a","b","a","c","d","c","a"] },
    { expected : false , input:  ["hello_world_from_js"] },
    { expected : false, input: 0 },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : -12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : false, input : "hg56" },
     { expected : false, input : "@@#" },
     { expected : false, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];

     type obj={
        input:string | number | boolean | string[] | number[] | null | undefined | string[][] | number[][] | object,
        expected:string | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result:string | boolean = snaketocamelcase(testCase.input);
            
    if(typeof testCase.expected === "boolean"){
    if(result === testCase.expected){
        console.log(`test ${index + 1} passed`);
    }
    else{
        console.log(`test ${index + 1} failed`);
    }
    }
    else{
        for(let i=0;i<result.length;i++){
        if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
    }
     console.log(`test ${index + 1} passed`);
    }
  });
}