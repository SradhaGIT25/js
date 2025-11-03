testCases = [{ expected : [ 10, 20, 30, 40 ], input: [10, 20, 15, 30, 22, 40] }, 
{ expected : [ 2, 5, 7, 8 ], input : [6, 9, 2, 0, 5, 7, 8, 2, 8] } ,
{ expected : [ -8, 2, 4, 24 ], input : [-8,2,4,-6,24,-7] } ,
{ expected : [ 3, 6, 8, 9 ] , input : [7,10,3,1,6,8,9,3,9] } ,
{ expected : [ 3, 6, 7, 8, 22 ], input : [11,3,6,7,8,22,5,1] } ,
{ expected : [ -6, 2, 4, 24 ], input : [3,-6,2,4,-6,24,-7] } ,
{ expected : [ 0, 2, 6, 9 ] , input : [7,9,0,2,6,9,2,8] } ,
{ expected : [ 1, 5, 6, 7, 8 ] , input : [8, 10, 1, 0, 5, 6, 7, 3, 8] } ,
{ expected : [ 2, 5, 8, 9, 24 ] , input : [10,2,5,8,9,24,6,1] } ,
{ expected : [], input : [] } ,
{ expected : [ 3, 10, 25, 30, 50 ], input : [3, 10, 25, 30, 12, 50] } ,
{ expected : [ -2, 0, 2, 6, 8 ], input : [-2,0,2,6,-18,8] } ,
{ expected : false , input : "string" } ,
{ expected : false , input : 67 } ,
{ expected : false, input : true } , 
{expected : false , input : false} ,
{expected : false , input : {}} ,
{ expected : [ 19, 40, 61, 79 ] , input : [89,19,40,61,8,79]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = orderedChain(testCase.input);

if(typeof result==="boolean"){
    if(result===testCase.expected){
      console.log(`test ${index + 1} passed`);
    } 
    else{
        console.log(`test ${index + 1} failed`);
    }     
}
else{

    for(let i=0;i<result.length;i++){
    if(result[i]!==testCase.expected[i]){
      console.log(`test ${index + 1} failed`);
    } 
}
        console.log(`test ${index + 1} passed`);  
}
});
}

function orderedChain(numbers){
if(!Array.isArray(numbers)){
    return false;
}
else{
    let newArray=[];
let rental=0;
let maximum=[]

let len=numbers.length;
    for(let i=0;i<len;i++){
    rental=numbers[i];
     newArray.push(numbers[i]);
    for(let j=i+1;j<len;j++){
        if(numbers[j]>rental){
            newArray.push(numbers[j]);
            rental=numbers[j]
        }
    }
    if(newArray.length>maximum.length){
        maximum=newArray;
    }
        newArray=[];
    }
return maximum;
}
}

