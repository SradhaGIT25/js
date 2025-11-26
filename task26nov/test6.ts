import  commonkeys from './qn6.ts'

const testCases:obj[]=[{expected :  [ 'name' ] , input1 :   {name: "Brad", age: "25"} , input2 : {name: "Titan", place: "mars"}},
{expected :  [ 'name', 'place' ] , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : {name: "Titan", place: "mars"}},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "string"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "hg575"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "jfjk$%$%"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "str67565$%ng"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "10"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "-10"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "0"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "string"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : {}},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : []},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : [{}]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : "string"},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : null},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : undefined},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : true},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : false},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : ["string"]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : [1,2,3]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : ["1","2","3"]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : ["-1","-2","=3"]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : ["1dqwed","2qdq2","3qwd2131"]},
{expected :  false , input1 :  {name: "Brad", age: "25" , place: "mars"} , input2 : ["1dxkghqw$%%","2HJfh%^^&","3HJJH*&^&564"]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "string"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "hg575"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "jfjk$%$%"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "str67565$%ng"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "10"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "-10"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "0"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "string"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : {}},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : []},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : [{}]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : "string"},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : null},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : undefined},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : true},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : false},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : ["string"]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : [1,2,3]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : ["1","2","3"]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : ["-1","-2","=3"]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : ["1dqwed","2qdq2","3qwd2131"]},
{expected :  false , input2 :  {name: "Brad", age: "25" , place: "mars"} ,  input1 : ["1dxkghqw$%%","2HJfh%^^&","3HJJH*&^&564"]}];

type obj={
    input1:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
       input2:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: string[] |  boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:string[] | boolean = commonkeys(testCase.input1,testCase.input2);

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