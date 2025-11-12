import DetectSymmetry from './qn3.ts'

const testCases: obj[]=[{expected : [{score:100,rank:1},
                        {score:100,rank:1},
                        {score:90,rank:2},
                        {score:80,rank:3}]  , input : [100,100,90,80]},                           
{expected : [
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 100, rank: 2 },
  { score: 90, rank: 3 },
  { score: 80, rank: 4 },
  { score: 78, rank: 5 },
  { score: 53, rank: 6 },
  { score: 45, rank: 7 }
] , input :[100,100,90,80,78,200,45,53]},
{expected :  [
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 100, rank: 2 },
  { score: 90, rank: 3 },
  { score: 80, rank: 4 },
  { score: 78, rank: 5 },
  { score: 53, rank: 6 },
  { score: 53, rank: 6 },
  { score: 45, rank: 7 }
] , input : [100,100,90,80,78,200,45,53,53]},
{expected :  [
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 100, rank: 2 },
  { score: 90, rank: 3 },
  { score: 80, rank: 4 },
  { score: 78, rank: 5 },
  { score: 53, rank: 6 },
  { score: 45, rank: 7 },
  { score: 0, rank: 8 }
] , input :[100,100,90,80,78,200,45,53,0] },
{expected :  [
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 100, rank: 2 },
  { score: 90, rank: 3 },
  { score: 80, rank: 4 },
  { score: 78, rank: 5 },
  { score: 53, rank: 6 },
  { score: 45, rank: 7 },
  { score: -1, rank: 8 }
] , input : [100,100,90,80,78,200,45,53,-1]},

{expected :  false , input : [] },
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
    expected :  boolean | obje[];
}
type obje={
    score:number,
    rank:number,
}


test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | obje[] =  DetectSymmetry(testCase.input);

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
    