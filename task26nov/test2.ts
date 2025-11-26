import rotateArray from './qn2.ts'

const testCases:obj[]=[{expected : [ 4, 5, 1, 2, 3 ], input1 : [1,2,3,4,5] , input2 : 2 },
{expected : [ 3, 4, 5, 1, 2 ], input1 : [1,2,3,4,5] , input2 : 3 },
{expected : [ 1, 2, 3, 4, 5 ], input1 : [ 1, 2, 3, 4, 5 ] , input2 : 0 },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "0" },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "-1" }
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "1" }
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : -1 },
{expected : false, input1 : 1 , input2 : 1},
{expected : false, input1 : "1" , input2 : 1 },
{expected : false, input1 : "-1" , input2 : 1 },
{expected : false, input1 : "cjhvd" , input2 : 1 },
{expected : false, input1 : "6352eyqwui" , input2 : 1 },
{expected : false, input1 : "hsjkqgs#$%" , input2 : 1 },
{expected : false, input1 : "3478527qwgkqw%^&&" , input2 : 1 },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "qvwdjhq" },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "wgdgk6235" },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "wfghgk#%^" },
{expected : false, input1 : [ 1, 2, 3, 4, 5 ] , input2 : "wdfg6735$%%^" },
{expected :  false ,  input1 :  [1,2,3] , input2 : [5]},
{expected :  false ,  input1 :  [1,2,3] , input2 : [] },
{expected :  false ,  input1 :  [1,2,3] , input2 : [{}] },
{expected :  false ,  input1 :  [1,2,3] , input2 : "%%&*" },
{expected :  false ,  input1 :  [1,2,3] , input2 : "" },
{expected :  false ,  input1 :  [1,2,3] , input2 : true },
{expected :  false ,  input1 :  [1,2,3] , input2 : false },
{expected :  false ,  input1 :  [1,2,3] , input2 : {} },
{expected :  false ,  input1 :  [1,2,3] , input2 : null },
{expected :  false ,  input1 :  [1,2,3] , input2 : undefined },
{expected :  false ,  input1 :  ["[1]","[-2,-1]","[0,-3,6]","[2,0,1,-3]"] , input2 : [1,2,3]},
{expected :  false ,  input1 :  [[0]] , input2 : [1,2,3] },
{expected :  false ,  input1 :  [{}] , input2 : [1,2,3] },
{expected :  false ,  input1 :  [[2],[3],[5]] , input2 : [1,2,3] },
{expected :  false ,  input1 :  ["(",")","(",")"] , input2 : [1,2,3] },
{expected :  false ,  input1 :  "ybcd" , input2 : [1,2,3] },
{expected :  false ,  input1 :  "a(v)" , input2 : [1,2,3] },
{expected :  false ,  input1 :  ""  , input2 : [1,2,3] },
{expected :  false ,  input1 :  {}  , input2 : [1,2,3] },
{expected :  false ,  input1 :  2  , input2 : [1,2,3] },
{expected :  false ,  input1 :  -2  , input2 : [1,2,3] },
{expected :  false ,  input1 :  []  , input2 : [1,2,3] },
{expected :  false ,  input1 :  true , input2 : [1,2,3] },
{expected :  false ,  input1 :  false , input2 : [1,2,3] },
{expected :  false ,  input1 :  null , input2 : [1,2,3] },
{expected :  false ,  input1 :  undefined , input2 : [1,2,3] },
{expected :  false ,  input1 :  ["1"] , input2 : [1,2,3] }];

type obj={
    input1:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    input2:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: number[] | string[] | boolean
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:number[]| string[] | boolean = rotateArray(testCase.input1,testCase.input2);

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


