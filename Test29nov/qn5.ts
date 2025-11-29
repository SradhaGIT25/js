export default function findAvailableSeats(seatGrid:number[][],groupSize:number){
    if(!Array.isArray(seatGrid) || seatGrid.length===0 || seatGrid===null || seatGrid===undefined){
        return false;
    }
    else{
        for(let i=0;i<seatGrid.length;i++){
            if(!Array.isArray(seatGrid[i])){
                return false;
            }
            for(let j=0;j<seatGrid[i].length;j++){
                if(typeof seatGrid[i][j]!=="number"){
                    return false;
                }
            }
        }

        let indexes:number[][]=[]
    let count:number=0;
    let flag:boolean=true;
    let res:number[]=[]
for(let i=0;i<seatGrid.length;i++){
    for(let j=0;j<seatGrid[i].length;j++){
        if(seatGrid[i][j]===0){
            indexes.push([i,j]);
            count++;
            flag=true;
        }
        else{
            flag=false;
            indexes=[];
            count=0;
        }
    }
}
if(flag===true && count===groupSize){
    res.push(indexes[0]);
    indexes=[];
    count=0;
}
return res.flat();
    }
    
}
console.log(findAvailableSeats([[1,0,1],[1,1,1,],[1,0,0]],2))

