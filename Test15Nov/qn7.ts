export default function validMail(emailArray:string[]){
let newArray:string[]=[];


function validity(email:string){
let invalidlocal:string="!`~#$%^&*()+={}[]|\:;'<,>?/";
let invalidldomain:string="!`~#$%^&*()+={}[]|\:;'<,>?/";
let split:string=email.split('@');
let local:string=split[0];
let tld:string=split[split.length-1];
let count:number=0;
let flag:number=1;
for(let i=0;i<email.length;i++){
if(email[i]==="@"){
    count++;
}
}
// console.log(count);


if(email.count!==1 || !email.includes(tld) || tld.length<2 || local.length === 0 || local.includes(invalidlocal) || email[0]!=="." || email[email.length-1]!=="." || local.includes("..") || !tld.includes(".") || tld.includes(invalidldomain) || tld[0]==="-" || tld[tld.length-1]==="-" || tld[0]==="_" || tld[tld.length-1]==="_" || email.includes(" ")){
    return false;
}
else{
    return true;
    
}
}

for(let i=0;i<emailArray.length;i++){
    if(validity(emailArray[i])===true){
        newArray.push(emailArray[i]);
    }
}
return newArray;
}
console.log( validMail(["test@mail.com", "abc@", "ok@gmail.com"] ))