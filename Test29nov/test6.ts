import compression from './qn6.ts'
const testCases:ob[]=[{expected:"a3b4c2",input1 : "aaabbbbcc" , input2:  "encrypt"},

{expected:"aaabbbbcc",input1 :"a3b4c2", input2: "decrypt"},

{expected:false, input1: -34 , input2 : "decrypt"},
{expected:false, input1: null, input2 : "decrypt"},
{expected:false, input1: "34", input2 : "decrypt"},
{expected:false, input1: undefined, input2 : "decrypt"},
{expected:false, input1: true, input2 : "decrypt"},
{expected:false, input1: false, input2 : "decrypt"},
{expected:false, input1: "wyfgwyfg", input2 : "decrypt"},
{expected:false, input1: ["q","webkitURL","e"], input2 : "decrypt"}]


type ob={
    input1 : string | number | boolean | string[] | number[] | string[][] | number[][] | null | undefined,
    input2 : string | number | boolean | string[] | number[] | string[][] | number[][] | null | undefined,
    expected: string | boolean
}

test(testCases);
function test(testCases:ob[]):void{
    testCases.forEach((testCase,index)=>{
        const result:string | boolean =compression(testCase.input1,testCase.input2);

        if(typeof result==="boolean"){
            if(result===testCase.expected){
            console.log(`test ${index+1} passed`);
        }
        else{
            console.log(`test ${index+1} passed`);
        }
        }

        else if(typeof result==="string"){
            for(let i=0;i<result.length;i++){
                if(result[i]!==testCase.expected[i]){
                    console.log(`test ${index+1} failed`);
                }
            }
                console.log(`test ${index+1} passed`);
        }
        
    });
}