function capitalize(sentence){
    let words=sentence.split(' ');
    console.log(words)
    // let array1=[...words];
    // console.log(array1)
    let sentence2=""
    for(let i=0;i<words.length;i++){
        let letter=words[i]
        let lett=letter[i]
        let upper=letter[0].toUpperCase();
        console.log(upper);
        sentence2=letter[0].splice(letter[0],1,0);
        console.log(sentence2)
        // console.log(letter[0])
        // array1.splice(letter[i].charAt[0],1,0);
        // console.log(array1)
        // sentence2=words.toString()
        // console.log(sentence2)
        // let removedFirstLtter=words.replace("letter[0]","upper");
        // console.log(removedFirstLtter)
    }
}
capitalize("she loves dogs")



