testCases=[{expected :  11 ,  input : [[2],[3,4],[6,5,7],[4,1,8,3]] },
{expected :  8 ,  input :  [[4],[1,3],[2,5,3],[4,1,3,8]]},
{expected :  -7 ,  input :  [[1],[-2,-1],[0,-3,6],[2,0,1,-3]]},
{expected :  false ,  input :  ["[1]","[-2,-1]","[0,-3,6]","[2,0,1,-3]"]},
{expected :  0 ,  input :  [[0]]},
{expected :  false ,  input :  [0]},
{expected :  false ,  input :  [{}]},
{expected :  false ,  input :  [[2],[3],[5]]},
{expected :  false ,  input :  ["(",")","(",")"]},
{expected :  false ,  input :  "ybcd"},
{expected :  false ,  input :  "a(v)"},
{expected :  false ,  input :  "" },
{expected :  false ,  input :  {} },
{expected :  false ,  input :  2 },
{expected :  false ,  input :  -2 },
{expected :  false ,  input :  [] },
{expected :  false ,  input :  true},
{expected :  false ,  input :  false},
{expected :  false ,  input :  null},
{expected :  false ,  input :  undefined},
{expected :  false ,  input :  ["1"]}];


test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = minPath(testCase.input);


            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }

        }
    );
}

function minPath(array){
    if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined){
        return false;
    }
    else{
        for(let i=0;i<array.length-1;i++){
            if(!Array.isArray(array[i]) || array[i].length >= array[i+1].length){
                return false;
            }
        }
            let sorted;
            let lowest=[];
            let path=0;
        for(let i=0;i<array.length;i++){
            if(!Array.isArray(array[i])){
                return false;
            }
            sorted=array[i].sort((a,b)=>a-b);
            lowest.push(sorted[0]);
        }
        for(let i=0;i<lowest.length;i++){
            path=path+lowest[i]
        }
        return path;
        }
        }
        // console.log(minPath([[1],[-2,-1],[0,-3,6],[2,0,1,-3]]));