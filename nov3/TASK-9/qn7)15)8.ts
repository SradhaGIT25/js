
let words=["care", "race", "acre", "dog", "god", "cat"]
let arraytemp=[];
let temporary1=[];
let temporary2=[];
let temporary3=[];
for(let i=0;i<=words.length-1;i++){
    let word=words[i];
    let sorted=word.split('').sort().join('');
    // console.log(sorted);
    arraytemp.push(sorted);
    // console.log(arraytemp);
}
for(let i=0;i<=arraytemp.length-1;i++){
    for(let j=0;j<=arraytemp.length-1;j++){
        temporary1.push(arraytemp[i]); 
        if(arraytemp[i]==arraytemp[i+1]){
            temporary1.push(arraytemp[i+1]);
    }
    else{
        temporary2.push(arraytemp[i+1]);
        if(arraytemp[i]==arraytemp[i+1]){
            temporary2.push(arraytemp[i+1]);
    }
    else{
        temporary3.push(arraytemp[i+1]);
        if(arraytemp[i]==arraytemp[i+1]){
            temporary3.push(arraytemp[i+1]);
    }

    }
    }
    }
     console.log(temporary1);
        console.log(temporary2);
        console.log(temporary3);
}