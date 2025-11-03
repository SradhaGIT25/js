testCases = [{ expected : "LVIII" , input: 58 },
    { expected :"IX", input: 9 },
    { expected : "MCMXCIV", input: 1994 },
    { expected : false, input: ["twfud", "hxgjw", "hgjh"] },
    { expected : false, input: ["twt6fud", "hx5gjw", "hg45jh"] },
    { expected : false, input: ["twf@#%ud", "hxg#%^^jw", "hg%^&jh"] },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
     { expected : "XII", input : 12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : false, input : "hg56" },
     { expected : false, input : "@@#" },
     { expected : false, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];
    
     test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = findRoman(testCase.input);
            
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

function findRoman(number){
if(typeof number !== "number" || number <= 0 || number === null || number === undefined){
    return false;
}
else{
let ones=["0","I","II","III","IV","V","VI","VII","VIII","IX"];
let tens=["0","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
let huns=["0","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
let thou=["0","M","MM"];

let str=number.toString();

if(str.length === 0 || str.includes(".")){
    return false;
}
else if(str.length===1){
    return ones[str[0]];
}
if(str.length===2){
    if(str[1]==="0"){
        return tens[str[0]];
    }
    else {
        return tens[str[0]] + ones[str[1]];
    }
}

else if(str.length===3){
    if(str[2]==="0" && str[1]==="0"){
        return huns[str[0]];
    }
    else if(str[2]==="0"){
        return huns[str[0]] + tens[str[1]];
    }
    return huns[str[0]] + tens[str[1]] + ones[str[2]];
}
else if(str.length===4){
    if(str[1]==="0" && str[2]==="0" && str[3]==="0"){
        return thou[str[0]];
    }
    else if(str[2]==="0" && str[3]==="0"){
        return thou[str[0]] + huns[str[0]]
    }
    else if(str[3]==="0"){
        return thou[str[0]] + huns[str[1]] + tens[str[2]];
    }
    else{
        return thou[str[0]] + huns[str[1]] + tens[str[2]] + ones[str[3]];
    }
}
}
}
// console.log(findRoman(1999));

