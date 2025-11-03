// // filter()
testCases=[
{expected : [2,4] , input:[1,2,3,4]},
{expected :  false , input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  [456] , input: [456]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "C"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} , 
{expected :  false , input: {"apple":2, "banana":2, "orange":3}} , 
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} , 
{expected : false , input:[{"CAT" : "CAT"}]}
];  



test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = filtering(testCase.input);
        
    console.log(result);

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
   

function filtering(numbers2){
    if(!Array.isArray(numbers2) || numbers2.length === 0 || numbers2 === null || numbers2 === undefined){
        return false;
    }
    else{
        for(let i=0;i<numbers2.length;i++){
            if(typeof numbers2[i] !== "number"){
                return false;
            }
        }
        let filArray=[];
        let evenNum=myFilter(numbers2,isEven);
        return (evenNum)
        function myFilter(array1,fun){
        for(let i=0;i<=array1.length-1;i++){

            if(fun(array1[i])){
            filArray.push(array1[i]);
            }        
        }
         return (filArray);
        }
        function isEven(element){
                return element%2==0         
}
}
}