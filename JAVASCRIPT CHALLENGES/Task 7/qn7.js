testCases = [{ expected : [1, 2, 3, 4, 5], input: [1, [2, [3, [4]], 5]] },
     { expected : ["1,2,3", "0, 7"], input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
     { expected : false, input : 12 },
     { expected : ["hguk", "hjkl"], input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : false, input : "hg56" },
     { expected : false, input : "@@#" },
     { expected : false, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];

let newArray=[];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = flattening(testCase.input);
            
    console.log(result , " " , testCase.expected)
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function flattening(array){
newArray=[];
return flattenArray(array);
// return newArray;
}

function flattenArray(array){
    if(!Array.isArray(array) || array.length === 0){
        return false;
    }
    else{
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='object'){
            flattenArray(array[i])
        }
        else{
            newArray.push(array[i]);
        }
    }
    return newArray;
    
    }
}
// console.log(flattenArray([1, [2, [3, [4]], 5]]))