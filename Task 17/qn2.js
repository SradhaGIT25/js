// testCases=[{expected : [ [ 2, 4 ], [ 1, 3 ] ]  , input1 : [1,2,3,4],input2  : x=>x%2===0 ,input3 : },
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
//         const result = SortByKey(testCase.input1,testCase.input2,testCase.input3);

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

function SortByKey(arr,key,order){
    let array=[]
    let newArray=[]

    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        // if(element[key])
        array.push(element[key]);
    }

    if(order==="asc"){
        array.sort((a,b)=>a-b)
    }
    else if(order==="desc"){
            array.sort((a,b)=>b-a);
        }

        for(let i=0;i<array.length;i++){
            let element=array[i];
            for(let j=0;j<arr.length;j++){
                let ele= arr[j];
                if(ele[key]===element){
                    newArray.push(ele);
                }
            }
        }
    
return newArray;
}
console.log(SortByKey([{age:30 , id:67},{age:43 , id : 44},{age:34,id : 23},{id:55},{age:20,id :56}],'age','asc'))
