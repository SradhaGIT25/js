// function ackDirection(){
// if(direction===up){
//     console.log("You moved Up")
// }
// else if(direction===down){
//     console.log("You moved Down")
// }
// else if(direction===left){
//     console.log("You moved Left")
// }
// else{
//     console.log("You moved Right")
// }
// }
function findDirection(input) {
    var fourDirections;
    (function (fourDirections) {
        fourDirections[fourDirections["Up"] = 8] = "Up";
        fourDirections[fourDirections["Down"] = 2] = "Down";
        fourDirections[fourDirections["Left"] = 4] = "Left";
        fourDirections[fourDirections["Right"] = 6] = "Right";
    })(fourDirections || (fourDirections = {}));
    if (fourDirections.Up === input) {
        console.log("You moved Up");
    }
    else if (fourDirections.Down === input) {
        console.log("You moved Down");
    }
    else if (fourDirections.Left === input) {
        console.log("You moved Left");
    }
    else if (fourDirections.Right === input) {
        console.log("You moved Right");
    }
    else {
        console.log("invalid direction");
    }
}
findDirection(8);
findDirection(2);
findDirection(4);
findDirection(6);
findDirection(0);
