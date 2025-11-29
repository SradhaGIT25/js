import convertbytestokb from './qn3.ts'
const testCases:ob[]=[{expected:"1.46 KB", input: 1500},

{expected:"1.00 KB", input: 1024},

{expected:false, input: -34},
{expected:false, input: null},
{expected:false, input: "34"},
{expected:false, input: undefined},
{expected:false, input: true},
{expected:false, input: false},
{expected:false, input: "wyfgwyfg"},
{expected:false, input: ["q","webkitURL","e"]}]


type ob={
    input : string | number | boolean | string[] | number[] | string[][] | number[][] | null | undefined,
    expected: string | boolean
}
type objec={
    name:string,
    count:number,
}
test(testCases);
function test(testCases:ob[]):void{
    testCases.forEach((testCase,index)=>{
        const result:string | boolean =convertbytestokb(testCase.input);

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