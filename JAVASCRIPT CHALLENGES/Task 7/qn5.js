testCases = [{ expected : [23,45,12,90], input: [23,9,45,12,90,10] },
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
      { expected : false, input : "[23,9,45,12,90,10]" },
     { expected : false, input : undefined },
     { expected : false , input : null}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = filtering(testCase.input);
            
    console.log(result , " " , testCase.expected)
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function filtering(numbers2){
  if(!Array.isArray(numbers2) || numbers2.length === 0 || numbers2 === null || numbers2 === undefined){
        return false;
    }
    else{
        for(let i=0;i<numbers2.length;i++){
            if(typeof numbers2[i] !== "number"){
                return false;
            }
        }
        let filArray=[];
        let Num=myFilter(numbers2,printNum);
        return Num;
        function myFilter(array1,fun){
        for(let i=0;i<=array1.length-1;i++){

            if(fun(array1[i])){
            filArray.push(array1[i]);
            }        
        }
        return (filArray);
        }
        function printNum(element){
                return element>10        
        }
            }
        }
