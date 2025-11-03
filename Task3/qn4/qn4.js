testCases = [{ expected : [1, 2, 4, 5, 6, 3] , input1: [1, 2, 3] , input2 : [4, 5, 6] , input3 : 2},
     { expected : [1, 2, 4, 5, 3], input1: [1, 2, 3] , input2 : [4, 5] , input3 : 2 }, 
     { expected : false, input1: [1, 2, 3] , input2 : [4, 5] , input3 : [2] }, 
     { expected : [1, 2, 4, 5, 3], input1: [1, 2, 3] , input2 : [4, 5] , input3 : 2 }, 
     { expected : false, input1: [1, 2, 3] , input2 : 4 , input3 : 2  },
     { expected : false,  input1: 1 , input2 : [4, 5, 6] , input3 : 2  },
     { expected : false, input1: "string" , input2 : "string" , input3 : "string"},
     { expected : false, input1: [4, 5, 6] , input2 : "string" , input3 : 2 },
     { expected : false, input1: 1 , input2 : 4 , input3 : 2 },
     { expected : false, input1: "string" , input2 : "string" , input3 : 2 },
     { expected : false, input1: false , input2 : [4, 5] , input3 : 2},
     { expected : false, input1: [4, 5] , input2 : false , input3 : 2},
     { expected : false, input1: [4, 5] , input2 : [1, 2, 3] , input3 : [1]},
     { expected : false, input1: false , input2 : false , input3 : 2},
     { expected : false, input1: "" , input2 : [1, 2, 3] , input3 : 2},
     { expected : false, input1: [1, 2, 3] , input2 : "" , input3 : 2 },
     { expected : false, input1: {} , input2 : [1, 2, 3] , input3 : 2  },
     { expected : false, input1: [1, 2, 3] , input2 : {} , input3 : 2  },
     { expected : false, input1: [1, 2, 3] , input2 : null , input3 : 2 },
     { expected : false, input1: null , input2 : [1, 2, 3] , input3 : 2  },
     { expected : false, input1: [1, 2, 3] , input2 : [1, 2, 3] , input3 : null },
     { expected : false, input1: [1, 2, 3] , input2 : [1, 2, 3] , input3 : {} },
     { expected : false, input1: [1, 2, 3] , input2 : [1, 2, 3] , input3 : -1 },
     { expected : false, input1: [1, 2, 3] , input2 : undefined , input3 : 2 },
     { expected : false, input1: undefined , input2 : [1, 2, 3] , input3 : 2  },
     { expected : false, input1: [1, 2, 3] , input2 : [1, 2, 3] , input3 : undefined },
     { expected : false, input1: [1, 2, 3] , input2 : [1,2,3] , input3 : "2"}],
    

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = isInserting(testCase.input1,testCase.input2,testCase.input3);
            
 console.log(testCase.expected , " " , result )
let k=0;
for(let i=0;i<testCase.expected.length;i++){
    if (testCase.expected[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
  });
}


function isInserting(array1,array2,position){
    if(!Array.isArray(array1) || !Array.isArray(array2) || typeof position !== "number" || position < 0){
        return false;
    }
    else{
        let newArray1=[];
        let newArray2=[];
        let newArray3=[];
        
        newArray1=array1.slice(0,position);
        newArray1.push(array2);
        newArray2=array1.slice(position,array1.length)
        newArray1.push(newArray2);
        newArray3=newArray1.flat(1);
        return newArray3;
        }
    }
    // console.log(isInserting([1, 2, 3], [4, 5, 6], 2));


