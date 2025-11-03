
function findDirection(input:number){
    enum fourDirections{
    Up=8,
    Down=2,
    Left=4,
    Right=6,

}
if(fourDirections.Up===input){
    console.log("You moved Up");
}
else if(fourDirections.Down===input){
    console.log("You moved Down");
}
else if(fourDirections.Left===input){
    console.log("You moved Left");
}
else if(fourDirections.Right===input){
    console.log("You moved Right");
}
else{
    console.log("invalid direction")
}
}
findDirection(8);
findDirection(2);
findDirection(4);
findDirection(6);
findDirection(0);