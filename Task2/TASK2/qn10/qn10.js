testCases=[{expected : "fl", input:["flower", "flow", "flight"]},
{expected : "" , input:["dog", "racecar", "car"]},
{expected : false , input:[]},
{expected : false , input:[0]},
{expected : false , input:"string"},
{expected : false , input:true},
{expected : false , input:false},
{expected : false , input:null},
{expected : false , input:undefined},
{expected : false , input:{}},
{expected : false , input:[78,45,67]},
{expected : false , input:""},
{expected : "app" , input:["apple", "app", "application"]},
{expected : "whwjshjwswhs" , input:["whwjshjwswhs"]},
// {expected :  , input:["78","45","67"]},
{expected :  '' , input:[""]},
{expected : "kit" , input:["kite","kit","kitten"]},
{expected : false , input:{2:4}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = longestPrefix(testCase.input);
            

    for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function longestPrefix(words){
    if( words === null || words === undefined){
        return false;
    }
    for(let i=0;i<words.length;i++){
        if(typeof words[i]!=="string"){
            return false;
        }
    }
    if(!Array.isArray(words) || words.length===0 ){
        return false;
    }
    else{
    // let words=["flower", "flow", "flight"]
    let sorted=words.sort((a,b)=>(a.length-b.length));
    console.log(sorted);
    let smallest=sorted[0];
    console.log(`The smallest word in the list is, ${smallest}`);

    let prefix="";
    for(let i=0;i<smallest.length;i++){
    let letter=smallest[i];
    if(sorted.every(word=>word[i]===letter)){
        prefix=prefix+letter;
    }
        else{
            break;
        }
    }
    // console.log("longest common prefix is",prefix);
    return prefix;
        }
    }
// console.log(longestPrefix(["78","45","67"]))