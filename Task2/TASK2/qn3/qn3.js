testCases=[{expected : [2, 4, 6], input:[1, 2, 3, 4, 5, 6]},
{expected : [8, 10, 12] , input:[7, 8, 9, 10, 11, 12]},
{expected : [] , input:[]},
{expected : [0] , input:[0]},
{expected : false , input:"string"},
{expected : false , input:true},
{expected : false , input:false},
{expected : false , input:{}},
{expected : [] , input:[]},
{expected : false , input:""},
{expected : [0,0,0,0] , input:[0,0,0,0]},
{expected : [2,4,6,8] , input:[2,4,6,8]},
{expected : [-2,-4,-6,-8] , input:[-2,-4,-6,-8]},
{expected : [] , input:[1,3,5,7,9]},
{expected : [] , input:[-1,-3,-5,-7,-9]},
{expected : false , input: null},
{expected : false , input:undefined},
{expected : false , input:{2:4}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = checkEven(testCase.input);
            

    for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

    

function checkEven(numbers){
  if(!Array.isArray(numbers) || numbers === null || numbers === undefined){
    return false;
  }
  else{
    let evenNumber=numbers.filter(isEven);
        return evenNumber;
    function isEven(element){
        return element%2==0;
    }
  }
  }

  
  

    
    // console.log(checkEven([1, 2, 3, 4, 5, 6]))


