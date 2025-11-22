 export default function romanToInteger(roman:string):number{
    if(typeof roman !== "string" || roman.length===0 || roman=== null || roman ===undefined){
    return false;
 }
 else{
    let pattern=/[A-Z]/
    for(let i=0;i<roman.length;i++){
        if(!pattern.test(roman[i]) || roman[i]!==roman[i].toUpperCase()){
            return false;
        }
    }
    let onesr=["0","I","II","III","IV","V","VI","VII","VIII","IX"];
let ones=[0,1,2,3,4,5,6,7,8,9];
let tensr=["0","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
let tens=[0,10,20,30,40,50,60,70,80,90]
let hunr=["0","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
let hun=[0,100,200,300,400,500,600,700,800,900]
let thour=["M"]
let thou=[1000]
let p1;
for(let i=0;i<onesr.length;i++){
    if(roman===onesr[i]){
        p1=onesr.indexOf(onesr[i]);
        console.log(ones[p1]);
    }
}

let p2;
for(let i=0;i<tensr.length;i++){
    if(roman===tensr[i]){
        p2=tensr.indexOf(tensr[i]);
        console.log(tens[p2]);
    }
}

let p3;
for(let i=0;i<hunr.length;i++){
    if(roman===hunr[i]){
        p3=hunr.indexOf(hunr[i]);
        console.log(hun[p3]);
    }
}

// let symbols=["M","D","C","L","X","V","I"];
// let values=[100,500,100,50,10,5,1]
// if(roman.length>=2){
//     for(let i=0;i<9;i++){
//         if(roman[1]===0){
//             if(roman[1]===i){
//                 return tens[i];
//             }
//         }
//     }
  
   
   for(let i=0;i<tens.length;i++){
    if(roman===tens[i]){
        return 
    }
   }




// }
// if(roman.length===1) {
//     if(roman[0]==="I") return(ones[1]);
//     else if(roman[0]==="X") return(ones[1]);
//     else if(roman[0]==="V") return (ones[5]);
// }

//     else if (roman.length===2)
//         if(roman[0]==="I"){
//             if(roman[1]==="I") return(ones[2]);
//             else if(roman[1]==="I") return(ones[2]);
//             else if(roman[1]==="X") return(ones[9])
//         else if(roman[0]==="V" && roman[1]==="I") return ones[6];
//         }
//     else if(roman.length===3){ 
//         if(roman[0]==="I" && roman[1]==="I" && roman[2]==="I") return(ones[3]);
//     }
//         else if(roman[0]==="V"){
//             if(roman[1]===roman[2]==="I") return ones[7];
//             else if(roman[1]===roman[2]===roman[3]==="I") return ones[8];
//         }

}
 }
    
// let values=[1000,500,100,50,10,5,1]
// let symbols=["M","D","C","L","X","V","I"]
  console.log(romanToInteger("CCC"));

//  console.log(romanToInteger("MCMXCIV"));
