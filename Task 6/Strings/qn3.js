testCases = [{ expected : "She Loves Dogs " , input : "she loves dogs" }, 
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
    const result = capitalize(testCase.input);
            
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

function capitalize(sentence){
    if(typeof sentence == "string" || sentence.length === 0 || sentence === null || sentence === undefined){
        return false;
    }
    else{
        let pattern=/[a-zA-Z]/;
        for(let i=0;i<sentence.length;i++){
            if(!pattern.test(sentence[0])){
                return false;
            }
        }
         let words=sentence.split(' ');
    // console.log(words)
    let array=[]
    let str=""
    let sentence2=""
    for(let i=0;i<words.length;i++){
        let letter=words[i]+" "
        // console.log(letter);
        let rletter=[...letter]
        let remove=rletter.shift(rletter[0]);
        // console.log(remove);
        let upper=letter[0].toUpperCase();
        array.push(upper);
        for(let j=0;j<rletter.length;j++){
            array.push(rletter[j]);
        }
        //  console.log(array);
        str=array.toString().replaceAll(",","")
        return (str)
    }
   

    }
}
// capitalize("she loves dogs")