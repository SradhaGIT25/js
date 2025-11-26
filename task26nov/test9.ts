import  mergeDupli from './qn9.ts'

const testCases:obj[]=[{expected :  [ { id: 1, value: 25 }, { id: 2, value: 20 } ] , input1 :   [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ] , input2 : "id"},
{expected :  false , input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ], input2 : {}},
{expected :  false , input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ], input2 : []},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : [{}]},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : "string"},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : null},
{expected :  false , input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ], input2 : undefined},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : true},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : false},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : ["string"]},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : [1,2,3]},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : ["1","2","3"]},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : ["-1","-2","=3"]},
{expected :  false ,input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ],  input2 : ["1dqwed","2qdq2","3qwd2131"]},
{expected :  false , input1 : [
   {id: 1, value: 10},
   {id: 2, value: 20},
   {id: 1, value: 15}
 ], input2 : ["1dxkghqw$%%","2HJfh%^^&","3HJJH*&^&564"]}];

type obj={
    input1:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    input2:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: object[] |  boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:object | boolean = mergeDupli(testCase.input1,testCase.input2);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if (typeof testCase.expected === "object") {
            for(let i=0;i<result.length;i++){
                if (objectEquality(result[i], testCase.expected[i]) === "equal" || (objectEquality(result, testCase.expected) === false)) {
                console.log(`test  ${index + 1}  passed`);
            }
            else {
                console.log(`test ${index + 1} " failed`);
            }
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