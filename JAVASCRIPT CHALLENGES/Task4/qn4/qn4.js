
testCases=[{expected : ["C" , "CA" , "CAT" , "AT" , "T"] , input:"CAT"},
{expected :  ["B" , "BI" , "BIR" , "BIRD" ,"IRD" , "RD" , "D"] , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456,67,3790]} , 
{expected :  false , input: "345869"} , 
{expected :  ["C"] , input: "C"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected : false , input:[{"CAT" : "CAT"}]}];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = printPattern(testCase.input);
            

  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function printPattern(string){
  let pattern=/[a-zA-Z]/;
  for(let i=0;i<string.length;i++){
    if(!pattern.test(string[i])){
      return false;
    }
  }
if(typeof string !== "string" || string.length === 0){
  return false;
}
else{
  let prefix="";
let letter="";
let word="";
let madeArray=[];

for(let i=0;i<string.length;i++){
        let letter=string[i];
        prefix=prefix+letter;
        madeArray.push(prefix);
}
for(let i=0;i<=string.length-1;i++){
        let word=prefix.slice(i+1);
        if(word.length===0){
          return madeArray;
        }
        else{
           madeArray.push(word);
        }
}     
return madeArray;
}
}



