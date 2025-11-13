import SortMixedNested from './qn3.ts'

const testCases: Array<any>=[{expected : [ 1, [ 2, [ 3, 4 ] ], 5 ]  , input : [3, [2, [5, 1]], 4]}, 

{expected : [ 0, [ 1, [ 2, 3 ] ], 5 ]  , input :[3, [2, [5, 1]], 0]},

{expected :  [ -5, [ 1, [ 2, 3 ] ], 4 ] , input : [3, [2, [-5, 1]], 4]},

{expected :  [ -5, [ 2, [ 3, 4 ] ], 4 ] , input : [3, [2, [-5, 4]], 4] },

{expected :  [ -5, [ -2, [ 1, 3 ] ], 4 ] , input : [3, [-2, [-5, 1]], 4]},

{expected :  [ -5, [ -3, [ -2, -2 ] ], 1, 3, [ 4, 5 ], 7 ] , input : [3, [-2, [-5, 1]], 4, 7, [-2, 5] , -3]},

{expected :  [ -5, [ -3, [ -2, 1 ] ], [ 3 ], [ 4, 5 ] ] , input : [3, [-2, [-5, 1]], [4] , [-3 , 5]]},

{expected :  false , input : [] },
{expected :  false , input : [1,2,3,4]},
{expected :  false , input : "5"},
{expected :  false , input : 5 },
{expected :  false , input : ["1","2","3","4"]},
{expected :  false , input : "" },
{expected :  false , input : ["1,2,3,4"]},
{expected :  false , input : true },
{expected :  false , input : [0] },
{expected :  false , input : false },
{expected :  false , input : -3},
{expected :  false , input : {} },
{expected :  false , input : 0 },
{expected :  false , input : undefined },
{expected :  false , input : null }];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    expected : Array<any> | boolean;
}


test(testCases);
function test(testCases: Array<any>):void{
    testCases.forEach((testCase,index) =>{
        const result: boolean | Array<any> =  SortMixedNested(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }

        else if(typeof testCase.expected === "object"){
            for(let i=0;i<result.length;i++){
      if (result[i]!==testCase.expected[i]){
      console.log(`test ${index + 1} failed`);
    } 
}
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}
