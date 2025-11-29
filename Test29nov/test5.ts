import findAvailableSeats from './qn5.ts'
const testCases:ob[]=[{expected:[ 2, 1 ], input1: [[1,0,1],[1,1,1,],[1,0,0]] input2:2},

{expected:false, input1: [[30,32,35],[28,40,33],[31,40,38]] , input2 :"sdfuysd"},

{expected:false, input1: "dujhsdg" , input2 :2},

{expected:false, input1: 34,input2 :2},
{expected:false, input1: -34,input2 :2},
{expected:false, input1: null,input2 :2},
{expected:false, input1: "34",input2 :2},
{expected:false, input1: undefined,input2 :2},
{expected:false, input1: true,input2 :2},
{expected:false, input1: false,input2 :2},
{expected:false, input1: "wyfgwyfg",input2 :2},
{expected:false, input1: ["q","webkitURL","e"],input2 :2}]


type ob={
    input1 : string | number | boolean | string[] | number[] | string[][] | number[][] | null | undefined,
    input2 : string | number | boolean | string[] | number[] | string[][] | number[][] | null | undefined,
    expected: number[] | boolean
}

test(testCases);
function test(testCases:ob[]):void{
    testCases.forEach((testCase,index)=>{
        const result:number[] | boolean=findAvailableSeats(testCase.input1,testCase.input2);

        if(typeof result==="boolean"){
            if(result===testCase.expected){
            console.log(`test ${index+1} passed`);
        }
        else{
            console.log(`test ${index+1} passed`);
        }
        }

        else if(typeof result==="object"){
            for(let i=0;i<result.length;i++){
                if(result[i]!==testCase.expected[i]){
                    console.log(`test ${index+1} failed`);
                }
            }
                console.log(`test ${index+1} passed`);
        }
        
    });
}