import AnalyzeHeatmap from './qn2.ts'

const testCases: obj[]=[{expected : {
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 33.7,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 1, 0 ]
}  , input : [[30,32,35],[28,40,33],[31,36,38]]}, 

{expected : {
  maxTemp: 43,
  minTemp: 28,
  averageTemp: 34.8,
  hottestPoint: [ 1, 2 ],
  coldestPoint: [ 1, 0 ]
}  , input :[[30,32,35],[28,40,43],[31,36,38]]},

{expected :  {
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 34.4,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 1, 0 ]
} , input : [[30,32,35],[28,40,40],[31,36,38]]},

{expected :  {
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 34,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 0, 1 ]
} , input : [[30,28,35],[28,40,40],[31,36,38]] },

{expected :  {
  maxTemp: 40,
  minTemp: -32,
  averageTemp: 27.3,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 0, 1 ]
} , input : [[30,-32,35],[28,40,40],[31,36,38]]},

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
    expected : obje | boolean;
}

type obje={
    maxTemp : number,
    minTemp : number,
    averageTemp : number,
    hottestPoint : number[],
    coldestPoint : number[]
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | obje =  AnalyzeHeatmap(testCase.input);

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
      if (!objectEquality(result,testCase.expected)) {
      console.log(`test ${index + 1} failed`);
    } 
}
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