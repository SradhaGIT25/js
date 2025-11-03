// testCases=[{expected : true , input:16},{expected : false , input: 10} , {expected : true , input:25}];
testCases = [{ expected : true, input: 4 },
     { expected : false, input : 11 }, 
     { expected : false, input : 22 },
     { expected : true, input : 81 },
     { expected : false, input : "string"},
     { expected : false, input : [] },
     { expected : false, input : -49 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : null},
     { expected : false, input : undefined},
     { expected : false, input : " " },
     { expected : false, input : {} },
     { expected : false, input : {64:16} },
     { expected : false, input : 0 },
     { expected : false, input :  null},
     { expected : false, input : 10 },
     { expected : false, input : [36] },
     { expected : true , input : 25}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = perfectSquare(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}


function perfectSquare(number){
    if(typeof number !== "number" || number === null || number === undefined){
        return false;
    }
    else{
        let root=Math.sqrt(number);
        console.log(root);
    if(number%root==0){
        return true;
    }
    else{
        return false;
    }
}
    }

// console.log(perfectSquare(number))