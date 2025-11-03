testCases = [{ expected : "dogs love I" , input: "I love dogs"} ,
{ expected : false , input:["care", "race", "acre", "dog", "god", "cat"] },
{ expected : false , input:"" },
{ expected : false , input:[]},
{ expected : false , input:{}},
{ expected : false , input:true},
{ expected : false , input:false},
{ expected : false , input:null},
{ expected : false , input:undefined},
{ expected : false , input:67},
{ expected : false , input:-5467},
{ expected : false , input: 1.5},
{ expected : false , input: "1.5" },
{ expected : false , input: [{}] },
{ expected : false , input: "@$%%" },
{ expected : false , input:"6576ghf iou"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = reverseWords(testCase.input);
            
console.log(testCase.expected , " " , result )

let k=0;
for(let i=0;i<testCase.expected.length;i++){
    if (testCase.expected[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
  });
}

function reverseWords(sentence){
    let result="";
    if(typeof sentence !== "string" || sentence.length === 0 || sentence === null || sentence === undefined){
        return false;
    }
    else{
        let pattern=/[a-zA-Z]/;
        if(!pattern.test(sentence)){
            return false;
        }
        let words=sentence.split(' ');
        let joined=""
        for(let i=words.length-1;i>=0;i--){
            // console.log(words[i]);
            joined=joined+words[i]+" ";
            // result=joined.trim();
        }
        return (joined)
        }
    
}
// console.log(reverseWords("I love dogs"));