import DetectSymmetry from './qn1.ts'

const testCases: obj[]=[{expected : { horizontal: false, vertical: false, diagonal: false }  , input : [[1,0,0],[1,0,1],[1,1,1]]},                           
{expected : { horizontal: false, vertical: true, diagonal: true }  , input :[[1,0,1],[1,0,1],[1,1,1]]},
{expected :  { horizontal: true, vertical: true, diagonal: true } , input : [[1,1,1],[1,0,1],[1,1,1]]},
{expected :  { horizontal: true, vertical: true, diagonal: true } , input :[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]] },
{expected :  { horizontal: false, vertical: true, diagonal: true } , input : [[1,1,0,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]},
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
    expected : objec | boolean;
}
type objec={
    horizontal:boolean,
    vertical:boolean,
    diagonal:boolean,
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | objec =  DetectSymmetry(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if(typeof testCase.expected === "object"){
        // for(let i=0;i<result.length;i++){
      if (!objectEquality(result,testCase.expected)) {
      console.log(`test ${index + 1} failed`);
    } 
//   }
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}

function objectEquality(obj1:object,obj2:object){
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return false;
    }
    else{
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    if(flat1.length===flat2.length){
    for(let i=0;i<flat1.length;i++){
    if(!flat2.includes(flat1[i])){     
        return "Not Equal";
        }
    }
        return "Equal";
    }
    else{
        return "Not Equal";
    }
    }
    }
    