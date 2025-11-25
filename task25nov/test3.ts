import checkarmstrong from './qn3.ts';

const testCases:obj[] = [{ expected : true, input: 153 },
    { expected : true, input: 370 },
    { expected : true, input: 371 },
    { expected : true, input: 407 },
    { expected : true, input: 9474 },
    { expected : true, input: 153 },
     { expected : false, input : 10 }, 
    { expected : false, input : -153 }, 
     { expected : true, input : 0 },
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
        expected:boolean
     }

test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result:boolean = checkarmstrong(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}