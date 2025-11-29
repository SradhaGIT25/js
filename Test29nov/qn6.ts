export default function compression(str:string,opr:string):string | boolean{

if(typeof str !== "string" || str.length===0 || str===null || str === undefined || typeof opr !== "string" || opr.length===0 || opr===null || opr === undefined){
    return false;
}
else{
    let pattern=/[a-z]/
    for(let i=0;i<opr.length;i++){
if(!pattern.test(opr[i])){
    return false;
}
    }
    let newstr=""
    let letters="abcdefghijklmnopqrstuvwxyz";
let nums="0123456789";
if(opr==="encrypt"){
    let freq={}
    for(let char of str){
        if(char!==" "){
            if(freq[char]){
                freq[char]+=1;
            }
            else{
                freq[char]=1;
            }
        }
    }
    let s=Object.entries(freq).flat(Infinity);
    let s1=s.toString().replaceAll(",","")
    return (s1)
}

else if(opr==="decrypt"){
    for(let i=0;i<str.length;i++){
        if(letters.includes(str[i])){
            if(nums.includes(str[i+1])){
                let n=Number(str[i+1]);
                for(let k=0;k<n;k++){
                    newstr+=str[i];
                    // console.log(newstr)
                }
            }
        }
    }
}
return newstr;
}
}
    
console.log(compression("aaabbbbcc","encrypt"))
console.log(compression("a3b4c2","decrypt"))