testCases=[{expected : 2, input:"Hello world"},
    {expected : 5 , input:"This is a sample sentence."},
    {expected : 7 , input:"I love dogs and cats very much"},
    {expected : 3 , input:"This is simple."},
    {expected : 5 , input:"Sun rises in the east."},
    {expected : false , input:""},
    {expected : false , input:67},
    {expected : false , input:true},
    {expected : false , input:false},
    {expected : false , input:[]},
    {expected : false , input:{}},
    {expected : 6 , input:"This is a - sample sentence."},
    {expected : 4 , input:"244 6986 1369 31369."},
    {expected : 8 , input:" ye  yeg 1769yee qe89quwe 4ye9ye328 w71236."},
    {expected : 8 , input:"000 00 0 0 0000 000 000 000."},
     {expected : false , input:null},
      {expected : false , input:undefined},
    {expected : 3 , input:"Programming is fun!"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = findCount(testCase.input);
            

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function findCount(sentence){
    if(typeof sentence !== "string" || sentence.length === 0 || sentence === null ||  sentence === undefined){
        return false;
    }
    else{
    let wcount=0;
    let word=sentence.split(' ');
    console.log(word);
    if(sentence!==("")){
        wcount=1;
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]===(' ')){
            wcount++;
        }
    }
}
        return wcount;
}
    }

// findCount("Programming is fun!");