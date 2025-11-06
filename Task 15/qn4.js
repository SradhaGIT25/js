testCases=[{expected :  [1,2,4] ,  input1 :  [1,2,3] },
{expected :  [2,3,6] ,  input1 :  [2,3,5] },
{expected :   [1,0] ,  input1 :  [9]},
{expected :  [ '-', 1, 8 ] ,  input1 :  [-1,9] },
{expected :  false ,  input1 :  ["2",3,5]},
{expected :  false ,  input1 :  ["2","3","5"]},
{expected :  [1] ,  input1 :  [0]},
{expected :  false ,  input1 :  [{}]},
{expected :  false ,  input1 :  [[2],[3],[5]]},
{expected :  [2,3,3,6] ,  input1 :  [2,3,3,5]},
{expected :  false ,  input1 :  "" },
{expected :  false ,  input1 :  {} },
{expected :  false ,  input1 :  2 },
{expected :  false ,  input1 :  -2 },
{expected :  false ,  input1 :  [] },
{expected :  false ,  input1 :  true},
{expected :  false ,  input1 :  false},
{expected :  false ,  input1 :  null},
{expected :  false ,  input1 :  undefined},
{expected :  [1] ,  input1 :  [0]}];


test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = addToArray(testCase.input1,testCase.input2);

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

function addToArray(array){
     if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined ){
        return false;
    }
    else {
        for(let i=0;i<array.length;i++){
            if(typeof array[i] !== "number"){
                return false;
            }
        }
    let a=[]
    let result=[]
let str=array.toString();
str=str.replaceAll(",","");
let number=Number(str)+1;
let newStr=number.toString();
for(let i=0;i<newStr.length;i++){
    a.push(newStr[i]);
}
for(let i=0;i<a.length;i++){
    if(isNaN(Number(a[i]))){
        result.push(a[i]);
    }
    else{
        result.push(Number(a[i]));
    }
}
return result;
    }
        }
    

// console.log(addToArray([1,2,3]))
// console.log(addToArray([-1,9]))