import replacing from './qn8.ts'

const testCases:obj[] = [{ expected : "Room ## on floor #"  , input: "Room 45 on floor 3" },
    { expected : "############", input: "576876876876" },
     { expected : "sdkqjed ######jhsdkhsdkjn####uiehl###ryu#", input : "sdkqjed 124371jhsdkhsdkjn2373uiehl326ryu3" }, 
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : "##", input : "11" },
     { expected : "-##", input : "-11" },
     { expected : "#", input : "0" },
     { expected : "string", input : "string" },
     { expected : false, input : [] },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : "hg##", input : "hg56" },
     { expected : "@@#", input : "@@#" },
     { expected : "@##$S", input : "@##$S" },
     { expected : false, input : undefined },
     { expected : false , input : null}];

     type obj={
        input:string | number | boolean | string[] | number[] | null | undefined | string[][] | number[][] | object,
        expected: number| string | boolean
     }
    
test(testCases);
function test(testCases:obj[]):void {
    testCases.forEach((testCase, index) => {
    const result: string | boolean = replacing(testCase.input);
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