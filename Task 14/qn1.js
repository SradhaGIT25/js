testCases = [{ expected :[ 54, 9, 'HI' ] , input: [54, false, null, 9, "HI", 0]}, 
{ expected : [ 54, 9, 'HI'], input:[54, false, null, 9, "HI", 0, NaN , undefined , 0, -0, 0n , ""] } , 
{ expected : [] , input:[-0,undefined] },
{ expected : ["hi"] , input:["hi",0n]},
{ expected : [] , input:[null] },
{ expected : [] , input:[Number("9")]},
{ expected : [34,35] , input:[34,35,NaN]},
{ expected : false, input:"78"},
{ expected : false , input:true},
{ expected : ["renson","hsuytarp","ronsen","pratyush"] , input:["renson","hsuytarp","ronsen","pratyush"]},
{ expected : [] , input:[0]},
{ expected : [-45] , input:[-45]},
{ expected : false , input:5467},
{ expected : false , input:-5467},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: true },
{ expected : false , input: null },
{ expected : false , input: undefined },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = removeFalsy(testCase.input);

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


function removeFalsy(array){
    if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined){
        return false;
    }
    else{
        let newArray=[]
    let falsy=[null,undefined,false,NaN,0,-0,0n,"",[],{}];
    for(let i=0;i<array.length;i++){
        if(!falsy.includes(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray;
    }
}
// console.log(removeFalsy([54, false, null, 9, "HI", 0, {}, NaN , undefined , 0, -0, 0n , ""]));
