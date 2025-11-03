testCases = [{ expected :{ 1: "a", 2: "b" }, input:{ a: 1, b: 2 }}, 
{ expected : true, input:{ 12: 1, 45: 2 }} , 
{ expected : false , input:{ a: true, a: false }},
{ expected : false , input:5320},
{ expected : false , input:true},
{ expected : false , input:"sradha"},
{ expected : false , input:[]},
{ expected : false , input:{}},
{ expected : false , input:{ a: {name :"sradha"}, b: {name : "shilpa"} }},
{ expected : false , input:false},
{ expected : { 1: "a", 2: "b" } , input:{ "a": 1, "b": 2 }},
{ expected : false , input:530},
{ expected : { 12:"1", 45: "2" } , input:{ "12": 1, "45": 2 }},
{ expected : false , input: [{}]},
{ expected : false , input: null},
{ expected : false , input: undefined},
{ expected : false , input: { a: [1,2], b: [3,4]}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = objInvert(testCase.input);
            
// console.log(testCase.expected , " ", testCase.input2 , " " , result )
    if (objectEquality(result,testCase.expected) === "equal" || (objectEquality(result,testCase.expected) === false) ) {
        console.log(`test ${index + 1} passed`);
    } else {
        console.log(`test ${index + 1} failed`);

    }
  });
}

function objInvert(obj){
    if(typeof obj !== "object" || obj === null || obj === undefined){
        return false;
    }
    else{
        let array1=Object.entries(obj)
        if(typeof array1.length ===0){
            return false;
        }
        // console.log(array1)
        for(let [keys,value] of array1){
            if(typeof keys === "object" || typeof keys === "boolean"){
                return false;
            }
        }
        let subArray=[]
        let mainArray=[]
        for(let i=0;i<=array1.length-1;i++){
            subArray[i]=array1[i].reverse()
        }
        // console.log(subArray)
        const obje=Object.fromEntries(subArray);
        return (obje)
    }  
}
    // let obj1={a:1 , b:2};



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

