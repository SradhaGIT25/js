testCases=[{expected :  ["programming"] , input:"Hello world of programming"},
    {expected :  ["quick", "brown", "jumps"] , input: "The quick brown fox jumps over the lazy dog"} ,
    {expected :  false , input: ""} ,
    {expected :  false , input: true} ,
    {expected :  false , input: false} ,
    {expected :  false , input: []} ,
    {expected :  false , input: {}} ,
    {expected :  ["ewhjohw36792"] , input: "ewhjohw36792 erui"} ,
    {expected :  ["12348wdeqwg"] , input: "The@$$sjdj 12348wdeqwg"} ,
    {expected :  false , input: null} ,
    {expected :  false , input: undefined} ,
    {expected :  ["12"] , input: "12"} ,
    {expected :  ["-12"] , input: "-12"} ,
    {expected :  false , input: 12} ,
    {expected :  false , input: -12} ,
    {expected :  ["-@#"] , input: "-@#"} , 
    {expected : ["coding"] , input:"I love coding"}];

    test(testCases);
    function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = longestWord(testCase.input);
            

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

function longestWord(sentence){
    if(typeof sentence !== "string"  || string === null || string === undefined){
        return false
    }
    else{
        let sentence="I love coding";
        let longest="";
        let word=sentence.split(' ');
        console.log(word);

        for(let i=0;i<word.length-1;i++){
            if(word[i].length>=word[i+1].length){
                if(word[i].length>=longest.length){
                    longest=word[i];
                }
            }
            else{
                if(word[i].length<word[i+1].length){
                    if(word[i+1].length>=longest.length){
                    longest=word[i+1];
                }
            }
        }
        }
        return longest;
            }
        }


function longestWord(sentence){
    let rlong=[];
    if(typeof sentence !== "string"){
        return false
    }
    else{
        let longest="";
        let longArray=[];
        let long=[]
        let word=sentence.split(' ');
        // console.log(word);
        
        let sorted=word.sort((a,b)=>a.length-b.length);
        console.log(sorted);
        longest=word[word.length-1];
        let len=longest.length;
        long.push(longest);

        for(let i=0;i<sorted.length-1;i++){
            if(sorted[i].length===len){
                long.push(sorted[i]);
                // console.log(long);
     
            }
           
        }
        return (long);
        
    }}





