testCases = [{ expected :[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] , input:["eat", "tea", "tan", "ate", "nat", "bat"] }, 
{ expected :[["listen", "silent"],["restful", "fluster"],["hello"],["world"]], input:["listen", "restful","silent", "fluster","hello", "world"] } , 
{ expected : [["care", "race", "acre"],["dog", "god"],["cat"]] , input:["care", "race", "acre", "dog", "god", "cat"] },
{ expected : [["tables","stable"],["rat","tar"],["mat"]] , input:["tables","rat","stable","mat","tar"]},
{ expected : [["was","saw"],["lips","slip"],["clip"]] , input:["was","slip","saw","lips","fool"] },
{ expected : [["tinu","unit"],["low","owl"]] , input:["tinu","owl","low","unit"]},
{ expected : [["own","now","won"],["nib","bin"]] , input:["nib","own","bin","now","nib","won"]},
{ expected : [["polo","loop","pool"],["melon","lemon"]] , input:["polo","melon","loop","lemon","pool"]},
{ expected : [["sradha","adarsh"],["jinu","niju"]] , input:["sradha","jinu","adarsh","niju"]},
{ expected : [["renson","ronsen"],["pratyush","hsuytarp"]] , input:["renson","hsuytarp","ronsen","pratyush"]},
{ expected : [["war","raw"],["team","meat"],["risk"]] , input:["war","risk","meat","raw","team"]},
{ expected : [["leap","plea"],["swing","wings"],["ping"]] , input:["leap","swing","plea","wings","ping"]},
{ expected : false , input:5467},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: [{}] },
{ expected : false , input: true },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = anagramCheck(testCase.input);
            
console.log(testCase.expected , " " , result )
for(let i=0;i<result.length;i++){
    if (result[i] === testCase.expected[i] ) {
        console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);
  });
}

    

function anagramCheck(words){
    if(!Array.isArray(words)){
        return false;
    }
    else{
        const sets={}

    for(let i=0;i<words.length;i++){
        const word=words[i];
        // console.log(word)
        if(typeof word !== "string"){
            return false;
        }
        const sorted=word.split('').sort()

        if(!sets[sorted]){
            sets[sorted]=[];
        }
        sets[sorted].push(word);
    }
    const result=[];
    const res=Object.keys(sets);
    for(let i=0;i<res.length;i++){
        result.push(sets[res[i]]);
    }
    return result;
}
    }

// let array1=[];
// let array2=[];
// let count1=0;
// let count2=0;
// let words=["care", "race", "acre", "dog", "god", "cat"];
// for(let i=0;i<words.length-1;i++){
//         // console.log(words[i]);
//         let string1=words[i];
//         let string2=words[i+1];
//         console.log(string2);

// let letters1=[...string1];
// let letters2=[...string2];

// let frequency1={};
// let frequency2={};
// let count1=0;
// let count2=0;
// if(letters1.length===letters2.length){
// for(let i=0;i<string1.length;i++){
//     if(string1.indexOf(string1[i])<i){
//     continue;
//     }
//     let count1=0;
//     for(let j=0;j<letters1.length;j++){
//         if(string1[i]==(letters1[j])){
//         count1++;
// }
//     }
// frequency1[string1[i]]=count1;
// }
// console.log(frequency1);


// for(let i=0;i<string2.length;i++){
//     if(string2.indexOf(string2[i])<i){
//         continue;
//     }
//     let count2=0;
//     for(let j=0;j<letters2.length;j++){
//         if(string2[i]===(letters2[j])){
//         count2++;
// }
//     }
// frequency2[string2[i]]=count2;
// }
// console.log(frequency2);

// let anagramCheck=true;
// for(let letter in frequency1){
//     if(frequency1[letter]!==frequency2[letter]){
//         anagramCheck=false;
//         break;
//     }
// }
// if(anagramCheck){
//         array1.push([words[i],words[i+1]]);
  
//     console.log("anagram");                                                                         
// }
// else{
//         array2.push(words[i+1]);
//     console.log("not anagram");
// }
// }else{
//     console.log("anagram");
// }
// }
// console.log(array1);
// array3=array1[0]+array1[1];
// console.log(array3);
// console.log(array2);

// let words=["care", "race", "acre", "dog", "god", "cat"]
// let arraytemp=[];
// let temporary1=[];
// let temporary2=[];
// let temporary3=[];
// for(let i=0;i<=words.length-1;i++){
//     let word=words[i];
//     let sorted=word.split('').sort().join('');
//     // console.log(sorted);
//     arraytemp.push(sorted);
//     // console.log(arraytemp);
// }
// for(let i=0;i<=arraytemp.length-1;i++){
//     for(let j=0;j<=arraytemp.length-1;j++){
//         temporary1.push(arraytemp[i]); 
//         if(arraytemp[i]==arraytemp[i+1]){
//             temporary1.push(arraytemp[i+1]);
//     }
//     else{
//         temporary2.push(arraytemp[i+1]);
//         if(arraytemp[i]==arraytemp[i+1]){
//             temporary2.push(arraytemp[i+1]);
//     }
//     else{
//         temporary3.push(arraytemp[i+1]);
//         if(arraytemp[i]==arraytemp[i+1]){
//             temporary3.push(arraytemp[i+1]);
//     }

//     }
//     }
//     }
//      console.log(temporary1);
//         console.log(temporary2);
//         console.log(temporary3);
// }
       

