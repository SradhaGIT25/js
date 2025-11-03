testCases = [{ expected :{ a: 1, b: 3, c: 4 }, input1:{ a: 1, b: 2 } , input2:{ b: 3, c: 4 } }, 
{ expected :false , input1:{ a: 1, b: 2 } , input2:5645  } , 
{ expected : false , input1:{ a: 1, b: 2 } , input2:[]  },
{ expected : false , input1:5320 , input2:-12  },
{ expected : false , input1:true , input2:17  },
{ expected : false , input1:"sradha" , input2:"san"  },
{ expected : false , input1:[] , input2:[]  },
{ expected : false , input1:{} , input2:{} },
{ expected : false , input1:"goat" , input2:11  },
{ expected : false , input1:false , input2:{ a: 1, b: 2 }  },
{ expected : false , input1:860 , input2: "rest"  },
{ expected : false , input1:530 , input2: true  },
{ expected : false , input1:{ a: 1, b: 2 } , input2:false },
{ expected : false , input1: [] , input2: { a: 1, b: 2 }  },
{ expected : { a: 1, b: 2 } , input1: { a: 1, b: 2 } , input2:{}  }];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = combineObj(testCase.input1,testCase.input2);
            
// console.log(testCase.expected , " ", testCase.input2 , " " , result )
    if (objectEquality(result,testCase.expected) === "equal" || (objectEquality(result,testCase.expected) === false) ) {
        console.log(`test ${index + 1} passed`);
    } else {
        console.log(`test ${index + 1} failed`);

    }
  });
}
function combineObj(obj1,obj2){
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return false;
    }
    else{
        let merged=Object.assign(obj1,obj2);
    return merged;
    }
}
function objectEquality(obj1,obj2){
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return false;
    }
    else{
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    if(flat1.length===flat2.length){
    for(let i=0;i<flat1.length;i++){
    if(!flat2.includes(flat1[i])){     
        return "not equal";
        }
    }
        return "equal";
    }
    else{
        return "not equal";
    }
    }
    }

