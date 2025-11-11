testCases=[{expected : [ 'Data loaded!', 'Network updated' ]  , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2:2},
{expected : [ 'Data loaded!', 'Network updated', 'LOGIN SUCCESS!!' ]  , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2:3},
{expected :  []  , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2:0},
{expected :  [ 'Data loaded!']  , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2:1},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : "2"},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : [2]},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : -2},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : "-2"},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : "-2"},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] , input2 : [1,2,3,4]},
{expected :  false , input1 : "" , input2 : "" },
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})], input2 : ""},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})], input2 : true},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})], input2 : false},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] ,input2 : {}},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] ,input2 : []},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] ,input2 : null},
{expected :  false , input1 : [new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})] ,input2 : undefined},
{expected :  false , input1 : true , input2: 2},
{expected :  false , input1 : false , input2: 2},
{expected :  false , input1 : null , input2: 2},
{expected :  false , input1 : undefined , input2: 2}];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    output : number[][] | boolean;
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | string[] = ParallelLimit(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else{
        for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}


function ParallelLimit(tasks,limit){
    if(typeof tasks !== Promise || typeof limit !== "number" || limit === null || tasks === null || limit === undefined || tasks === undefined){
        return false;
    }
    else{
        let array=[]
    for(let i=0;i<limit;i++){
        array.push(tasks[i])
    }
    let arr=[]
    for(let i=limit;i<tasks.length;i++){
        arr.push(tasks[i]);
    }
Promise.all(array).then((values)=>{console.log(values)});
Promise.all(arr).then((values)=>{console.log(values)});
}
    }

// ParallelLimit([new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Data loaded!")},2000)}),
//     new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Network updated")},1000)}),
//     new Promise((resolve,reject)=>{setTimeout(()=>{resolve("LOGIN SUCCESS!!")},3000)})],2);