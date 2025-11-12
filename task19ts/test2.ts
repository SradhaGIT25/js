const testCases: obj[]=[{expected : [{score:100,rank:1},
                        {score:100,rank:1},
                        {score:90,rank:2},
                        {score:80,rank:3}]  , input1 : [[1,0,0],[1,0,1],[1,0,0],[0,0,0],[0,1,0]] , input2 : 5},                           
{expected : [
  { score: 200, rank: 1 },
  { score: 100, rank: 2 },
  { score: 100, rank: 2 },
  { score: 90, rank: 3 },
  { score: 80, rank: 4 },
  { score: 78, rank: 5 },
  { score: 53, rank: 6 },
  { score: 45, rank: 7 }
] , input1 :[[0,0,1],[1,0,1],[1,1,1]], inptu2 :5},
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
] , input1 : [[0,0,0],[1,0,1],[1,1,1]] , input2 : 5},


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
] , input1 :[100,100,90,80,78,200,45,53,0] },
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
] , input1 : [100,100,90,80,78,200,45,53,-1]},

{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] , input2 : [] },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] , input2 : "5"},
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : 5 },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : ["1","2","3","4"]},
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : "" },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : ["1,2,3,4"]},
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : true },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : [0] },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : false },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : -3},
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : {} },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : {[]} },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : 0 },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : undefined },
{expected :  false , input1:[[0,0,0],[1,0,1],[1,1,1]] ,  input2 : null },
{expected :  false  , input1 : [] , input2 :5},
{expected :  false  , input1 : "5" , input2 :5},
{expected :  false  ,  input1 : 5  , input2 :5},
{expected :  false  ,  input1 : ["1","2","3","4"] , input2 :5},
{expected :  false  ,  input1 : "" , input2 :5 },
{expected :  false  ,  input1 : ["1,2,3,4"] , input2 :5},
{expected :  false  ,  input1 : true  , input2 :5},
{expected :  false  ,  input1 : [0]  , input2 :5},
{expected :  false  ,  input1 : false  , input2 :5},
{expected :  false  ,  input1 : -3 , input2 :5},
{expected :  false  ,  input1 : {}  , input2 :5},
{expected :  false  ,  input1 : {[]}  , input2 :5},
{expected :  false  ,  input1 : 0  , input2 :5},
{expected :  false  ,  input1 : undefined  , input2 :5},
{expected :  false  ,  input1 : null  , input2 :5}]

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    output : number[][] | boolean;
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | number[][] =  FindAvailableSeats(testCase.input);

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