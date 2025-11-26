


export default function celciustofaren(ctemp:number):number | string | boolean{
    if(typeof ctemp !=="number" || ctemp===null || ctemp === undefined){
        return false;
    }
    else{
        let faren:number=(ctemp*(9/5))+32;
return faren.toFixed(2);
}
    }

// console.log(celciustofaren(0))//32
// console.log(celciustofaren(-273.15))//-459.67  °°
// console.log(celciustofaren(-50))//-58

// + " " +"°F"



// else{
//         for(let i=0;i<result.length;i++){
//         if (result[i] === testCase.expected[i]) {
//       k=1;
//     } 
//     }

//     if(k===1){
//         console.log(`test ${index + 1} passed`);
//     }
//     else{
//         console.log(`test ${index + 1} failed`);
//     }
     
//     }