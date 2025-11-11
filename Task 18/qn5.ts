testCases=[{expected : [ [ 7, 3 ], [ 2, 7 ], [ 4, 1, 2 ], [ 1, 2, 3 ] ]  , input1 : [[1,2,3],[4,1,2],[2,7],[7,3]]},
{expected : [ [ 2, 7 ], [ 4, 1, 2 ], [ 1, 2, 3 ], [] ]  , input1 :[[1,2,3],[4,1,2],[2,7],[]]},
{expected :  [ [ 2, 7 ], [ 4, 1, 2 ], [ 1, 2, 3 ], [ 0 ] ] , input1 : [[1,2,3],[4,1,2],[2,7],[0]]},
{expected :  [ [ 2, 7 ], [ 4, 1, 2 ], [ 1, 2, 3 ], [ -2 ] ] , input1 : [[1,2,3],[4,1,2],[2,7],[-2]]},
{expected :  false , input1 : [1,2,3,4]},
{expected :  false , input1 : [] },
{expected :  false , input1 : []},
{expected :  false , input1 : [1,2,3,4]},
{expected :  false , input1 : "5"},
{expected :  false , input1 : "5" },
{expected :  false , input1 : [1,2,3,4]},
{expected :  false , input1 : "" },
{expected :  false , input1 : [1,2,3,4]},
{expected :  false , input1 : true },
{expected :  false , input1 : [1,2,3,4] },
{expected :  false , input1 : false },
{expected :  false , input1 : true },
{expected :  false , input1 : false },
{expected :  false , input1 : [1,2,3,4]},
{expected :  false , input1 : {} },
{expected :  false , input1 : [1,2,3,4] },
{expected :  false , input1 : undefined },
{expected :  false , input1 : null },
{expected :  false , input1 : [1,2,3,4] },
{expected :  false , input1 : undefined },
{expected :  false , input1 : null }];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    output : number[][] | boolean;
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | number[][] = SortBySum(testCase.input);

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

function SortBySum(arr:number[][]){
    if(!Array.isArray(arr) || arr.length === 0 || arr === null || arr === undefined){
        return false;
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(!Array.isArray(arr[i])){
                return false;
            }
            for(let j=0;j<arr[i].length;j++){
                if(typeof arr[i][j] !== "number"){
                    return false;
                }
            }
        }

        function sumOf(array:number[]){
         let sum:number=0;
        for(let i=0;i<array.length;i++){
        sum=sum + array[i];
    }
    // console.log(sum)
    return (sum);
    }


for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
    if(sumOf(arr[j])<sumOf(arr[j+1])){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
}
}
return arr;
}
    }
    
// console.log(SortBySum([[1,2,3],[4,1,2],[2,7],[7,-3,3]]))
// console.log(SortBySum([[1,2,3],[4,1,2],[2,7],[]]))
// console.log(SortBySum([[1,2,3],[4,1,2],[2,7],[0]]))
// console.log(SortBySum([[1,2,3],[4,1,2],[2,7],[-2]]))