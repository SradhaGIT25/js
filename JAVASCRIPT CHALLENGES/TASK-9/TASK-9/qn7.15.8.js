function anagramGroup(words) {
    var arraytemp = [];
    var temporary1 = [];
    var temporary2 = [];
    var temporary3 = [];
    for (var i = 0; i <= words.length - 1; i++) {
        var word = words[i];
        var sorted = word.split('').sort().join('');
        // console.log(sorted);
        arraytemp.push(sorted);
        // console.log(arraytemp);
    }
    for (var i = 0; i <= arraytemp.length - 1; i++) {
        for (var j = 0; j <= arraytemp.length - 1; j++) {
            temporary1.push(arraytemp[i]);
            if (arraytemp[i] == arraytemp[i + 1]) {
                temporary1.push(arraytemp[i + 1]);
            }
            else {
                temporary2.push(arraytemp[i + 1]);
                if (arraytemp[i] == arraytemp[i + 1]) {
                    temporary2.push(arraytemp[i + 1]);
                }
                else {
                    temporary3.push(arraytemp[i + 1]);
                    if (arraytemp[i] == arraytemp[i + 1]) {
                        temporary3.push(arraytemp[i + 1]);
                    }
                }
            }
        }
        console.log(temporary1);
        console.log(temporary2);
        console.log(temporary3);
    }
}
anagramGroup(["care", "race", "acre", "dog", "god", "cat"]);
// function anagramGroup(words:string[]){
//     type newArray=string[];
//     for(let i=0;i<words.length;i++){
//         // let word=words[i].split('').sort();
//         // console.log(word);
//         if((words[i].split('').sort())===(words[i+1].split('').sort())){
//             if(words[i].split('').sort()===temp1[i]){
//                 temp1.push(words[i])
//             }
//             let temp1:string[]=words[i];
//         }
//     }
// }
// anagramGroup(["care", "race", "acre", "dog", "god", "cat"])
