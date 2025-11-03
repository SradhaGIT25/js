testCases = [{ expected : 24, input:[1, 2, 3, 4] },
     { expected : 0  , input : [-4, -3, -2, -1, 0] }, 
     { expected : -6 , input : [-1, -2, -3, -4, -5] },
     { expected : 0 , input : [0,0,0,0] },
     { expected : 6 , input : [1,2,3] },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : null},
     { expected : false, input : undefined},
     { expected : false, input : " " },
     { expected : false, input : {} },
     { expected : false, input : ["t","i","i"] },
     { expected : false, input : 0 },
     { expected : false, input : [10] },
     { expected : 27, input : [2,3,3,3] },
     { expected : 36 , input : [3,3,3,4]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = Product(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function Product(numbers){
  if(numbers === null || numbers === undefined){
    return false;
  }
    for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i] !== "number"){
            return false;
        }
    }
    if(!Array.isArray(numbers) || numbers.length < 3){
        return false;
    }
    else{
        let sorted=numbers.sort((a,b)=>a-b);
        let maxProduct=1;
        maxProduct=numbers[numbers.length-1]*numbers[numbers.length-2]*numbers[numbers.length-3];
        return maxProduct;
    }
}


