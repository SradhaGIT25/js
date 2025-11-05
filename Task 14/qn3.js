testCases = [{ expected :"AceCreIm", input: "IceCreAm"}, 
{ expected : "mettar", input:"matter" } , 
{ expected : "cry" , input:"cry" },
{ expected : false , input:"s34un"},
{ expected :  false , input:"36%#7gfhf" },
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
    const result = reverseVowels(testCase.input);

for(let i=0;i<result.length;i++){
    if (result[i] !== testCase.expected[i] ) {
        console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);
  });
}

function reverseVowels(s){
    if( typeof s !== "string" || s.length===0){
        return false;
    }
    else{
        for(let i=0;i<s.length;i++){
            let pattern=/[a-zA-Z]/
            if(!pattern.test(s[i])){
                return false;
            }
        }
        }

        let sarray=[...s];
    let vowels="aeiouAEIOU";
    let svowels=""
    let varray=[];
    let rarray=[];
    let reverse="";
    let indexes=[]
    let position;
    for(let i=s.length;i>=0;i--){
        if(vowels.includes(s[i])){
            varray.push(s[i]);
        }
    }
    for(let char in s){
        if(vowels.includes(s[char])){
            indexes.push(char);
        }
    }

let k=0;
    for(let i=0;i<sarray.length;i++){
        if(vowels.includes(sarray[i])){
            sarray.splice(indexes[k],1,varray[k]);
            k++;
             }

    }
    svowels=sarray.toString().replaceAll(",","");
    return (svowels);
}
    

// console.log(reverseVowels("matter"));
// console.log(reverseVowels("IceCreAm"));