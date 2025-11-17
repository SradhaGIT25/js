// testCases=[{expected : 16  , input : 2},
// {expected : 25  , input : 3},
// {expected :  36 , input : 4},
// {expected :  4 , input : 0},
// {expected :  0 , input : -2},
// {expected :  false , input : [] },
// {expected :  false , input : [1,2,3,4]},
// {expected :  false , input : "5"},
// {expected :  false , input : "" },
// {expected :  false , input : true },
// {expected :  false , input : false },
// {expected :  false , input : {} },
// {expected :  false , input : [1,2,3,4] },
// {expected :  false , input : undefined },
// {expected :  false , input : null }];

// type obj={
//     input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
//     output : number | boolean;
// }

// test(testCases);
// function test(testCases: obj[]):void{
//     testCases.forEach((testCase,index) =>{
//         const result: false | number = Waterfall(testCase.input);

//         // if(typeof testCase.expected === "boolean"){
//             if(result === testCase.expected){
//                 console.log(`test ${index + 1} passed`);
//             }
//             else{
//                 console.log(`test ${index + 1} failed`);
//         }
//     }
//     );
// }


function Waterfall(tasks: Array<(x:number) => number>): (value : number)=>number{
return async function(value:number){
    if(typeof value !== "number" || value === null || value === undefined){
        return false;
    }
        for(let i=0;i<tasks.length;i++){
            console.log(tasks[i])
            value=await tasks[i](value);
        }
       
        return value;
    }
}


const add = async (x:number) => x + 2;
const square = async (x:number) => x * x;
async function pickResult(number){
  return await Waterfall([add, square])(number);
}
console.log(pickResult(2).then((value)=>console.log(value)));

