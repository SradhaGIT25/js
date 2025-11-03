// testCases=[{expected :  "programming" , input:"Hello world of programming"},
//     {expected :  ["quick", "brown", "jumps"] , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} ,
//     {expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} , 
//     {expected : "coding" , input:"I love coding"}];

//     test(testCases);
//     function test(testCases) {
//     testCases.forEach((testCase, index) => {
//     const result = longestWord(testCase.input);
            

//     if (result === testCase.expected) {
//       console.log(`test ${index + 1} passed`);
//     } else {
//       console.log(`test ${index + 1} failed`);
//     }
//   });
// }

// function longestWord(sentence){
//     if(typeof sentence !== "string"){
//         return false
//     }
//     else{
//         let sentence="I love coding";
//         let longest="";
//         let word=sentence.split(' ');
//         console.log(word);

//         for(let i=0;i<word.length-1;i++){
//             if(word[i].length>=word[i+1].length){
//                 if(word[i].length>=longest.length){
//                     longest=word[i];
//                 }
//             }
//             else{
//                 if(word[i].length<word[i+1].length){
//                     if(word[i+1].length>=longest.length){
//                     longest=word[i+1];
//                 }
//             }
//         }
//         }
//         return longest;
//             }
//         }


function longestWord(sentence){
    if(typeof sentence !== "string"){
        return false
    }
    else{
        let longest=[];
        let word=sentence.split(' ');
        console.log(word);

        for(let i=0;i<word.length-1;i++){
            if(word[i].length>word[i+1].length){
                if(word[i].length>longest.length){
                    // longest=[]
                    longest.push(word[i]);
                }
            }
                  else if(word[i].length===word[i+1].length){
                if(word[i].length===longest.length && word[i+1].length===longest.length){ 
                    // longest=[] 
                    // for(let j=0;j<longest;j++){
                        // if(longest[i]!==word[i] || longest[i]!==word[i+1]){
                        longest.push(word[i]);
                    longest.push(word[i+1]);
                    // }
                    // continue;  
                    // }                                                                                                                                                             
                }
            }
            else{
                if(word[i].length<word[i+1].length){
                    if(word[i+1].length>longest.length){
                        // longest=[]
                    longest.push(word[i+1]);
                }
            }
        }
        }
        let dupli=new Set(longest);
        let newArray=[...dupli];
        return newArray;
            }
        }
    console.log(longestWord("Hello world of programming"))


