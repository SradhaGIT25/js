testCases=[{expected :  2 ,  input1 :   [1,3,5,6] , input2 : 5 },
{expected :  1 ,  input1 :  [2,7,11,5] , input2 : 4 },
{expected :  false ,  input1 :  [2,3,5] , input2 : [2]},
{expected :  2 ,  input1 :  [2,7,11,5] , input2 : 2 },
{expected :  1 ,  input1 :  [-1,3,7,11,15] , input2 : 2},
{expected :  false ,  input1 :  [2,3,5] , input2: "string"},
{expected :  false ,  input1 :  [2,3,5] , input2:[]},
{expected :  false ,  input1 :  [2,3,5] , input2 : {}},
{expected :  1 ,  input1 :  [-1,1,2,7,11,15] , input2 : 0},
{expected :  false ,  input1 :  [2,3,5] , input2:true},
{expected :  false ,  input1 :  [2,3,5] , input2 : false},
{expected :  false ,  input1 :  "" , input2 : ""},
{expected :  false ,  input1 :  {}  , input2 : {}},
{expected :  false ,  input1 :  2  , input2 : 3},
{expected :  false ,  input1 :  -2 , input2 : 3},
{expected :  false ,  input1 :  [] , input2 : 2},
{expected :  false ,  input1 :  true , input2 :2},
{expected :  false ,  input1 :  false , input2 : 2},
{expected :  false ,  input1 :  [2,3,5] , input2 :null},
{expected :  false ,  input1 :  null , input2 :2},
{expected :  false ,  input1 :  [2,3,5] , input2 :undefined},
{expected :  false ,  input1 :  undefined , input2 :2},
{expected :  0 ,  input1 :  [2,3,5] , input2 :2},
{expected :  false ,  input1 :  ["23","34"] , input2 :2},
{expected :  false ,  input1 :  [23,"34"] , input2 :2},
{expected :  0 ,  input1 :  [0] , oinput2 : 0}];

test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = targetIndex(testCase.input1,testCase.input2);

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

function targetIndex(array,target){
    if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined || typeof target !== "number"){
        return false;
    }
    else {
        for(let i=0;i<array.length;i++){
            if(typeof array[i] !== "number"){
                return false;
            }
        }
    let len=array.length;
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            // console.log(i);
        }
        else{
            array.splice(len-1,0,target)
            array.sort((a,b)=>(a-b));
            return array.indexOf(target);
            }
        }                
    }
}

// console.log(targetIndex([1,3,5,6],5))
// console.log(targetIndex([1,3,5,6],2))