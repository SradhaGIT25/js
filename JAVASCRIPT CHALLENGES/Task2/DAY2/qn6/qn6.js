testCases=[{expected :  18 , input:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
{expected : 30 , input: [10, 20, 30, 40, 50]} , 
{expected : 0 , input: [10, 20, 0, 40, 50]} , 
{expected : 0 , input: []} , 
{expected : false , input: "sradha"} , 
{expected : 0 , input: ["srdah"]} , 
{expected : false , input: {}} , 
{expected : 0 , input: ['y', 'r', 't', 'u', 'p']} , 
{expected : false , input: 30} , 
{expected : false , input: 0} , 
{expected : false , input: -30} , 
{expected : -30 , input: [-10, -20, -30, -40, -50]} , 
{expected : false , input: ""} , 
{expected : false , input: true} , 
{expected : false , input: false} , 
{expected : false , input: null} , 
{expected : false , input: undefined} , 
{expected : false , input: {1:3,5:9}} , 
{expected : 30 , input: [10, 2.6, 30, 40, 50]} , 
{expected : 0 , input: [1.5, 2.5, 3.5, 4.5, 5.5]},
{expected :  60 , input:[15, 25, 35, 45, 55] }];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = divisibleSum(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function divisibleSum(numbers){
    if(!Array.isArray(numbers) || numbers === null || numbers === undefined){
        return false;
    }
    else{
        let divisibleNum=numbers.filter(divideBy);
    let total=divisibleNum.reduce(sumOf,0);
    return total;

    function sumOf(accumulator,element){
        return accumulator+element;
    }

    function divideBy(element){
        return element%3==0
    }
        }
    }

