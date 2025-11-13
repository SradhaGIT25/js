function Pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    var answer;
    var number;
    function all(number) {
        for (var i = 0; i < fns.length; i++) {
            answer = fns[i];
            number = answer(number);
        }
        console.log(number);
    }
    return all;
}
var Piped = Pipe(function (x) { return x + 5; }, function (x) { return x * 3; });
Piped(5);

