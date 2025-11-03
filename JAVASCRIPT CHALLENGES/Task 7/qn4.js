testCases = [{ expected : [ 'A ', 'B B ', 'C C C ', 'D D D D ', 'E E E E E ' ], input: 5 },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
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
    const result = printPattern(testCase.input);
            
    console.log(result , " " , testCase.expected)
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function printPattern(num){
    if(typeof num !== "number" || num <=0 || typeof num === "object" || typeof n === "undefined" || typeof num === null){
        return false;
    }
    else{
    let n=Math.trunc(num);
        let first=65;
        let last= first + n;
        let asciiVal=[];
        let result=[];
        for(let i=first; i<=last ; i++){
            let ascii=String.fromCharCode(i);
            asciiVal.push(ascii);
        }
        // console.log(asciiVal);
 
    for(let i=0;i<n;i++){
        let str=""
        for(let j=0;j<=i;j++){
            str=str+asciiVal[i]+' '
        }
        result.push(str);
    }
    return result;
    }
}
// console.log(printPattern(5));

