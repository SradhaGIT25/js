testCases = [{ expected : "my_function" , input:"myFunction" }, 
{ expected :false , input:"app" } , 
{ expected : false , input:["apple"] },
{ expected : false , input:"care"},
{ expected : false , input:{"apple" : "apple"} },
{ expected : false , input:undefined},
{ expected : false , input:["nib","own","bin","now","nib","won"]},
{ expected : false , input:"2343"},
{ expected : false , input:""},
{ expected : false , input:[0]},
{ expected : false , input:null},
{ expected : false , input:["2343"]},
{ expected : false , input:5467},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: [{}] },
{ expected : false , input: "2ws3eer545" },
{ expected : false , input: "@#@$%@FW@5s" },
{ expected : false , input: true },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = camelCaseConversion(testCase.input);
            
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

function camelCaseConversion(string1){
    // if(typeof string1 !== "string"){
    //     return false;
    // }
    

    if(typeof string1 !== "string" || string1.length===0){
        return false;
    }
    else{
        for(let i=0;i<string1.length;i++){
        let pattern=/[a-zA-Z]/;
        if(!pattern.test(string1[i])){
            return false;
        }
        else{
            let letter="";
        let string2=string1.toUpperCase();
        let position=0;
        let array1=[];
        let string3="";
        let snakeCase="";
        for(let i=0;i<string1.length-1;i++){
            if(string2.includes(string1[i])){
                letter=string1[i].toLowerCase();
                position=string1.indexOf(string1[i]);
                array1=[...string1]
                array1.splice(position,1,letter);
                array1.splice(position,0,"_")
                string3=array1.toString();
                snakeCase=string3.replaceAll(",","")
                 return (snakeCase);
    }
}

    }
}
        }
        
}