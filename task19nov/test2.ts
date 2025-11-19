import convertToObj from "./qn2.ts";

const testCases:obj[]=[{expected : { name: "John", age: "20" }, input : "name=John&age=20"},
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]]},
{expected :  false ,  input :  ["[1]","[-2,-1]","[0,-3,6]","[2,0,1,-3]"]},
{expected :  false ,  input :  [[0]]},
{expected :  false ,  input :  [0]},
{expected :  false ,  input :  [{}]},
{expected :  false ,  input :  [[2],[3],[5]]},
{expected :  false ,  input :  ["(",")","(",")"]},
// {expected :  false ,  input :  "ybcd"},
// {expected :  false ,  input :  "a(v)"},
{expected :  false ,  input :  "" },
{expected :  false ,  input :  {} },
{expected :  false ,  input :  2 },
{expected :  false ,  input :  -2 },
{expected :  false ,  input :  [] },
{expected :  false ,  input :  true},
{expected :  false ,  input :  false},
{expected :  false ,  input :  null},
{expected :  false ,  input :  undefined},
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]] },
{expected :  false ,  input :  ["1"] }];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: object | boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:object | boolean = convertToObj(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if (typeof testCase.expected==="object"{
                if (objectEquality(result,testCase.expected) === "equal" || (objectEquality(result,testCase.expected) === false) ) {
        console.log(`test ${index + 1} passed`);
    } else {
        console.log(`test ${index + 1} failed`);

    }
  });
});
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