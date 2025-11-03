testCases=[{expected :  "olleH dlrow" , input:"Hello world"},
{expected :  "sremmargorP era emosewa" , input: "Programmers are awesome"} , 
{expected :  "0" , input: "0"} , 
{expected :  false , input: ["5u89u", "t5otj5", "jg06yj0"]} , 
{expected :  false , input: ["000", "00000" ,"00000000", "00000"]} , 
{expected :  false , input: ["@#$%^", "%^&****&", "!@#%%^&*"]} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456,67,3790]} , 
{expected :  "968543" , input: "345869"} , 
{expected :  "tkhjgwe" , input: "ewgjhkt"} , 
{expected :  false , input: 563463597} , 
{expected :  "^%%%#@" , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} , 
{expected : "gnimmargorP si nuf" , input:"Programming is fun"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = reserveWord(testCase.input);

  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function reserveWord(string){
    if(typeof string !== "string" || string.length===0 || string === null || string === undefined){
        return false;
    }
    else{
        let string1=string.split(" ");
    for(let i=0;i<=string1.length-1;i++){
        for(let j=string1[i].length-1;j>=0;j--){
        return string1[i][j];
    }
    }
    }
    }
