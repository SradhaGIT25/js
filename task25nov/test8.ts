import objtoquery from './qn8.ts'

const testCases:obj[]=[{expected :  "name=John&age=30" ,  input :   {name:"John", age:30}},
{expected :  false ,  input :  "{a:{b:{c:1}}}"},
{expected :  false ,  input :  "ywgdcfiwgi"},
{expected :  false ,  input :  "15"},
{expected :  false ,  input :  "-15"},
{expected :  false ,  input :  "0"},
{expected :  false ,  input :  "#$^%"},
{expected :  false ,  input :  "18275172"},
{expected :  false ,  input :  "" },
{expected :  false ,  input :  2  },
{expected :  false ,  input :  -2 },
{expected :  false ,  input :  []},
{expected :  false ,  input :  true },
{expected :  false ,  input :  false},
{expected :  false ,  input :  null },
{expected :  false ,  input :  undefined },
{expected :  false ,  input :  [2,3,5] },
{expected :  false ,  input :  ["23","34"] },
{expected :  false ,  input :  [23,"34"] },
{expected :  false ,  input :  [0] }];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: string | boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:string | boolean = objtoquery(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if (typeof testCase.expected === "object") {
            if (objectEquality(result, testCase.expected) === true || (objectEquality(result, testCase.expected) === false)) {
                console.log(`test  ${index + 1}  passed`);
            }
            else {
                console.log(`test ${index + 1} " failed`);
            }
        }
    });
}

function objectEquality(obj1:object,obj2:object):boolean{
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
        return false;
        }
    }
        return true;
    }
    else{
        return false;
    }
    }
    }