testCases = [{ expected : "aple" , input:"apple" }, 
{ expected :"ap" , input:"app" } , 
{ expected : false , input:["apple"] },
{ expected : "care" , input:"care"},
{ expected : false , input:{"apple" : "apple"} },
{ expected : false , input:undefined},
{ expected : false , input:["nib","own","bin","now","nib","won"]},
{ expected : "234" , input:"2343"},
{ expected : false , input:""},
{ expected : false , input:[0]},
{ expected : false , input:null},
{ expected : false , input:["2343"]},
{ expected : false , input:5467},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: [{}] },
{ expected : "2ws3er54" , input: "2ws3eer545" },
{ expected : "@#$%FWS" , input: "@#@$%@FW@5s" },
{ expected : false , input: true },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = dupeRemove(testCase.input);
            
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

        

function dupeRemove(string1){
    if(typeof string1 !== "string"){
        return false;
    }
    else{
        let array1=[]
for(let i=0;i<string1.length;i++){
    
    if(string1[i]!=string1[i+1]){
        // console.log(string1[i])
        array1.push(string1[i]);
        array1.push(string1[i+1]);
        array1.pop(string1[i+1]);
    }
}
// console.log(array1)
let string2=array1.toString();
let string3=string2.replaceAll(",","");
return string3;
    }
}
console.log(dupeRemove("apple"))