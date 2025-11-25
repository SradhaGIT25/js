import  DeepEqual from './qn10.ts'

const testCases:obj[]=[{expected :  true ,  input1 :   {a:1, b:{c:2}}, input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  [1, [2]],   input2 :[1, [2, 3]]},
{expected :  false ,  input1 :  "ywgdcfiwgi" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  "15" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  "-15" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  "0" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  "#$^%" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  "18275172" , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  ""  , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  2 , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  -2 , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  [] , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  true , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  false , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  null , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  undefined , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  [2,3,5] , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  ["23","34"] , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  [23,"34"] , input2 :{a:1, b:{c:2}}},
{expected :  false ,  input1 :  [0] , input2 :{a:1, b:{c:2}}}];

type obj={
    input1:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    input2: string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: object| number[] | boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:object| number[] | boolean = DeepEqual(testCase.input1, testCase.input2);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if (typeof testCase.expected === "object") {
            if (objectEquality(result, testCase.expected) === "equal" || (objectEquality(result, testCase.expected) === false)) {
                console.log(`test  ${index + 1}  passed`);
            }
            else {
                console.log(`test ${index + 1} " failed`);
            }
        }
    });
}

function objectEquality(obj1:object,obj2:object):string{
    if(typeof obj1!=="object" || typeof obj2!=="object" || Object.entries(obj).length===0){
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
        return "not equal";
        }
    }
        return "equal";
    }
    else{
        return "not equal";
    }
    }
    }