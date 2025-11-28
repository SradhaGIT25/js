function euclidean(a,b){
    let result=[]
    let a1=[]
    let a2=[]
for(let i=1;i<=a/2;i++){
    if(a%i===0){
        a1.push(i);
    }
}
for(let j=1;j<=b/2;j++){
    if(b%j===0){
        a2.push(j);
    }
}
for(let k=0;k<a2.length;k++){
    if(a1.includes(a2[k])){
        result.push(a2[k]);
    }
}
// console.log(result)
result.sort((a,b)=>a-b);
return result[result.length-1];

}
console.log(euclidean(18,33));
console.log(euclidean(12,20));