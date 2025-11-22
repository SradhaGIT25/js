import validMail from './qn7.ts'
const testCases:obj[]=[{expected: [4,4,5,5,3,6],
      input:[4,5,6,5,4,3]
}],


type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: number[] | boolean,
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index)=>{
        const result:obj[] | boolean = validMail(testCase.input);

        if(typeof result === "boolean"){
            if(result===testCase.expected){
                console.log(`test ${index+1} passed`);
            }
            else{
                console.log(`test ${index+1} failed`);
            }
        }
        else if(typeof result === "string"){
            for(let i=0;i<result.length;i++){
                if(result[i]!==testCase.expected[i]){
                console.log(`test ${index+1} failed`);
            }
            }
            console.log(`test ${index+1} passed`);
            
        }
    })
}