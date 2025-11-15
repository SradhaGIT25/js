import filterProducts from './qn5.ts'
const testCases:obj[]=[{expected: [ { name: 'Mouse', price: 800 } ], input1:[
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
]
, input2 : "Use"},
{expected: [ { name: 'Mouse', price: 800 } ], input1:[
{ name: "Laptop", price: 60000 },
{ name: "Mouse", price: 800 },
{ name: "Monitor", price: 12000 }
]
, input2 : "use"}],


type obj={
    name:string,
    price:number,
}

type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][].
    expected: obj[] | boolean,
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index)=>{
        const result:obj[] | boolean = filterProducts(testCase.input1,testCase.input2);

        if(typeof result === "boolean"){
            if(result===testCase.expected){
                console.log(`test ${index+1} passed`);
            }
            else{
                console.log(`test ${index+1} failed`);
            }
        }
        else if(typeof result === "object"){
            for(let i=0;i<result.length;i++){
                if(!objectEquality(result,testCase.expected)){
                console.log(`test ${index+1} failed`);
            }
            }
            console.log(`test ${index+1} passed`);
            
        }
    })
}

function objectEquality(obj1:object,obj2:object){
    let a1=Object.entries(obj1);
    let a2=Object.entries(obj2);
    let f1=a1.flat();
    let f2=a2.flat();

    if(f1.length===f2.length){
    for(let i=0;i<f1.length;i++){
        if(!f2.includes(f1[i])){
            return false;
        }
        else{
            return true;
        }
    }
}
else{
    return false;
}
}