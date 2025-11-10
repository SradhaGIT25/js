testCases=[{expected :  2 ,  input :  "(()" },
{expected :  4 ,  input :  ")()())" },
{expected :   6 ,  input :  ")()()))(()("},
{expected :  false ,  input :  [-1,9] },
{expected :  false ,  input :  ["2",3,5]},
{expected :  false ,  input :  ["2","3","5"]},
{expected :  [1] ,  input :  [0]},
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
{expected :  false ,  input :  [0]}];


test(testCases);
function test(testCases){
    testCases.forEach((testCase,index) =>{
        const result = longsetParantheses(testCase.input);


            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }

        }
    );
}

function  longsetParantheses(str){
    if(typeof str !== "string" || str.length === 0 || str === null || str === undefined){
        return false;
    }
    else{
        for(let i=0;i<str.length;i++){
            let pattern=/[()]/;
        if(!pattern.test(str[i])){
            return false;
        }
        }
        let array=[]
    let indexes=[]
    let splitStr=""
    let last=""
for(let i=0;i<str.length;i++){
    if(str[i]==="("){
        splitStr=str.split(str[i]);
        last=splitStr[splitStr.length-1];
        for(let j=0;j<splitStr.length;j++){
            if(!indexes.includes(j)){
            if(splitStr[j]===")"){
                 indexes.push(j)
                array.push(str[i]);
                array.push(splitStr[j]);
            }
           
        }
        }          
    }
    
}
// console.log(array);
return array.length;
}
    }
    
// console.log(longsetParantheses(")()())"));
// console.log(longsetParantheses(")()()))(()("));



