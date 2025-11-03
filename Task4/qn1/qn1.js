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

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = flattenArr(testCase.input);
            
    console.log(result , " " , testCase.expected)
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function flattenArr(array1){
    if(!Array.isArray(array1) || array1.length ===0){
        return false;
    }
    else{
        let array2=[...array1];
        let array3=array2.flat(Infinity);
        // array4=array3.flat();
        // array5=array4.flat();
        return array3;
    }

}

// console.log(flattenArr([1, [2, [3, [4]], 5]]))

