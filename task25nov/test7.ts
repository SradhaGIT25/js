import countvowel from './qn7.ts'

const testCases:obj[] = [{ expected : 3 , input:  "umbrella" },
    { expected : 2, input: "wire" },
    { expected : 3 , input:  "knee cap" },
    { expected : false, input: 0 },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : -12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : 0 , input : "11" },
     { expected : 1 , input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : 0, input : "hg56" },
     { expected : 0, input : "@@#" },
     { expected : 0, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];

     type obj={
        input:string | number | boolean | string[] | number[] | null | undefined | string[][] | number[][] | object,
        expected:number | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result:number | boolean = countvowel(testCase.input);
            
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