
function findCount(sentence:string){
let wcount=1;
    let word=sentence.split(' ');
    console.log(word);
    for(let i=0;i<=sentence.length;i++){
        if(sentence[i]==(' ')){
            wcount++;
        }
    }
        console.log(`${wcount}`);
}
findCount("Hello world");
findCount("This is a sample sentence.");
findCount("Programming is fun");