type ob={
    score:number
}

export default function SortByScoreRank(data:number[]){
    if(!Array.isArray(data) || data.length ===0 || data === null || data === undefined){
        return false;
    }
    else{
        for(let i=0;i<data.length;i++){
            if(typeof data[i]){
                return false;
            }
        }

        let arr:obje[]=[];
    let obj:ob | {} ={}
    data.sort((a,b)=>b-a);
for(let i=0;i<data.length;i++){
    
        obj.score=data[i];
        arr.push(obj)
        obj={}

}
let rank:number=1;
for(let i=0;i<arr.length;i++){
    if(arr[i+1]===undefined){
        arr[i].rank=rank
    }
   else if(arr[i].score === (arr[i+1]).score){
        console.log(arr[i].score)
        console.log(arr[i+1].score)
        console.log(rank)
        arr[i].rank=rank;
        arr[i+1].rank=rank;
    }
    else{
arr[i].rank=rank++;
    }
 
}
return (arr)


}

    }
    


// console.log(SortByScoreRank([100,100,90,80]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,53]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,0]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,-1]))