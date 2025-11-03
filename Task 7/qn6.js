testCases = [{ expected : "strong", input: "Sragdg@4" },
     { expected : "medium", input : "Sragdg4" }, 
     { expected : false, input : 0 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : "weak", input : "11" },
     { expected : "weak", input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : "weak", input : "Sragdggfjk" },
     { expected : "medium", input : "Sragdg@" },
     { expected : false, input : 1.53 },
      { expected : "medium" , input : "[23,9,45,12,90,10]" },
     { expected : false, input : undefined },
     { expected : false , input : null}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = passwordValidation(testCase.input);
            
    console.log(result , " " , testCase.expected)

      if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } 
  else{
      console.log(`test ${index + 1} failed`);
  }
  });
}

function passwordValidation(password){
    if(typeof password !== "string" || password.length===0 || password === null || password === undefined ){
        return false;
    }
    
    else{
        for(let i=0;i<password.length;i++){
        if(Array.isArray(password[i]) || typeof password[i] === "object" || typeof password[i] === "boolean"){
            return false;
        }
    }
         let upflag=0;
    let lowflag=0;
    let numflag=0;
    let spflag=0;
let uppArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let lowArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let numArr=['0','1','2','3','4','5','6','7','8','9']
let specialArr=['!','@','#','~','$','%','^','&','*','(',')','_','+','-','=','{','}','|','<','>','?','/',':',',','.','`','[',']']
if(password.length<6 ){
        return 'weak';
    }
// if(password.length>=6 && numflag ===0 && spflag===0){
//     return 'weak';
// }

for(let i=0;i<password.length;i++){

    for(let j=0;j<uppArr.length;j++){
        if(password.includes(uppArr[j])){
            upflag=1;
        }
    }
            for(let k=0;k<lowArr.length;k++){
                if(password.includes(lowArr[k])){
                    lowflag=1;
                }
            }
                     for(let l=0;l<numArr.length;l++){
                        if(password.includes(numArr[l])){
                            numflag=1;
                        }
                    };
                            for(let m=0;m<specialArr.length;m++){
                                if(password.includes(specialArr[m])){
                                    spflag=1;
                                   
                                }
                            }
                        }
                                


if(password.length>=8 && upflag===1 && lowflag===1 && numflag===1 && spflag===1){
    return 'strong'
}
else if(password.length>=6 && numflag === 0 && spflag === 0){
    return 'weak';
}
else{
    return 'medium';
}
}

    }

   
// console.log(passwordValidation("Sragdg@"));
    