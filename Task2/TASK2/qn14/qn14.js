testCases = [{ expected : true , input: "A man, a plan, a canal, Panama!" }, 
    { expected : true , input : "Racecar" } , 
    { expected : true , input : "Radar" } ,
    { expected : true , input : "Amma" } ,
    { expected : true , input : "Malayalam" } ,
    { expected : false , input : "word" } ,
    { expected : true , input : "12321" } ,
    { expected : false , input : [] } ,
    { expected : false , input : ["Racecar"] } ,
    { expected : false , input : 12321 } ,
    { expected : false , input : {} } ,
    { expected : false , input : {"Racecar":"racecar"} } ,
    { expected : false , input : true } ,
    { expected : false , input : false } ,
    { expected : false , input : null } ,
    { expected : false , input : undefined } ,
    { expected : false , input : ["12321"] } ,
    { expected : false , input : {"12321":"12321"} } ,
    { expected : false , input : {12321:12321} } ,
    { expected : false , input : "Hello, world!"}]

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = isPalindrome(testCase.input);

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    //   console.log(result);
    } 
    else {
      console.log(`test ${index + 1} failed`);
    //   console.log(result);
    }
  });
}

function isPalindrome(string){
    if(typeof string !== "string" || string.length ===0 || string === null || string === undefined){
        return false;
    }
    else{
        let words=string.replaceAll(" ","");
// console.log(words);
let word=words.replaceAll(",","");
// console.log(word);
let string1=word.replaceAll("!","");
// console.log(string1);
let len=string1.length; 
let flag=0;
    for(let i=0;i<len/2;i++){
        if(string1[i]==string1[len-i-1]){
            flag=1;
            i++; 
            // break;
        }
    }

     if(flag==1){
            return true;
        }
        else{
            return false;
        }

}
    }
