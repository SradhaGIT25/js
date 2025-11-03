testCases = [{ expected : "helloworld" , input:" Hello, World " }, 
{ expected :"helloworld", input:" Hello, @World " } , 
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
{ expected : "15" , input: "1.5" },
{ expected : false , input: [{}] },
{ expected : "" , input: "@$%%" },
{ expected : false , input:"6576ghf iou"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = removePunctuation(testCase.input);
            
console.log(testCase.expected , " " , result )
for(let i=0;i<result.length;i++){
    if (result[i] !== testCase.expected[i] ) {
        console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);
  });
}

function removePunctuation(string){
    if(typeof string !== "string" || string.length === 0){
        return false;
    }
    else{
            let trimmed1=string.trim().toLowerCase().replaceAll(" ","");
    console.log(trimmed1);
    let newArray=[]
    let specialChars="!@#~$%^&*()_+-=`{}[]|\<>?/':;,."
    for(let i=0;i<trimmed1.length;i++){
            if(!specialChars.includes(trimmed1[i])){
                newArray.push(trimmed1[i])
        }
    }
    let string2=newArray.toString().replaceAll(",","")
    return (string2);
}
    }

// removePunctuation(" Hello, @World ")
