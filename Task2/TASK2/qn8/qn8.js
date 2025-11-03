testCases=[{expected : 4 , input:[1, 2, 3, 5, 6]},
  {expected :  12 , input: [10, 11, 13, 14, 15]} , 
  {expected :  false , input: [10, 11, 13, 15]} ,
  {expected :  false , input: "sradha"} ,
  {expected :  false , input: true} ,
  {expected :  false , input: false} ,
  {expected :  false , input: null} ,
  {expected :  false , input: undefined} ,
  {expected :  false , input: []} ,
  {expected :  9 , input: [10, 11, 12, 13, 14, 15]} ,
  {expected :  13 , input: [15, 14, 12, 11]} ,
  {expected :  false , input: ""} ,
  {expected :  false , input: 0} ,
  {expected :  12 , input: [10, 13, 11, 15, 14]} ,
  {expected :  false , input: ["sds", "sdaS", "sqf", "wefe", "ggf"]} ,
  {expected :  false , input: {}} ,
  {expected :  9 , input: [10]} ,
  {expected :  false , input: [10, "sds", 13, "qwd", 15]} ,
  {expected : false , input:[{}]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = missing(testCase.input);

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}

function missing(numbers){

  for (let i=0;i<numbers.length;i++){
    if(typeof numbers[i] !== "number"){
      return false;
    }
  }
// console.log(num)
if(!Array.isArray(numbers) || numbers.length===0 || numbers === null || numbers === undefined){
  return false;
}
else{
  let num=numbers.sort();
  let number =[...num];
let len=numbers.length;
let first=numbers[0];
let last=numbers[len-1];
const a1=[];
let found=0;
let missed=0;
let count=0;
function createList(){
let n=len;
for(let i=first;i<=last;i++){
    a1.push(i);
}
}
createList();                                                                                                               
for(let i=0;i<a1.length;i++){
    if(!numbers.includes(a1[i])){
        found=a1[i];
        console.log(`Element not found is, ${found}`);
        missed=found;
        console.log(found)
        count++;  
    }
  }
  
    if(count>1){
      return false;
    }
    if(found!==0){
      return missed;
    }
          found=numbers[0]-1;
          console.log(`Element not found is, ${found}`);
          missed=found;
          count++;
          return found;

    
    
    // return missed;
}
}


    
