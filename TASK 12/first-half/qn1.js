testCases = [{ expected :3450 , input1:3000 , input2:15  }, 
{ expected :2520 , input1:2100 , input2:20  } , 
{ expected : false , input1:-4056 , input2:15  },
{ expected : false , input1:5320 , input2:-12  },
{ expected : false , input1:true , input2:17  },
{ expected : false , input1:"sradha" , input2:"san"  },
{ expected : false , input1:-3700 , input2:-15  },
{ expected : 6600 , input1:5280 , input2:25  },
{ expected : false , input1:"goat" , input2:11  },
{ expected : 550 , input1:500 , input2:10  },
{ expected : false , input1:860 , input2: "rest"  },
{ expected : false , input1:530 , input2: true  },
{ expected : 3000 , input1:3000 , input2:0  },
{ expected : 0 , input1: 0 , input2: 0  },
{ expected : 0 , input1: 0 , input2:15  },
{ expected : 1088.91 , input1:999 , input2:9  }];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = calculateTotal(testCase.input1,testCase.input2);
            

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function calculateTotal(billAmount,taxPercentage){
    if(billAmount < 0 || typeof billAmount!=="number" || taxPercentage < 0 || typeof taxPercentage!=="number" ){
        return false;
    }
    else{
        let taxAmount=(taxPercentage/100)*billAmount;
        let total=billAmount+taxAmount;
        return total;
    }
}
calculateTotal(2100,20)