function anagramGroup(words){
let word=[...words];
console.log(word)
let groups=[];
for(let i=0;i<words.length;i++){
    let groups=[];

    // let word=words[i];
    console.log(words[i])
    let sorted=words[i].split('').sort();
    console.log(sorted)

    if(!groups[sorted]){
        groups.sorted=[];
    }

    let result=Object.keys[sorted];
    // console.log(result);
    for(let i=0;i<words.length;i++){
        if(result===words[i].split().sort()){
            groups.push(word);
        }
    }
}
return groups;
}
console.log(anagramGroup(["eat", "tea", "tan", "ate", "nat", "bat"]));


// function anagramGroup(words){
// let groups=[];
// let array=[]
// for(let i=0;i<words.length;i++){
//     let groups=[];
//     let word=words[i];
//     let sorted=word.split('').sort();
//     // console.log(sorted)
//     array.push(sorted);
//     // console.log(array);


//     for(let i=0;i<array.length;i++){
//         if(array[i]===word.split().sort()){
//             groups.push(word);
//         }
//     }
//     if(!groups[sorted]){
//         groups.sorted=[];
//     }

//     let result=Object.keys[sorted];
//     // console.log(result);
//     for(let i=0;i<words.length;i++){
//         if(result===word.split().sort()){
//             groups.push(word);
//         }
//     }
//     console.log(groups)
// }
// return groups;
// }
// return groups
// }
// console.log(anagramGroup( ["eat", "tea", "tan", "ate", "nat", "bat"]))