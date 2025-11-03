testCases = [{ expected : [2, 4, 8, 3, 1, 5], input: [3, 2, 4, 1, 5, 8] },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
     { expected : false, input : 12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
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
    const result = arrangeByParity(testCase.input);
            
    console.log(result , " " , testCase.expected)
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function arrangeByParity(numbers){
    if(!Array.isArray(numbers) || numbers.length === 0 || numbers === null || numbers === undefined){
        return false;
    }
    else{
        for(let i=0;i<numbers.length;i++){
            if(typeof numbers[i] !== "number"){
                return false;
            }
        }
        let evenNums=numbers.filter(isEven);
        let oddNums=numbers.filter(isOdd);
        let newArray=[...evenNums,...oddNums];
        return newArray;
        function isEven(element){
            return element%2==0
        }
        function isOdd(element){
            return element%2!=0
        }
        }
    }

arrangeByParity([3, 2, 4, 1, 5, 8])