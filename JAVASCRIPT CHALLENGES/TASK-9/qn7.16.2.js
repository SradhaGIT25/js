function findCount(sentence) {
    var wcount = 1;
    var word = sentence.split(' ');
    console.log(word);
    for (var i = 0; i <= sentence.length; i++) {
        if (sentence[i] == (' ')) {
            wcount++;
        }
    }
    console.log("".concat(wcount));
}
findCount("Hello world");
findCount("This is a sample sentence.");
findCount("Programming is fun");
