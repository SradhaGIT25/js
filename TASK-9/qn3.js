function convertToUpper(array) {
    var upper = [];
    for (var i = 0; i < array.length; i++) {
        upper.push(array[i].toUpperCase());
    }
    console.log(upper);
}
convertToUpper(["sradha", "shilpa", "sreelatha"]);
