let string1="listen";
let string2="silent";

function doAnagram(string1:string,string2:string){
    let letters1=[...string1];
let letters2=[...string2];
let frequency1={};
let frequency2={};
let count1=0;
let count2=0;
if(letters1.length===letters2.length){
for(let i=0;i<string1.length;i++){
    if(string1.indexOf(string1[i])<i){
    continue;
    }
    let count1=0;
    for(let j=0;j<letters1.length;j++){
        if(string1[i]==(letters1[j])){
        count1++;
}
    }
frequency1[string1[i]]=count1;
}
console.log(frequency1);


for(let i=0;i<string2.length;i++){
    if(string2.indexOf(string2[i])<i){
        continue;
    }
    let count2=0;
    for(let j=0;j<letters2.length;j++){
        if(string2[i]===(letters2[j])){
        count2++;
}
    }
frequency2[string2[i]]=count2;
}
console.log(frequency2);

let anagramCheck=true;
for(let letter in frequency1){
    if(frequency1[letter]!==frequency2[letter]){
        anagramCheck=false;
        break;
    }
}
if(anagramCheck){
    return true;
}
else{
    return false;
}
}else{
    return false;
}
}
console.log(doAnagram("listen","silent"))
console.log(doAnagram("restful","fluster"))
console.log(doAnagram("hello","world"))