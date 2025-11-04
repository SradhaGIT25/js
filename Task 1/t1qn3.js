testCases=[{expected : [{ name: "Alice", status: "Fail" },{ name: "Bob", status: "Pass" },{ name: "Charlie", status: "Fail" },] , input: [{ name: "Alice", marks: 42 },{ name: "Bob", marks: 67 },{ name: "Charlie", marks: 35 }]},
{expected :  false, input: "BIRD"} , 
{expected :  false , input: ["apple"]} , 
{expected :  false , input: [456,67,3790]} , 
{expected :  false , input: "345869"} , 
{expected :  false , input: "C"} , 
{expected :  false , input: 563463597} , 
{expected :  false , input: "@#%%%^"} , 
{expected :  false , input: []} ,  
{expected :  false , input: {}} , 
{expected :  false , input: true} , 
{expected :  false , input: ""} , 
{expected :  false , input: false} , 
{expected :  false , input: null} , 
{expected :  false , input: undefined} , 
{expected : false , input:[{"CAT" : "CAT"}]}];  

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = findStatus(testCase.input);
            
    if(typeof testCase.expected !== "boolean" ){
        for(let i=0;i<testCase.expected.length;i++){
        if (objectEquality(result,testCase.expected) === "equal" || (objectEquality(result,testCase.expected) === false) ) {
        console.log(`test ${index + 1} passed`);
        } 
        else {
                console.log(`test ${index + 1} failed`);
        }
        }
        }
  
    else{
        if(result === testCase.expected){
         console.log(`test ${index + 1} passed`);
        }
        else{
           console.log(`test ${index + 1} failed`);     
        }
    }
    });
} 

function findStatus(obj){
        if(!Array.isArray(obj) || obj.length === 0 || obj === null || obj ===  undefined){
                return false;
        }
        else{
                for(let i=0;i<obj.length;i++){
                        if(obj[i] !== "object"){
                                return false;
                        }
                }
                let status="";

function findStatus(marks){
        if(marks<=45){
        return "Fail";
        }
        else{
        return "Pass";
        }
        }

const obj1={
        name:"Alice",
        status:findStatus(),
}

const obj2={
        name:"Bob",
        status:findStatus(),
}

const obj3={
        name:"Charlie",
        status:findStatus(),
        
}

obj1.status=findStatus(obj1.marks)
obj2.status=findStatus(obj2.marks)
obj3.status=findStatus(obj3.marks)

let array=[obj1,obj2,obj3];
return (array);
        }
}

function objectEquality(obj1,obj2){
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return false;
    }
    else{
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    if(flat1.length===flat2.length){
    for(let i=0;i<flat1.length;i++){
    if(!flat2.includes(flat1[i])){     
        return "not equal";
        }
    }
        return "equal";
    }
    else{
        return "not equal";
    }
    }
    }

