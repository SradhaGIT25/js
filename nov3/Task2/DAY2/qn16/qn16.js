testCases=[{expected :  ["is", "fun", "open", "source", "programming"] , input:["open", "source", "programming", "is", "fun"]},
{expected :  ["hello", "world"] , input: ["hello", "world"]} , 
{expected :  false , input: "0"} , 
{expected :  ["cat", "dog", "tiger", "elephant"] , input: ["cat", "dog", "elephant", "tiger"]} , 
{expected :  ["000", "0000" , "00000" , "00000000"] , input: ["000", "00000" ,"00000000", "0000"]} , 
{expected :  ["@#$%^", "%^&****&", "!@#%%^&*!%^"] , input: ["!@#%%^&*!%^", "@#$%^" , "%^&****&"]} , 
{expected :  ["apple"] , input: ["apple"]} , 
{expected :  false , input: [456,67,3790]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "ewgjhkt"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} ,
{expected :  false , input: null} , 
{expected :  false , input: undefined} , 
{expected : ["0"] , input:["0"]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = sortedArray(testCase.input);

  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function sortedArray(array1){
    if(array1 === null || array1 === undefined){
        return false;
    }
    for(let i=0;i<array1.length;i++){
        if(typeof array1[i] === "number" || typeof array1[i] === "object" || typeof array1[i] === true || typeof array1[i] === false){
            return false;
        }
    }
    if(!Array.isArray(array1) || array1.length===0){
        return false;
    }
    else{
        let temp=[];
for(let i=0;i<=array1.length-1;i++){
    for(let i=0;i<array1.length-1;i++){
        if(array1[i].length>array1[i+1].length){
            temp=array1[i+1];
            array1[i+1]=array1[i];
            array1[i]=temp;
        }
    }
}
    }
    return array1;
}

