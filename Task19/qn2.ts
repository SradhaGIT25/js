function FindAvailableSeats(seatGrid:number[][], groupSize:number){
    let newArray:number[][]=[]
    let array:number[]=[];
    let seating:number[][]=[];
    let available:number[][]=[]
    let r:number=seatGrid.length;
    let c:number=seatGrid[0].length;
// for(let i=0;i<r;i++){
//     for(let j=0;j<c;j++){
//         if(seatGrid[i][j]===0){
//             console.log("empty");

//         }
//         else if(seatGrid[i][j]===1){
//             console.log("booked");
//         }

//         }
//     }

    for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        if(seatGrid[i][j]===1){
            continue;
        }

        // for(let k=0;k<groupSize;k++){
            if(seatGrid[i][j]==0){
            // console.log("empty")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            array.push(i);
            array.push(j);
            newArray.push(array);
            array=[];
            // break;
        }
        // console.log(newArray);

    // }

}

}
// console.log(newArray);

for(let i=0;i<newArray.length-1;i++){
    // console.log(newArray[i])
    // console.log(newArray[i+1])
    let ele1=newArray[i];
    let ele2=newArray[i+1];
    for(let j=0;j<newArray.length;j++){
        if(ele1[j]-ele2[j]===1){
            seating.push(ele1);
            seating.push(ele1);
        }
        else{
            continue;
        }
        }
        available.push(seating);
    }

    console.log(available[0])
    }
    
// console.log(FindAvailableSeats([[1,0,0],[1,0,1],[1,0,0],[0,0,0],[0,1,0]], 5));
// console.log(FindAvailableSeats([[0,0,1],[1,0,1],[1,1,1]], 5));
// console.log(FindAvailableSeats([[0,0,0],[1,0,1],[1,1,1]], 5));