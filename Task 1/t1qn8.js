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
{ expected : false , input: null },
{ expected : false , input: undefined },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = anagramCheck(testCase.input);

for(let i=0;i<result.length;i++){
    if (result[i] === testCase.expected[i] ) {
        console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);
  });
}

    

function anagramCheck(words){
    const dup = [];
    if(!Array.isArray(words) || words === null || words === undefined){
        return false;
    }
    else{
        for(let i=0;i<words.length;i++){
            if(typeof words[i] !== "string"){
                return false;
            }
        }
        let newArray=[];
        let mainArray=[];
        let sarray=[]
        let group=[]

        let str1=""
        let str2=""

         for(let i=0;i<words.length;i++){
            const word=words[i];
        const sorted=word.split('').sort()
            sarray.push(sorted);
        
         }


for(let j=0;j<sarray.length;j++){
    let key=sarray[j].join("");
    for(let i=0;i<words.length;i++){
        
        const word=words[i];
        if(typeof word !== "string"){
            return false;
        } 
        if(!dup.includes(word)){
            if(key===word.split("").sort().join("")){
            
            newArray.push(word);
                dup.push(word);
        }
    }
     
            }
            newArray=[]
            mainArray.push(newArray);
        }
        group=new Set(mainArray);
        return group;
    
    }
}
 
