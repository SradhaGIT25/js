export default function SeatingArrangementsWithRoundTable(people:string[] | number[]):string[][] | number[][]{
    if(!Array.isArray(people) || people.length===0 || people===undefined || people===null){
        return false;
    }
    else{
        for(let i=0;i<people.length;i++){
            if(!Array.isArray(people[i]) ||people[i]===null || people[i]===null){
                return false;
            }
            for(let j=0;j<people[i].length;j++){
                if(typeof people[i][j] !== "string" || typeof people[i][j] !== "number" || people[i][j].length === 0 ||  people[i][j]===null || people[i][j]===undefined) {
                    return false;
                }
            }
        }

        let result:string[][] | number[][]=[];
    let num:number=people.length

function factorial(number:number):number{
   while(number!=1){
    return number*factorial(number-1)
   }
  return 1;
}

function combination(combo:string[]|number[]):undefined{
    if(combo.length===people.length  &&  result.length!==factorial(num-1)){
        result.push([...combo]);
        return;
    }
    
    for(let i=0;i<people.length;i++){
            if(!combo.includes(people[i])){
                combo.push(people[i])
                combination(combo);
                combo.pop();
            }
            
    }
}
combination([]);
return result;

    }

    }
    
// console.log(SeatingArrangementsWithRoundTable(["A","B","C"]));
// console.log(SeatingArrangementsWithRoundTable(["A","B","C","D"]));
// console.log(SeatingArrangementsWithRoundTable(["AA","BB","CC","DD"]));
// console.log(SeatingArrangementsWithRoundTable([1,2,3,4]));
console.log(SeatingArrangementsWithRoundTable(["11","22","33","44"]));