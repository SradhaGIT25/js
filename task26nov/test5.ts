import sumofunique from './qn5.ts'

const testCases:obj[] = [{ expected : 4  , input: [1,2,3,2] },
    { expected : 1, input: [1,2,3,3,2] },
    { expected : 3, input: [1,2,3,-1,2] },
    { expected : false, input: 1},
    { expected : false, input: -1},
    { expected : false, input: 0},
    { expected : false, input: 1.53},
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : false, input : "hg56" },
     { expected : false, input : "@@#" },
     { expected : false, input : "@##$S" },
     { expected : false, input : undefined },
     { expected : false , input : null}];

     type obj={
        input:string | number | boolean | string[] | number[] | null | undefined | string[][] | number[][] | object,
        expected: number | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result: number | boolean = sumofunique(testCase.input);
            let k=0;
    if(result === testCase.expected){
        console.log(`test ${index + 1} passed`);
    }
    else{
        console.log(`test ${index + 1} failed`);
    }
  });
}