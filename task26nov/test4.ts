import convertsectotime from './qn4.ts'

const testCases:obj[] = [{ expected : '2 hours 30 minutes 0 seconds 0 milliseconds'  , input:  9000 },
    { expected : '2 hours 31 minutes 39 seconds 1000 milliseconds', input: 9100 },
    { expected : '2 hours 33 minutes 20 seconds 0 milliseconds', input: 9200 },
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
        expected:string | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result: string | boolean = convertsectotime(testCase.input);
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