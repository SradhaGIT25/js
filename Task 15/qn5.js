// function matrixUpdate(array){
//     let newArray=[]
//     let finalArray=[]
//     let index;
//     let zeroIndex=0


// for(let i=0;i<array.length;i++){
//     let element=array[i];
//     console.log(array[i]);

//         if(array[i].includes(0)){
//             index=i;
//             zeroIndex=array[i].indexOf(0);
//             console.log(zeroIndex)
//             newArray.push(array[i]);
//             let newlen=array[i].length;
//             console.log(newlen)
//             for(let j=0;j<array[i].length;j++){
//                 array[i][j]=array[i][j].toString().replaceAll(array[i][j],0);
//             }
//             newArray=newArray.flat();
//             array.splice(i,1,newArray);
//             console.log(array);
//         }
//     }
//     for(let i=0;i<array.length;i++){
//         array[i][zeroIndex]=0;
//     }
//     console.log(array);
// }
// console.log(matrixUpdate([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(matrixUpdate([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))


function matrixUpdate(array){
    let newArray=[]
    let finalArray=[]
    let index;
    let zeroIndex=0
    let r=[]
    let c=[]
    let main=[]


for(let i=0;i<array.length;i++){
        let element=array[i];
    for(let j=0;j<array[i].length;j++){

        if(array[i][j]===0){
            r.push(i)
            c.push(j)
        }
    }
}

for(let i=0;i<array.length;i++){
    for(let j=0;j<array[i].length;j++){
        if(r.includes(i) || c.includes(j)){
            main[i][j]=0;
        }
    }
}
for(let i=0;i<array.length;i++){
console.log(main[i]);
}
return main;
}

console.log(matrixUpdate([[1,1,1],[1,0,1],[1,1,1]]));
console.log(matrixUpdate([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))