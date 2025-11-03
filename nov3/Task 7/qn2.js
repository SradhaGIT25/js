testCases = [{ expected : { hello: 2, world: 2 }, input: "Hello hello world, world!" },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
     { expected : false, input : 12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : {string: 1}, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : {"hg56": 1}, input : "hg56" },
     { expected : {"@@#":1}, input : "@@#" },
     { expected : {"@##$S":1}, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = wordFreq(testCase.input);
            
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}



function wordFreq(sentence){
    if(typeof sentence !== "string" || sentence.length === 0 || sentence === null || sentence === undefined){
        return false;
    }
    else{
        let losentence=sentence.toLowerCase()
// console.log(losentence)
 let newArray=[]
    let specialChars="!@#~$%^&*()_+-=`{}|\<>?/':;,."
    for(let i=0;i<losentence.length;i++){
            if(!specialChars.includes(losentence[i])){
                newArray.push(losentence[i])
        }
    }
    let string2=newArray.toString().replaceAll(",","").trim(' ')
    // console.log(string2);
let words2=string2.split(' ')
// console.log(words2)
let wcount={}
for(let i=0;i<words2.length-1;i++){
    let letters2=words2[i];
    let count=0;
    if(wcount[letters2]){
        continue;
    }
    for(let j=0;j<words2.length-1;j++){
        if(words2[j]==words2[i]){
            count++
        }
    }
    wcount[letters2]=count;
}
return wcount;
    }
}
// let sentence="Hello hello world, world!";

// console.log(wcount)