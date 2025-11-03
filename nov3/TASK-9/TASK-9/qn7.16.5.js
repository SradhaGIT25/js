function findFrequency(words) {
    var word = words.split('');
    console.log(word);
    var frequency = {};
    var count = 0;
    for (var i = 0; i <= words.length - 1; i++) {
        if (word.indexOf[word[i]] < i) {
            continue;
        }
        var count_1 = 0;
        for (var j = 0; j <= word.length; j++) {
            if (words[i] == word[j]) {
                count_1++;
            }
        }
        frequency[word[i]] = count_1;
    }
    console.log(frequency);
}
findFrequency("hello");
findFrequency("programming");
