testCases=[{expected :  "elephant" , input:["cat", "dog", "elephant", "tiger"]},
{expected :  "banana" , input: ["apple", "banana", "orange"]} , 
// // {expected :  undefined , input: ["65879", "40294057", "436"]} , 
// // {expected :  undefined , input: ["5u89u", "t5otj5", "jg06yj0"]} , 
// // {expected :  undefined , input: ["000", "00000" ,"00000000", "00000"]} , 
// // {expected :  undefined , input: ["@#$%^", "%^&****&", "!@#%%^&*"]} , 
{expected :  "apple" , input: ["apple"]} ,  
{expected :  false , input: [456,67,3790]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "ewgjhkt"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected : "programming" , input:["programming", "is", "fun"]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = getLongest(testCase.input);

  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function getLongest(words){
    if(words === null || words === undefined){
        return false;
    }
    for(let i=0;i<words.length;i++){ 
        if(typeof words[i] !== "string"){
            return false;
        }
        let letters=words[i];
         for(let j=0;j<letters.length;j++){ 
        if(typeof letters[j] === "number"){
            return false;
        }
    }
    }
    if(!Array.isArray(words) || words.length===0){
        return false;
    }
    else{
        for(let k=0;k<words.length;k++){
            if(words.length === 1){
            return words[k].toString();
        }
        }
        
    let word=[...words];
    // console.log(word);
    let longest="";
    for(let i=0;i<word.length-1;i++){ 
        if(word[i].length>=word[i+1].length){     
            if(word[i].length>=longest.length){
                longest=word[i];
            }
        }
    }
    return longest;
    }
        }
    
// console.log(getLongest(["65879", "40294057", "436"]))


// let sorted=array1.sort((a,b)=>a.length-b.length);
        // return array1[array1.length-1];