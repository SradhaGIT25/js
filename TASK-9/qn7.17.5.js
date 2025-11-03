// type numberArray=number[];
function sumOf() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    console.log(numbers);
    var len = numbers.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}
sumOf(1, 2);
sumOf(1, 2, 3, 4);
