import findLongestChain from './qn1.ts'
const testCases:obj[] = [{ expected :{ list: [ 1, 2, 3, 4, 6 ], length: 5 } , input: [5, 1, 2, 3, 0, 4, 6] }, 
{ expected : { list: [ 0, 2, 6, 9 ], length: 4 } , input : [7,9,0,2,6,9,2,8] } ,
{ expected : { list: [ 1, 5, 6, 7, 8 ] , length: 5 }, input : [8, 10, 1, 0, 5, 6, 7, 3, 8] } ,
{ expected : { list: [ 3, 6, 8, 9 ], length: 4 } , input : [7,10,3,1,6,8,9,3,9] } ,
{ expected : { list: [ 3, 6, 7, 8, 22 ], length: 5 }, input : [11,3,6,7,8,22,5,1] } ,
{ expected : { list: [ 2, 5, 8, 9, 24 ], length: 5 } , input : [10,2,5,8,9,24,6,1] } ,
{ expected : [], input : [] } ,
{ expected : [ 3, 10, 25, 30, 50 ], input : [3, 10, 25, 30, 12, 50] } ,
{ expected : [ -2, 0, 2, 6, 8 ], input : [-2,0,2,6,-18,8] } ,
{ expected : false , input : "string" } ,
{ expected : [ -6, 2, 4, 24 ], input : [3,-6,2,4,-6,24,-7] } ,
{ expected : false , input : 67 } ,
{ expected : [ 2, 5, 7, 8 ], input : [6, 9, 2, 0, 5, 7, 8, 2, 8] } ,
{ expected : false, input : true } , 
{ expected : [ -8, 2, 4, 24 ], input : [-8,2,4,-6,24,-7] } ,
{expected : false , input : false} ,
{expected : false , input : {}} ,
{ expected : [ 19, 40, 61, 79 ] , input : [89,19,40,61,8,79]}];

 type obje={
        list:number[],
        length:number,
    }

    type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: obje | boolean,
}

test(testCases);
function test(testCases):void {
    testCases.forEach((testCase, index) => {
    const result:obje | boolean = findLongestChain(testCase.input);

if(typeof result==="boolean"){
    if(result===testCase.expected){
      console.log(`test ${index + 1} passed`);
    } 
    else{
        console.log(`test ${index + 1} failed`);
    }     
}
else if(typeof result === "object"){
            for(let i=0;i<result.length;i++){
                if(!objectEquality(result,testCase.expected)){
                console.log(`test ${index+1} failed`);
            }
            }
            console.log(`test ${index+1} passed`);
            
        }
    })
}

function objectEquality(obj1:object,obj2:object){
    let a1=Object.entries(obj1);
    let a2=Object.entries(obj2);
    let f1=a1.flat();
    let f2=a2.flat();

    if(f1.length===f2.length){
    for(let i=0;i<f1.length;i++){
        if(!f2.includes(f1[i])){
            return false;
        }
        else{
            return true;
        }
    }
}
else{
    return false;
}
}