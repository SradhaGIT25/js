import addSeparator from "./qn3.ts";

const testCases:obj[]=[{expected :"12,34,567" , input : 1234567 },
{expected : "1,23,45,678" , input :  12345678 },
{expected : "12,34,56,789", input : 123456789 },
{expected : "1,234", input : 1234},
{expected : false, input : [1,0,-3]},
{expected :  false ,  input :  "[1]"},
{expected :  false ,  input :  [[0]]},
{expected :  false ,  input :  [0]},
{expected :  false ,  input :  [{}]},
{expected :  false ,  input :  [[2],[3],[5]]},
{expected :  false ,  input :  ["(",")","(",")"]},
{expected :  false ,  input :  "ybcd"},
{expected :  false ,  input :  "a(v)"},
{expected :  false ,  input :  ""},
{expected :  false ,  input :  {}},
{expected :  false ,  input :  [] },
{expected :  false ,  input :  true},
{expected :  false ,  input :  false},
{expected :  false ,  input :  null},
{expected :  false ,  input :  undefined},
{expected :  false ,  input :  "dwsyd"},
{expected :  false ,  input :  "whgsdh454"},
{expected :  false ,  input :  "whgsd#$%$"},
{expected :  false ,  input :  ["1"]}];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: string | boolean
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:string | boolean = addSeparator(testCase.input);

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
        }
    );
}