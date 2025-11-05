testCases = [{ expected : true, input1: "a",input2 :"b"}, 
{ expected : true, input1: "aa",input2 :"aab"},
{ expected : true, input1: "aaab",input2 :"aab"},
{ expected : true, input1: "aaab",input2 :"aabb"},
{ expected :  false , input1:"36%#7gfhf" , input2 : "gjgfj"  },
{ expected : false , input1:34 , input2:"aaa"},
{ expected : false , input1:34 , input2:34},
{ expected : false , input1:"34",input2 :"aa"},
{ expected : false , input1:"34",input2 :"34"},
{ expected : false , input1:"aa",input2 :"34"},
{ expected : false , input1:-34 ,input2 :"aa"},
{ expected : false , input1:"aa" ,input2 :-34},
{ expected : false , input1:-34,input2 :-34},
{ expected : false , input1:"%^&%%",input2 : "aa"},
{ expected : false , input1:"aa",input2 : "%^&%%"},
{ expected : false , input1:"%^&%%",input2 : "aa"},
{ expected :false , input1:["36%#7gfhf"],input2 : "aa"},
{ expected :false , input1:"aa",input2 : ["36%#7gfhf"]},
{ expected :false , input1:["36%#7gfhf"],input2 : ["36%#7gfhf"]},
{ expected : false , input1:"",input2 :""},
{ expected : false , input1:"aa",input2 :""},
{ expected : false , input1:"",input2 :"aa"},
{ expected : false , input1: false,input2 :false},
{ expected : false , input1: true,input2 :true},
{ expected : false , input1: false,input2 :true},
{ expected : false , input1: true,input2 :false},
{ expected : false , input1: [] ,input2 :"aa"},
{ expected : false , input1: "aa" ,input2 :[]},
{ expected : false , input1: [] ,input2 :[]},
{ expected : false , input1: [{}] ,input2 :"aa"},
{ expected : false , input1: null ,input2 :"aa"},
{ expected : false , input1: undefined, input2 : "aa" },
{ expected : false , input1:{},input2 : "aa"}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = including(testCase.input1,testCase.input2);

for(let i=0;i<result.length;i++){
    if (result[i] !== testCase.expected[i] ) {
        console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);
  });
}

function including(stringA,stringB){
    if(typeof stringA !=="string" || typeof stringB !=="string" || stringA === null || stringB === null || stringA === undefined || stringB === undefined){
        return false;
    }
    else{
        let arrayB=[...stringB];
    if(stringB.length>=stringA.length){
        for(let i=0;i<stringA.length;i++){
            if(stringB.includes(stringA[i])){
                stringB=arrayB.splice(stringA.indexOf(stringA[i]),1,"");
            }
            else{
                return false;
            }
        }
                return true;
        }
    else{
        return false;
    }
}
    }
    
// console.log(including("a","b"));
// console.log(including("aa","aab"));
// console.log(including("aaab","aab"));
// console.log(including("aaab","aabb"));

