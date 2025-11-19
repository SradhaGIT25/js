export default function matrixRotation(matrix:number[][]):number[][] | boolean{
    if(!Array.isArray(matrix) || matrix.length === 0 || matrix === null || matrix === undefined){
        return false;
    }
    else{
        for(let i=0;i<matrix.length;i++){
            if(!Array.isArray(matrix[i] || matrix[i].length === 0 || matrix[i] === null || matrix[i]===undefined)){
                return false;
            }
            for(let j=0;j<matrix[i].length;j++){
                if(typeof matrix[i][j]!== "number" || matrix[i][j]===null || matrix[i][j]===undefined){
                    return false;
                }
            }
        }

        let r:number=matrix.length;
    let c:number=matrix[0].length;
    let top:number=0;
    let left:number=0;
    let right:number=r-1;
    let bottom:number=c-1;

    let array:number[]=matrix.flat(Infinity);

    let main:number[][]=Array.from({length:c},()=>Array(r).fill(0));
    let value:number=0;

    while(top<=bottom && left<=right){
        for(let i=top;i<=bottom;i++){
            main[i][right]=array[value++];
        }
        right--;
    }

    return main;

}

    }
    
// console.log(matrixRotation([
// [1,2,3],
// [4,5,6],
// [7,8,9]]))

// console.log(matrixRotation([
// [1,2,3],
// [4,5,6]]))













