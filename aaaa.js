function FindAvailableSeats(seatGrid, groupSize){
    let newArray=[];
    let array=[];
    let seating=[];
    let available=[]
    let r=seatGrid.length;
    let c=seatGrid[0].length;


    for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        if(seatGrid[i][j]===1){
            continue;
        }

            if(seatGrid[i][j]==0){      
                array=[];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            array.push(i);
            array.push(j);
            newArray.push(array);
        }
}
}

for(let i=0;i<r;i++){
    seating=[]
    for(let j=0;j<newArray.length;j++){
            let ele1=newArray[j];
            let ele2=newArray[j+1];
        if(ele1[0]===ele2[0] && ele1[1]-ele2[1]===1){
            seating.push(ele1)
            seating.push(ele2);
        }
        
        }
        if(seating.length===groupSize){
            available.push(seating[0]);
            seating=[]
        }
    }


    console.log(available)
    }
    
console.log(FindAvailableSeats([[1,0,0],[1,0,1],[1,0,0],[0,0,0],[0,1,0]], 5));
// console.log(FindAvailableSeats([[0,0,1],[1,0,1],[1,1,1]], 5));
// console.log(FindAvailableSeats([[0,0,0],[1,0,1],[1,1,1]], 5));