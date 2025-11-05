testCases = [{ expected :1, input: "roses are red"}, 
{ expected : 1 , input:"bubble" },
{ expected : -1 , input:"aabb" },
{ expected : 0 , input:"zebra"},
{ expected : false , input:34},
{ expected : false , input:"34"},
{ expected : false , input:-34},
{ expected : false , input:"-34"},
{ expected : false , input:"%^&%%"},
{ expected :false , input:["36%#7gfhf"]},
{ expected : false , input:5467},
{ expected : false , input:""},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: [{}] },
{ expected : false , input: true },
{ expected : false , input: null },
{ expected : false , input: undefined },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = notRepeat(testCase.input);

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


function notRepeat(s){
    if(typeof s !== "string" || s.length === 0){
        return false;
    }
    else{
        for(let i=0;i<s.length;i++){
            let pattern=/[a-zA-Z]/
            if(!pattern.test(s[i])){
                return false;
            }
        }
        let sarray=[...s];
    let position;
    let flag=0;
    let char;


for(let i=0;i<sarray.length;i++){
    for(j=0;j<sarray.length;j++){
        if(i!==j){
            if(sarray[i]===sarray[j]){
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
    }

if(flag===1){
     char=s[i];
     position=s.indexOf(s[i]);
     return `${position}`;
}
flag=0;

}
if(flag!==1){
    return -1;
}
}
    }
    

// console.log(notRepeat("roses are red"));
// console.log(notRepeat("boa"));
// console.log(notRepeat("aabb"));
// console.log(notRepeat("boba"));
// console.log(notRepeat("bubble"));