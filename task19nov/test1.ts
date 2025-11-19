import matrixRotation from "./qn1.ts";

const testCases:obj[]=[{expected : [
[7,4,1],
[8,5,2],
[9,6,3]], input : [
[1,2,3],
[4,5,6],
[7,8,9]]},
{expected :  [ [ 4, 1 ], [ 5, 2 ], [ 6, 3 ] ] ,  input :  [[1,2,3],[4,5,6]]},
{expected :  [ [ 4, 1 ], [ 5, -2 ], [ -6, 3 ] ] ,  input :  [[1,-2,3],[4,5,-6]]},
{expected :  [[0]] ,  input :  [[0]]},
{expected :  false ,  input :  [0]},
{expected :  false ,  input :  [{}]},
{expected :  false ,  input :  ["(",")","(",")"]},
{expected :  false ,  input :  "ybcd"},
{expected :  false ,  input :  "a(v)"},
{expected :  false ,  input :  "" },
{expected :  false ,  input :  {} },
{expected :  false ,  input :  2 },
{expected :  false ,  input :  -2 },
{expected :  false ,  input :  [] },
{expected :  false ,  input :  true},
{expected :  false ,  input :  false},
{expected :  false ,  input :  null},
{expected :  false ,  input :  undefined},
{expected :  false ,  input :  ["1"] }];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: number[][] | boolean
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:number[][] | boolean = matrixRotation(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else{
            let k=0;
            for(let i=0;i<result.length;i++){
                for(let j=0;j<result[i].length;j++){
      if (result[i][j] !== testCase.expected[i][j]) {
      console.log(`test ${index + 1} failed`);
    } 
  }}
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}