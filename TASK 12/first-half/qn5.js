testCases = [{ expected :"Not Equal" , input1:{ a: 1, b: 2 } , input2:{ b: 3, c: 4 } }, 
{ expected :"Equal" , input1:{ a: 1, b: 2 } , input2:{ a: 1, b: 2 }  } , 
{ expected : false , input1: 0 , input2:15  },
{ expected : false , input1:5320 , input2: 0  },
{ expected : false , input1:true , input2:17  },
{ expected : false , input1:"sradha" , input2:"san"  },
{ expected : false , input1:[] , input2:-15  },
{ expected : false , input1:5280 , input2:[]  },
{ expected : false , input1:"goat" , input2:11  },
{ expected :"Equal" , input1:{ a: 1, b: 2 } , input2:{ b: 2 ,a: 1}  } ,
{ expected : false , input1:860 , input2: "rest"  },
{ expected : false , input1:530 , input2: true  },
{ expected :"Not Equal" , input1:{ a: 1, b: 2 } , input2:{ a: 1, b: 2 , c: 2}  } ,
{ expected :"Not Equal" , input1:{ a: 1, b: 2 , c : 3} , input2:{ a: 1, b: 2 }  } ,
{ expected :"Not Equal" , input1:{ a: 1, b: 2 } , input2:{ a: 1, b: 1 }  } ,
{ expected : "Not Equal" , input1:{ a: 1, b: 2 } , input2:{} }],

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = objectEquality(testCase.input1,testCase.input2);
            

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
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
        return "Not Equal";
        }
    }
        return "Equal";
    }
    else{
        return "Not Equal";
    }
    }
    }
// console.log(objectEquality({ a: 1, b: 2 },{ a: 1, b: 1}))
