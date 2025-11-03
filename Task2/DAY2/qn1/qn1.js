testCases = [{ expected : true, input: 7 },
     { expected : false, input : 10 }, 
     { expected : false, input : 22 },
     { expected : true, input : 11 },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : " " },
     { expected : false, input : {} },
     { expected : false, input : 1 },
     { expected : false, input : 0 },
     { expected : true, input : 2 },
     { expected : false, input : null },
     { expected : false, input : undefined },
     { expected : false, input : 78 },
     { expected : true , input : 29}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = arePrime(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}
function arePrime(numbers){
    if((typeof numbers !== "number") || (numbers < 2) || numbers === null || numbers === undefined){
        return false;
    }
        for(let i=2;i<numbers;i++){
            if(numbers%i==0){
                return false;
            }
    }
    return true;
    }
// console.log(arePrime("sradha"))
    

    
