testCases=[
{expected : 14 , input:1283},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "C"} , 
{expected :  11 , input: 56} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} ,
{expected :  0 , input: 0} ,
{expected :  false , input: -12} ,
{expected : false , input:[{"CAT" : "CAT"}]}
];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = sumOfDigits(testCase.input);
        
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

function sumOfDigits(number){
    let num=0;
    if(typeof number !== "number" || number === null || number === undefined){
        return false;
    }
        let sum=0;
        let numString=number.toString();
        console.log(numString);
        if(numString[0]==="-"){
            return false;
        }

    for(let i=0;i<numString.length;i++){
        num=Number(numString[i]);
        sum=sum+num;
    }
    return (sum);
    }
    

console.log(sumOfDigits(1283));