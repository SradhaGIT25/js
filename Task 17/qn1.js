// testCases=[{expected : [ [ 2, 4 ], [ 1, 3 ] ]  , input1 : [1,2,3,4],input2  : x=>x%2===0 },
// {expected : [ [ 3 ], [ 1, 2 , 4 ] ]  , input1 : [1,2,3,4],input2  : x=>x%3===0 },
// {expected :  false , input1 : [1,2,3,4] ,input2  : 4 },
// {expected :  false , input1 : [1,2,3,4] ,input2  : [4] },
// {expected :  false , input1 : [1,2,3,4] ,input2  : [] },
// {expected :  false , input1 : [] ,input2  : x=>x%3===0 },
// {expected :  false , input1 : [] ,input2  : [] },
// {expected :  false , input1 : [1,2,3,4] ,input2  : "4" },
// {expected :  false , input1 : "5" ,input2  : "4" },
// {expected :  false , input1 : "5" ,input2  : x=>x%3===0 },
// {expected :  false , input1 : [1,2,3,4] ,input2  : "" },
// {expected :  false , input1 : "" ,input2  : x=>x%3===0 },
// {expected :  false , input1 : [1,2,3,4] , input2  : true },
// {expected :  false , input1 : true ,input2  :x=>x%3===0 },
// {expected :  false , input1 : [1,2,3,4] ,input2  : false },
// {expected :  false , input1 : false ,input2  : x=>x%3===0 },
// {expected :  false , input1 : true ,input2  : true },
// {expected :  false , input1 : false ,input2  : false },
// {expected :  false , input1 : [1,2,3,4] ,input2  : {} },
// {expected :  false , input1 : {} ,input2  : x=>x%3===0 },
// {expected :  false , input1 : {} ,input2  : {} },
// {expected :  false , input1 : [1,2,3,4] ,input2  : null },
// {expected :  false , input1 : undefined ,input2  : x=>x%3===0 },
// {expected :  false , input1 : null ,input2  :x=>x%3===0 },
// {expected :  false , input1 : [1,2,3,4] ,input2  : undefined },
// {expected :  false , input1 : undefined ,input2  : undefined },
// {expected :  false , input1 : null ,input2  : null }];


// test(testCases);
// function test(testCases){
//     testCases.forEach((testCase,index) =>{
//         const result = Partititon(testCase.input1,testCase.input2);

//         if(typeof testCase.expected === "boolean"){
//             if(result === testCase.expected){
//                 console.log(`test ${index + 1} passed`);
//             }
//             else{
//                 console.log(`test ${index + 1} failed`);
//             }
//         }
//         else{
//         for(let i=0;i<result.length;i++){
//       if (result[i] !== testCase.expected[i]) {
//       console.log(`test ${index + 1} failed`);
//     } 
//   }
//       console.log(`test ${index + 1} passed`);
//   }
//         }
//     );
// }


function Partititon(arr,fn){ 
    if(!Array.isArray(arr) || arr === null || arr === undefined || arr.length === 0 || fn === null || fn === undefined || typeof fn === "string" || typeof fn === "number" || typeof fn === "object" || typeof fn === "boolean") {
        return false;
    }
    else{
        let newArray1=[];
        let newArray2=[];
        let mainArray=[];
        for(let i=0;i<arr.length;i++){
            if(typeof arr[i] !== "number"){
                return false;
            }
        }
        for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            newArray1.push(arr[i])
        }
        else{
            newArray2.push(arr[i])
        }
    }
    mainArray.push(newArray1);
    mainArray.push(newArray2);
    return mainArray;

    }
    
}
console.log(Partititon(["1gsdfhj","2qwyqwpodi","3qdqwd","4qdqwdq"],x => x % 2 === 0))