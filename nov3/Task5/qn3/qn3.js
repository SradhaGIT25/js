testCases = [{ expected : [ [2, 7], [9, 1],[0, 5] ] , input: [ [2, 9, 0], [7, 1, 5] ] },
    { expected : false, input: 9 },
    { expected : false, input: 0 },
    { expected : false, input: ["twfud", "hxgjw", "hgjh"] },
    { expected : false, input: ["twt6fud", "hx5gjw", "hg45jh"] },
    { expected : false, input: ["twf@#%ud", "hxg#%^^jw", "hg%^&jh"] },
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
    const result = transposeMatrix(testCase.input);
            
    console.log(result , " " , testCase.expected)

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
    let res=result[i]
    for(let j=0;i<res[j].length;j++){
        if (res[j] !== testCase.expected[j]) {
      console.log(`test ${index + 1} failed`);
    } 
    }
  }
      console.log(`test ${index + 1} passed`);
    }
  
  });
}

function transposeMatrix(array1){
    if(!Array.isArray(array1) || array1.length === 0 || array1 === null || array1 === undefined){
        return false;
    }
    else{
        for(let i=0;i<array1.length;i++){
            if(!Array.isArray(array1[i])){
                return false;
            }
        }
        for(let i=0;i<array1.length;i++){
            let word=array1[i];
            for(let j=0;j<word.length;j++){
                if(typeof word[j] !== "number"){
                return false;
            }
            }
        }
        
        // console.log(array1)
        let len=array1[0].length;
        // console.log(len);
        let splitArray=array1.flat();
        // console.log(splitArray)
        let element1=""
        let element2=""
        let newArray=[]
        for(let i=0;i<splitArray.length-len;i++){
            element1=splitArray[i];
            element2=splitArray[i+len];
        newArray[i]=[element1,element2]
        }
        // console.log(newArray)
        return (newArray);
            }
        }
        // console.log(transposeMatrix([ [2, 9, 0], [7, 1, 5] ]))
// let array1=[ [2, 9, 0,1], 
//          [7, 1, 5,4] ]
