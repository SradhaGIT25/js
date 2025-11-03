testCases=[{expected :  {'h': 1, 'e': 1, 'l': 2, 'o': 1} , input:"hello"},
    {expected :  {'g': 1, 'i': 1, 'r': 1, 'a': 1, 'f':2, 'e':1} , input:"giraffe"},
    {expected :  {'w': 1, 'a': 1, 't': 1, 'e': 2, 'r': 1, 'm': 1, 'l': 1, 'o': 1, 'n':1} , input:"watermelon"},
    {expected :   {}, input:""},
    {expected :  false , input:[]},
    {expected :  { '2': 1, '3': 1, '4': 1, '5': 2, '6': 1, '8': 1, '9': 1 } , input:"23658954"},
    {expected :  { '0': 1 } , input:"0"},
    {expected :  false , input:{}},
    {expected :  { '5': 1, '6': 1, '{': 1, f: 2, '}': 1 } , input:"{f56f}"},
    {expected :  false, input:true},
    {expected :  false , input:false},
    {expected :  { '0': 6 } , input:"000000"},
    {expected :  false , input:1245673},
    {expected :  {'s': 1, 'e': 2} , input:"see"},
    {expected :  { '2': 1, '3': 1, '4': 1, '5': 2, '6': 1, '8': 1, '9': 1, ',': 7 } , input:"2,3,6,5,8,9,5,4"},
    {expected :  { '2': 1, '3': 1, '4': 1, '5': 2, '6': 1, '8': 1, '9': 1, '-': 7 } , input:"2-3-6-5-8-9-5-4"},
    {expected :  false , input:null},
    {expected :  false , input:undefined},
    {expected : {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1} , input: "programming"}];


    test(testCases);
    function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = frequencyCheck(testCase.input);
            
   if (objectEquality(result,testCase.expected) === "Equal" || (objectEquality(result,testCase.expected) === false) ) {
        console.log(`test ${index + 1} passed`);
    } else {
        console.log(`test ${index + 1} failed`);

    }
  });
}

function objectEquality(obj1,obj2){
    if(typeof obj1!=="object" || typeof obj2!=="object" || obj2 === null || obj2 === undefined){
        return false;
    }
    else{
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    if(flat1.length===flat2.length){
    for(let i=0;i<flat1.length;i++){
    if(!flat2.includes(flat1[i])){     
        return "Not Equal";
        }
    }
        return "Equal";
    }
    else{
        return "Not Equal";
    }
    }
    }
    
    // console.log(objectEquality({'h': 1, 'e': 1, 'l': 2, 'o': 1},{'h': 1, 'e': 1, 'l': 2, 'o': 1}))

function frequencyCheck(words){
    if(typeof words!=="string"){
        return false;
    }
    else{
        let word=[...words];
// console.log(word);
let frequency={};
let count=0;
for(let i=0;i<=words.length-1;i++){
    if(word.indexOf[word[i]]<i){
        continue;
    }
    let count=0;
    for(let j=0;j<=word.length;j++){
         if(words[i]==word[j]){
        count++;
    }
    }
   
    frequency[word[i]]=count;
    
}
return frequency;
    }
}
// // console.log(frequencyCheck("2,3,6,5,8,9,5,4"))





