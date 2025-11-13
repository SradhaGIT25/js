import TeamSelection from './qn1.ts'

const testCases: string[][]=[{expected : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]
]  , input1 : ["sradha","meera","nadha","reshma","sreepriya"] , input2 : 2}, 

{expected : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'nadha', 'reshma' ]
]  , input1 :["sradha","meera","nadha","reshma"] , input2 : 2},

{expected :  false , input1 : []  , input2 : 2},
{expected :  false , input1 : [1,2,3,4] , input2 : 2},
{expected :  false , input1 : "5" , input2 : 2},
{expected :  false , input1 : 5  , input2 : 2},
{expected :  false , input1 : ["1","2","3","4"] , input2 : 2},
{expected :  false , input1 : ""  , input2 : 2},
{expected :  false , input1 : ["1,2,3,4"] , input2 : 2},
{expected :  false , input1 : true  , input2 : 2},
{expected :  false , input1 : [0]  , input2 : 2},
{expected :  false , input1 : false  , input2 : 2},
{expected :  false , input1 : -3 , input2 : 2},
{expected :  false , input1 : {}  , input2 : 2},
{expected :  false , input1 : 0  , input2 : 2},
{expected :  false , input1 : undefined  , input2 : 2},
{expected :  false , input1 : null  , input2 : 2},

{expected :  false , input2 : []  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : [1,2,3,4] , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : "5" , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : 5  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : ["1","2","3","4"] , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : ""  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : ["1,2,3,4"] , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : true  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : [0]  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : false  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : -3 , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : {}  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : 0  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : undefined  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]},
{expected :  false , input2 : null  , input1 : [
  [ 'sradha', 'meera' ],
  [ 'sradha', 'nadha' ],
  [ 'sradha', 'reshma' ],
  [ 'sradha', 'sreepriya' ],
  [ 'meera', 'nadha' ],
  [ 'meera', 'reshma' ],
  [ 'meera', 'sreepriya' ],
  [ 'nadha', 'reshma' ],
  [ 'nadha', 'sreepriya' ],
  [ 'reshma', 'sreepriya' ]]}];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    expected : string[][] | boolean;
}


test(testCases);
function test(testCases: string[]):void{
    testCases.forEach((testCase,index) =>{
        const result: boolean |string[][] =  TeamSelection(testCase.input1,testCase.input2);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }

        else if(typeof testCase.expected === "string"){
            for(let i=0;i<result.length;i++){
                for(let j=0;j<result[i].length;j++){
                    if (result[i][j]!==testCase.expected[i][j]){
             console.log(`test ${index + 1} failed`);
    } 
}
}
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}
                
      