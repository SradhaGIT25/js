import findPrime from './qn1.ts'
const testCases:obj[]=[{expected: 2002,
      input1:[2,3,5,7,11,13],input2 : 10001}],


type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: number | boolean,
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index)=>{
        const result:obj[] | boolean = findPrime(testCase.input1,testCase.input2);

        if(typeof result === "boolean" || "number"){
            if(result===testCase.expected){
                console.log(`test ${index+1} passed`);
            }
            else{
                console.log(`test ${index+1} failed`);
            }
        }
        
    })
}