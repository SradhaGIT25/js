testCases = [{ expected : 130, input: [[1,2,3], [0, 7]] },
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
    const result = sumArray(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}
function sumArray(array1){
    if(!Array.isArray(array1) || array1.length === 0){
        return false;
    }
    else{
        for(let i=0;i<array1.length;i++){
            if(!Array.isArray(array1[i])){
                return false;
            }
            for(let j=0;j<array1[i].length;j++){
                if(typeof array1[i][j] !== "number"){
                    return false;
                }
            }
        }
        let number=0;
        let array2=[];
        let trimmed="";
        let value="";
        // let array1=[[1,2,3],[0,7]];
        for(let i=0;i<=array1.length-1;i++){
            console.log(array1[i]);
            value=array1[i].toString();
            console.log(value);
            trimmed=value.replaceAll(",","");
            console.log(trimmed);
            number=Number(trimmed);
            console.log(number);
            array2.push(number);

        }
        console.log(array2);
        let sum=0;
        for(let j=0;j<=array2.length-1;j++){
            console.log(array2[j]);
            sum=sum+array2[j];
        }
        return sum;
            }
        }
