testCases = [{ expected : "igwfeg#$f" , input: "igwfeg#$f@455.comsss" }, 
{ expected :"sradha123", input:"sradha123@gmail.com" } , 
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
    const result = extractUsername(testCase.input);
            
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

function extractUsername(email){
    if(typeof email !== "string" || email.length === 0){
        return false;
    }
    else{
        let pattern=/[a-zA-Z]/;
        if(!pattern.test(email)){
            return false;
        }
        let splitEmail=email.split('@');
    let firstPortion=splitEmail[0];
    return (firstPortion);
    }
}
// extractUsername("sradhasanthwdqgeh16@gmail.com");