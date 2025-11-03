
function findFrequency(words:string){
let word=words.split('');
console.log(word);
let frequency={};
let count=0;
for(let i=0;i<=words.length-1;i++){
    if(word.indexOf[word[i]]<i){
        continue;
    }
    let count=0;
    for(let j=0;j<=word.length;j++){
         if(words[i]==word[j]){
        count++;
    }
    }
   
    frequency[word[i]]=count;
}
console.log(frequency);
}
findFrequency("hello");
findFrequency("programming");
