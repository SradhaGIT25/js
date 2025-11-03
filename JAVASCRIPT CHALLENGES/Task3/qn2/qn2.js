testCases = [{ expected : true, input: 153 },
     { expected : false, input : 10 }, 
     { expected : true, input : 0 },
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
    const result = isArmstrong(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function isArmstrong(number){
    if(typeof number !== "number"){
        return false;
    }
    else{
        let num=number;
    let rem=0;
    let sum=0;
    while(num!=0){
        rem=Math.floor(num%10);
        sum+=rem*rem*rem;
        num=num/10;
    }
    if(sum==number){
        return true;
    }
    else{
       return false;
    }
    }
    
}
