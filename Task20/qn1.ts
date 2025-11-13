
function TeamSelection(players:string[], teamSize:number){
if(!Array.isArray(players)||players.length===0||players===null||players===undefined || typeof teamSize !== "number" ||  teamSize === null || teamSize === undefined){
    return false;
}
else{
    for(let i=0;i<players.length;i++){
        if(typeof players[i]!=="string"){
            return false;
        }
        for(let j=0;j<players[i].length;j++){
            let pattern=/[a-zA-Z]/
            if(!pattern.test(players[i][j])){
                return false;
            }
        }
    }
    let t:string[][]=[];
    let teams:string[][]=[];
for(let i=0;i<players.length;i++){
    t=[]
    for(let j=i+1;j<players.length;j++){
        if(i!==j){
        let ele1:string=players[i];
        let ele2:string=players[j];
        t.push(ele1);
        t.push(ele2);
    if(t.length===teamSize){
        teams.push(t)
        t=[]
    }
    }
}
}
return (teams);
}

}
    
// console.log(TeamSelection(["sradha","meera","nadha","reshma","sreepriya"], 2));
// console.log(TeamSelection(["sradha","meera","nadha","reshma"], 2));




