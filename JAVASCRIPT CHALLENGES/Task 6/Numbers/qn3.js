testCases=[
{expected : "finite,valid" , input:100},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "C"} , 
{expected :  "infinite,invalid" , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} ,
{expected : false , input:[{"CAT" : "CAT"}]}
];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = isValidNumber(testCase.input);
        
    console.log(result);

console.log(testCase.expected , " " , result )

    if (result === testCase.expected ) {
        console.log(`test ${index + 1} passed`);
    } 
    else{
        console.log(`test ${index + 1} failed`);
    }
        
  });
}


function isValidNumber(value){
    if(typeof value !== "number" || value === null || value === undefined){
        return false;
    }
    else{
        if(value>-(253 - 1) && value< 253 - 1){
        return ("finite,valid")
    }
    else{
        return ("infinite,invalid")
    }
    }
    
}
isValidNumber(1563463597)