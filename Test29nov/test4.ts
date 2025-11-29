import replacingstr from './qn4.ts'
const testCases:ob[]=[{expected:"Hello John, you have 3 new messages.", input: { name: "John", count: 3 }},

{expected:"Hello mary, you have 3 new messages.", input: { name: "mary", count: 3 }},

{expected:false, input: 34},
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
        const result:string | boolean =replacingstr(testCase.input);

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