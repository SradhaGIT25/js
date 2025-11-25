import intersection from './qn5.ts'

const testCases:obj[]=[{expected : [2,3], input1 : [1,2,3] , input2 : [2,3,4] },
{expected : [ 'a', 'c' ], input1 : ["a","c","d"] , input2 : ["a","b","c"] },
{expected : [1], input1 : [1,2,-3] , input2 : [1,5,62,3] },
{expected : [1,-62], input1 : [1,-622,-3] , input2 : [1,5,-62,3] },
{expected : [0], input1 : [1,0,-3] , input2 : [0,5,62,3] },
{expected :  [] ,  input1 :  [1,2,3] , input2 : [5]},
{expected :  false ,  input1 :  [1,2,3] , input2 : 5 },
{expected :  false ,  input1 :  [1,2,3] , input2 : -5 },
{expected :  false ,  input1 :  [1,2,3] , input2 : [] },
{expected :  false ,  input1 :  [1,2,3] , input2 : [{}] },
{expected :  false ,  input1 :  [1,2,3] , input2 : 5 },
{expected :  false ,  input1 :  [1,2,3] , input2 : "5"},
{expected :  false ,  input1 :  [1,2,3] , input2 : "%%&*" },
{expected :  false ,  input1 :  [1,2,3] , input2 : "-5" },
{expected :  false ,  input1 :  [1,2,3] , input2 : "" },
{expected :  false ,  input1 :  [1,2,3] , input2 : true },
{expected :  false ,  input1 :  [1,2,3] , input2 : false },
{expected :  false ,  input1 :  [1,2,3] , input2 : {} },
{expected :  false ,  input1 :  [1,2,3] , input2 : "dwsyd"},
{expected :  false ,  input1 :  [1,2,3] , input2 : "whgsdh454" },
{expected :  false ,  input1 :  [1,2,3] , input2 : "whgsd#$%$" },
{expected :  false ,  input1 :  [1,2,3] , input2 : "gghg36#$%$" },
{expected :  false ,  input1 :  [1,2,3] , input2 : null },
{expected :  false ,  input1 :  [1,2,3] , input2 : undefined },
{expected :  false ,  input1 :  [[0]] , input2 : [1,2,3] },
{expected :  [] ,  input1 :  [0] , input2 : [1,2,3] },
{expected :  false ,  input1 :  [{}] , input2 : [1,2,3] },
{expected :  false ,  input1 :  [[2],[3],[5]] , input2 : [1,2,3] },
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
{expected :  false ,  input1 :  "dwsyd" , input2 : [1,2,3] },
{expected :  false ,  input1 :  "whgsdh454" , input2 : [1,2,3] },
{expected :  false ,  input1 :  "whgsd#$%$" , input2 : [1,2,3] }];

type obj={
    input1:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    input2:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: number[] | string[] | boolean
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:number[] | string[] | boolean = intersection(testCase.input1,testCase.input2);

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