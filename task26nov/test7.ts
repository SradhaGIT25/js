import  convertquerytoobj from './qn7.ts'

const testCases:obj[]=[{expected :  {name: "John", age: "20", active: "true"} , input :   "?name=John&age=20&active=true" },
{expected :  [ 'name', 'place' ] ,  input : {name: "Titan", place: "mars"}},
{expected :  false ,  input : "string"},
{expected :  false ,  input : "hg575"},
{expected :  false ,  input : "jfjk$%$%"},
{expected :  false ,  input : "str67565$%ng"},
{expected :  false ,  input : "10"},
{expected :  false ,  input : "-10"},
{expected :  false ,  input : "0"},
{expected :  false ,  input : "string"},
{expected :  false ,  input : {}},
{expected :  false ,  input : []},
{expected :  false ,  input : [{}]},
{expected :  false ,  input : "string"},
{expected :  false ,  input : null},
{expected :  false ,  input : undefined},
{expected :  false ,  input : true},
{expected :  false ,  input : false},
{expected :  false ,  input : ["string"]},
{expected :  false ,  input : [1,2,3]},
{expected :  false ,  input : ["1","2","3"]},
{expected :  false ,  input : ["-1","-2","=3"]},
{expected :  false ,  input : ["1dqwed","2qdq2","3qwd2131"]},
{expected :  false ,  input : ["1dxkghqw$%%","2HJfh%^^&","3HJJH*&^&564"]}];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: object |  boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:object | boolean = convertquerytoobj(testCase.input);

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
    if(typeof obj1!=="object" || typeof obj2!=="object" || Object.entries(obj1).length===0 || Object.entries(obj2).length===0){
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
