testCases = [{ expected : "Seven hundred and twenty three" , input:723 }, 
{ expected :false , input:"app" } , 
{ expected : false , input:["apple"] },
{ expected : false , input:"723"},
{ expected : false , input:{723 : 723} },
{ expected : false , input:undefined},
{ expected : false , input:""},
{ expected : false , input:[723]},
{ expected : false , input:["723"]},
{ expected : false , input:-723},
{ expected : false , input:null},
{ expected : false , input:"frt34"},
{ expected : false , input:["guyi678"]},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input: [{}] },
{ expected : false , input: "@#@$%@FW@5s" },
{ expected : false , input: true },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = numToText(testCase.input);
            
    
// console.log(testCase.expected , " " , result )
let k=0;
if(typeof testCase.expected === "string"){
let lower=testCase.expected.toLowerCase();
for(let i=0;i<lower.length;i++){
    if (lower[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
}
else{
    for(let i=0;i<testCase.expected.length;i++){
    if (testCase.expected[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
}
  });
}




function numToText(number){
    if(typeof number !== "number" || number<0){
        return false;
    }
    else{
        let num=number.toString();

let ones=[" zero ","one ","two ","three ","four ","five ","six ","seven ","eight ","nine "];
let teens=[" ten "," eleven "," twelve "," thirteen "," fourteen "," fifteen "," sixteen "," seventeen "," eighteen "," nineteen "];
let tens=["zero"," ten"," twenty "," thirty "," forty "," fifty "," sixty "," seventy "," eighty "," ninety "];
let hun=["hundred "]

if(num.length===1){
    if(num==="1") return (ones[num])
    else if(num==="2") return (ones[num]) 
    else if(num==="3") return (ones[num])
    else if(num==="4") return (ones[num])
    else if(num==="5") return (ones[num])
    else if(num==="6") return (ones[num])
    else if(num==="7") return (ones[num])
    else if(num==="8") return (ones[num])
    else if(num==="9") return (ones[num])
    else return (ones[num])
}

else if(num.length===2){

    if(num[0]==="1"){
        if([num[1]==="0"])  return (teens[num[1]])
        else if([num[1]==="1"])  return (teens[num[1]])
        else if([num[1]==="2"])  return (teens[num[2]])
        else if([num[1]==="3"])  return (teens[num[3]])
        else if([num[1]==="4"])  return (teens[num[4]])
        else if([num[1]==="5"])  return (teens[num[5]])
        else if([num[1]==="6"])  return (teens[num[6]])
        else if([num[1]==="7"])  return (teens[num[7]])
        else if([num[1]==="8"])  return (teens[num[8]])
        else if([num[1]==="9"])  return (teens[num[9]])
    }
    else if((num[0]>1) && (num[1]==="0")){
         if([num[0]==="2"])  return (tens[num[0]])
        else if([num[0]==="3"])  return (tens[num[0]])
        else if([num[0]==="4"])  return (tens[num[0]])
        else if([num[0]==="5"])  return (tens[num[0]])
        else if([num[0]==="6"])  return (tens[num[0]])
        else if([num[0]==="7"])  return (tens[num[0]])
        else if([num[0]==="8"])  return (tens[num[0]])
        else if([num[0]==="9"])  return (tens[num[0]])
    }

    else
        {
            if(num[0]>=2){
                return (tens[num[0]]) + (ones[num[1]])
            }
            
        }                                                                                                                                                                                                                                            
    }


    else if(num.length===3){

        if(num[1]=="0" && num[2]=="0"){
            if(num[0]==="1") return (ones[num[0]] + hun[0]);
            else if(num[0]==="2") return (ones[num[0]] + hun[0]);
            else if(num[0]==="3") return (ones[num[0]] + hun[0]);
            else if(num[0]==="4") return (ones[num[0]] + hun[0]);
            else if(num[0]==="5") return (ones[num[0]] + hun[0]);
            else if(num[0]==="6") return (ones[num[0]] + hun[0]);
            else if(num[0]==="7") return (ones[num[0]] + hun[0]);
            else if(num[0]==="8") return (ones[num[0]] + hun[0]);
            else if(num[0]==="9") return (ones[num[0]] + hun[0]);
            // else if(num[0]==="10") return (ones(1) + " thousand");
            // else if(num[0]==="20") return (ones[num[0]] + " thousand");
        }

        else if(num[2]=="0"){
            return (ones[num[0]] + hun[0]) + "and" + (tens[num[1]]);
        }

        else if(num[1]==="1"){
            if(num[2]==="1") {return (ones[num[0]] + hun[0]) + "and" +  (teens[1])}
            else if(num[2]==="2") {return (ones[num[0]] + hun[0]) + "and" + (teens[2])}
            else if(num[2]==="3") {return (ones[num[0]] + hun[0]) + "and" + (teens[3])}
            else if(num[2]==="4") {return (ones[num[0]] + hun[0]) + "and" + (teens[4])}
            else if(num[2]==="5") {return (ones[num[0]] + hun[0]) + "and" + (teens[5])}
            else if(num[2]==="6") {return (ones[num[0]] + hun[0]) + "and" + (teens[6])}
            else if(num[2]==="7") {return (ones[num[0]] + hun[0]) + "and" + (teens[7])}
            else if(num[2]==="8") {return (ones[num[0]] + hun[0]) + "and" + (teens[8])}
            else if(num[2]==="9") {return (ones[num[0]] + hun[0]) + "and" + (teens[9])}
            
        
        }
        else if(num[1]==="0"){
            if(num[2]==="1") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="2") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="3") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="4") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="5") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="6") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="7") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="8") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
            else if(num[2]==="9") {return (ones[num[0]] + hun[0]) + "and" + (ones[num[2]])}
         
        }
    
        else {
            
            if(num[0]>=1){
                return (ones[num[0]] + hun[0]) + "and" + (tens[num[1]])  + (ones[num[2]])
            }
        }


    }


    }
}
