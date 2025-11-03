testCases=[{expected :  true , input:"test@example.com"},
    {expected :  false , input: {}} , 
    {expected :  false , input: 325185448} ,
    {expected :  false , input: "612391549"} ,
    {expected :  false , input: "gewti2o283497283"} ,
    {expected :  false , input: "#$%^&*(@#"} ,
    {expected :  false , input: "sradha@23#@gmail.com"} ,
    {expected :  false , input: "invalid.email."} ,
    {expected :  false , input: "invalid@email"} ,
    {expected :  false , input: "invalid@com"} ,
    {expected :  false , input: "invalid.com"} ,
    {expected :  false , input: []} ,
    {expected :  false , input: {"invalid@email.com": "hggcv"} } ,
    {expected :  false , input: ["invalid@email.com"]} ,
    {expected :  false , input: ""} ,
    {expected :  false , input: null} ,
    {expected :  false , input: undefined} ,
    {expected :  false , input: true} ,
    {expected :  false , input: false} ,
    {expected : true , input:"user2438@gmail.com"},
    {expected : true , input:"user@2438domain.com"}];


test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = emailValidation(testCase.input);
            
    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}



function emailValidation(mail){
if(typeof mail !== "string" || mail === null || mail === undefined || mail.length === 0){
    return false;
}
else{
    // let userEmail="user@domain";
let emailSplit=mail.split('@')
// console.log(emailSplit);
let lastPortion=emailSplit[emailSplit.length-1];
// console.log(lastPortion);
let splitmail=lastPortion.split('.');
// console.log(splitmail);
let end=splitmail[splitmail.length-1]
// console.log(end);
let count=0;
for(let i=0;i<=mail.length-1;i++){
    if(mail[i]==('@')){
        count++;
    }
}
// console.log(count);

    if(mail.includes('@') && lastPortion.includes('.') && end.length>=2 && count===1 ){
    return true;
    }
    else{
        return false;
    }
}
}

// console.log(emailValidation("test@example.com"));