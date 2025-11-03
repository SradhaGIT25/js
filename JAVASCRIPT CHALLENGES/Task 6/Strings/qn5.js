testCases = [{ expected : 3 , input:"umbrella"}, 
{ expected :3, input:" Hello, @World " } , 
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
{ expected : 0 , input: "1.5" },
{ expected : false , input: [{}] },
{ expected : 0 , input: "@$%%" },
{ expected : 3 , input:"6576ghf iou"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = countVowels(testCase.input);
            
console.log(testCase.expected , " " , result )

// for(let i=0;i<result.length;i++){
    if (result === testCase.expected ) {
        console.log(`test ${index + 1} passed`);
    } 
 else{
        console.log(`test ${index + 1} failed`);
 }
// }
  });
}

function countVowels(str){
     if(typeof str !== "string" || str.length === 0 || str === null || str === undefined){
        return false;
    }
    else{
        for(let i=0;i<str.length;i++){
            if(typeof str !== "string"){
                return false;
            }
        }
        let count=0;
    let vowels="aeiouAEIOU"
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]==vowels[j]){
                count++;
            }

        }
    }
    return (count);
}
    }
    
// countVowels()