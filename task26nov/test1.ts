import celciustofaren from './qn1.ts'

const testCases:obj[] = [{ expected : '32.00'  , input:  0 },
    { expected : '-459.67', input: -273.15 },
    { expected : '-58.00', input: -50 },
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
        expected: number| string | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result: number| string | boolean = celciustofaren(testCase.input);
            let k=0;
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