testCases=[{expected :  3 ,  input :  [2,1,3,2,1] },
{expected :  false ,  input :  [2,1,3,3,2,1] },
{expected :   3 ,  input :  [2,1,3,4,2,1]},
{expected :  false ,  input :  ["2",3,5]},
{expected :  false ,  input :  ["2","3","5"]},
{expected :  0 ,  input :  [0]},
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
        const result = uniqueNum(testCase.input);

        console.log(testCase.expected," ",result);

            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }

        }
    );
}

function uniqueNum(array){
if(!Array.isArray(array) || array.length === 0 || array === null || array === undefined){
        return false;
    }
    else{
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="number"){
                return false;
            }
        }
        
        let s;
        let string1=array.toString().replaceAll(",","")
     console.log(string1)
            let letters=string1.split("");
        console.log(letters)
        let frequency={};

        let count=0;

for(let i=0;i<string1.length;i++){
    if(string1.indexOf(string1[i])<i){
    continue;
    }
    let count=0;
    for(let j=0;j<letters.length;j++){
        if(string1[i]==(letters[j])){
        count++;
}
    }
frequency[string1[i]]=count;

if(frequency[string1[i]]===1){
    return Number(string1[i]);
}
}

for(let i=0;i<string1.length;i++){
    for(let j=0;j<string1.length;j++){
        if(string1[i]===string1[j]){
            console.log("no unique numbers");
            return false;
        }
    }
}
// return false;
// else{
//     s=[...new Set(array)];
//     console.log(s);
//     for(let i=0;i<array.length;i++){
//         if(s.includes(array[i])){
//             return false;
//         }
//     }
// }


    }
}     
// console.log(uniqueNum([2,1,3,2,1]));

