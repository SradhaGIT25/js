// testCases=[{expected : 30  , input : 5},
// {expected : 21  , input : 2},
// {expected :  24 , input : 3},
// {expected :  15 , input : 0},
// {expected :  9 , input : -2},
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
//         const result: false | number = Pipe(testCase.input);

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

function Pipe(...fns : Array<(x:number) => number>) : (number:number)=>number{
let answer: ((x: number) => number)
    let number:number;
    
    function all(number : number){
        for(let i=0;i<fns.length;i++){
             answer=fns[i];
             number=answer(number);
        }
        console.log(number);
    }
    return all;
}
const Piped=Pipe((x)=> x + 5, (x) => x * 3);
Piped(5);
Piped(2);
Piped(3);
Piped(0);
Piped(-2);