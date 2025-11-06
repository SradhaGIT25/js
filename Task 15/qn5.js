testCases=[{expected :  [[1,0,1],[0,0,0],[1,0,1]] ,  input1 :  [[0,1,2,0],[3,4,5,2],[1,3,1,5]] },
{expected :  [[0,0,0,0],[0,4,5,0],[0,3,1,0]] ,  input1 :  [[0,1,2,0],[3,4,5,2],[1,3,1,5]] },
{expected :   [9] ,  input1 :  [9]},
{expected :   [-1,9],  input1 :  [-1,9] },
{expected :  false ,  input1 :  ["2",3,5]},
{expected :  false ,  input1 :  ["2","3","5"]},
{expected :  [0] ,  input1 :  [0]},
{expected :  false ,  input1 :  [{}]},
{expected :  [[2],[3],[5]] ,  input1 :  [[2],[3],[5]]},
{expected :  [2,3,3,5] ,  input1 :  [2,3,3,5]},
{expected :  false ,  input1 :  "" },
{expected :  false ,  input1 :  {} },
{expected :  false ,  input1 :  2 },
{expected :  false ,  input1 :  -2 },
{expected :  false ,  input1 :  [] },
{expected :  false ,  input1 :  true},
{expected :  false ,  input1 :  false},
{expected :  false ,  input1 :  null},
{expected :  false ,  input1 :  undefined}];


test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = matrixUpdate(testCase.input1,testCase.input2);

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
      if (result[i] === testCase.expected[i]) {
      console.log(`test ${index + 1} passed`);
    } 
  else{
      console.log(`test ${index + 1} passed`);
  }
}
        }
    }
    );
}

function matrixUpdate(array){
    if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined ){
        return false;
    }
    else {
        for(let i=0;i<array.length;i++){
            if(!Array.isArray(array[i])){
                return false;
            }
        }
    let r=[];
    let c=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]===0){
                if(!r.includes(i))
                r.push(i);
                if(!c.includes(j))
                     c.push(j);
                }
            }
        }

    for(let i=0;i<array.length;i++){
        if(r.includes(i)){
        for(let j=0;j<array[i].length;j++){
            array[i][j]=0;
        }
    }
}

         for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].length;j++){
                if(c.includes(j)){      
            for(let k=0;k<c.length;k++){
                    array[i][c[k]]=0;
                }
            }
            }
        }
    return array;

    }
}
// console.log(matrixUpdate([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
// console.log(matrixUpdate([[1,1,1],[1,0,1],[1,1,1]]))