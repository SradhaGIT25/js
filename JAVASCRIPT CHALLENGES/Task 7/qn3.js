testCases=[{expected : 4 , input:[1, 2, 3, 5, 6]},
  {expected :  false , input: [10, 11, 13, 14, 15]} , 
  {expected :  false , input: [1, 3, 5]} ,
  {expected :  false , input: "sradha"} ,
  {expected :  false , input: true} ,
  {expected :  false , input: false} ,
  {expected :  false , input: []} ,
  {expected :  false , input: [ 1, 2, 3, 4, 5]} ,
  {expected :  3 , input: [5, 4, 2, 1]} ,
  {expected :  false , input: ""} ,
  {expected :  false , input: 0} ,
  {expected :  false , input: [0, 3, 2, 4, 5]} ,
  {expected :  false , input: ["sds", "sdaS", "sqf", "wefe", "ggf"]} ,
  {expected :  false , input: {}} ,
  {expected :  false , input: [10]} ,
  {expected :  false , input: [10, "sds", 13, "qwd", 15]} ,
  {expected : false , input:[{}]}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = missing(testCase.input);
            console.log(testCase.expected," ",result)
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
if(!Array.isArray(numbers) || numbers.length===0){
  return false;
}
else{
  let num=numbers.sort();
  let number =[...num];
let len=numbers.length;
let first=numbers[0];
if(number[0] !== 1){
  return false;
}
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
    else{
      return false;
    }
          
          return found;

    
    
    // return missed;
}
}


    
