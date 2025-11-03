testCases=[{expected : true , input1:"listen", input2:"silent"},
    {expected : true , input1: "restful",input2: "fluster"},
    {expected : true , input1: "pool",input2: "loop"},
    {expected : true , input1: "own",input2: "now"},
    {expected : true , input1: "lemon",input2: "melon"},
    {expected : true , input1: "was",input2: "saw"},
    {expected : false , input1: "restful",input2: ""},
    {expected : false , input1: "restful",input2: []},
    {expected : false , input1: [],input2: []},
    {expected : true , input1: "",input2: ""},
    {expected : false , input1: "restful",input2: {}},
    {expected : false , input1: 21582,input2: 21582},
    {expected : true , input1: "8642",input2: "2468"},
    {expected : false, input1: "8642",input2: false},
    {expected : false , input1: true,input2: "2468"},
    {expected : false , input1: true,input2: null},
    {expected : false , input1: null,input2: "2468"},
    {expected : false , input1: true,input2: undefined},
    {expected : false , input1: undefined,input2: "2468"},
    {expected : false , input1:"hello",input2: "world"}];

    test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = anagramCheck(testCase.input1,testCase.input2);
            

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function anagramCheck(string1,string2){
    if((typeof string1 !=="string") || (typeof string2 !== "string") || string1 === null || string1 === undefined || string2 === null || string2 === undefined){
        return false;
    }
    else{
        let letters1=[...string1];
        let letters2=[...string2];
        let frequency1={};
        let frequency2={};
        let count1=0;
        let count2=0;
if(letters1.length===letters2.length){
for(let i=0;i<string1.length;i++){
    if(string1.indexOf(string1[i])<i){
    continue;
    }
    let count1=0;
    for(let j=0;j<letters1.length;j++){
        if(string1[i]==(letters1[j])){
        count1++;
}
    }
frequency1[string1[i]]=count1;
}
// console.log(frequency1);


for(let i=0;i<string2.length;i++){
    if(string2.indexOf(string2[i])<i){
        continue;
    }
    let count2=0;
    for(let j=0;j<letters2.length;j++){
        if(string2[i]===(letters2[j])){
        count2++;
}
    }
frequency2[string2[i]]=count2;
}
// console.log(frequency2);

let anagramCheck=true;
for(let letter in frequency1){
    if(frequency1[letter]!==frequency2[letter]){
        anagramCheck=false;
        break;
    }
}
if(anagramCheck){
    return true;
}
else{
    return false;
}
}else{
    return false;
}
    }
}



