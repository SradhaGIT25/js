import sorting from './qn9.ts'

const testCases:obj[] = [{ expected : "unsorted" , input:  [1,-1,0,8,5] },
    { expected : "descending", input: [ 8, 5, 1, 0, -1 ] },
    { expected : "ascending", input: [ -1, 0, 1, 5, 8 ] },
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
    const result:string | boolean = sorting(testCase.input);
            
    if(typeof testCase.expected === "boolean"){
    if(result === testCase.expected){
        console.log(`test ${index + 1} passed`);
    }
    else{
        console.log(`test ${index + 1} failed`);
    }
    }
    else if(typeof testCase.expected === "string"){
        for(let i=0;i<result.length;i++){
        if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
    }
     console.log(`test ${index + 1} passed`);
    }
  });
}