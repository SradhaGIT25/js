import findPath from './qn5.ts'

const testCases:obj[]=[{expected :  ['a','b','c'] ,  input1 :   {a:{b:{c:1}}} , input2 :"c"},
{expected :  [ 'c', 'e' ] ,  input1 :  {a:{b:{d:6},c:{e:9}}} , input2 : "e" },
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 : [2]},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 : 2 },
{expected :  false ,  input1 :  {a:{b:{c:1}}}, input2 : -2},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2: "string"},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2:[]},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 : {}},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 : 0},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2:true},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 : false},
{expected :  false ,  input1 :  "" , input2 : ""},
{expected :  false ,  input1 :  {}  , input2 : {}},
{expected :  false ,  input1 :  2  , input2 : {a:{b:{c:1}}} },
{expected :  false ,  input1 :  -2 , input2 : {a:{b:{c:1}}}},
{expected :  false ,  input1 :  [] , input2 : {a:{b:{c:1}}}},
{expected :  false ,  input1 :  true , input2 : {a:{b:{c:1}}}},
{expected :  false ,  input1 :  false , input2 : 2},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 :null},
{expected :  false ,  input1 :  null , input2 : {a:{b:{c:1}}}},
{expected :  false ,  input1 :  {a:{b:{c:1}}} , input2 :undefined},
{expected :  false ,  input1 :  undefined , input2 :{a:{b:{c:1}}}},
{expected :  false ,  input1 :  [2,3,5] , input2 :2},
{expected :  false ,  input1 :  ["23","34"] , input2 :{a:{b:{c:1}}}},
{expected :  false ,  input1 :  [23,"34"] , input2 :{a:{b:{c:1}}}},
{expected :  false ,  input1 :  [0] , input2 : 0}];

type obj={
    input:string | number | boolean | object | string[] | number[] | string[][] | number[][] | null | undefined
    expected: object | boolean
}


test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result:object | boolean = findPath(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if (typeof testCase.expected === "object") {
            if (objectEquality(result, testCase.expected) === "equal" || (objectEquality(result, testCase.expected) === false)) {
                console.log("test ".concat(index + 1, " passed"));
            }
            else {
                console.log("test ".concat(index + 1, " failed"));
            }
        }
    });
}

function objectEquality(obj1:object,obj2:object){
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
        return "Not Equal";
        }
    }
        return "Equal";
    }
    else{
        return "Not Equal";
    }
    }
    }





