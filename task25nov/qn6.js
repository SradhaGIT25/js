"use strict";
// type a=string | number |true | object ;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = removeFalsy;
function removeFalsy(array) {
    if (!Array.isArray(array) || array.length === 0 || array === null || array === undefined) {
        return false;
    }
    else {
        var arr = [];
        var falsy = [false, 0, "", null, undefined, NaN];
        for (var i = 0; i < array.length; i++) {
            if (!falsy.includes(array[i])) {
                arr.push(array[i]);
            }
        }
        return arr;
    }
}
console.log(removeFalsy([1, 0, 2, "", 3, null, 4]));
console.log(removeFalsy([1, 0, 2, "", 3, "", undefined, null, 4, NaN]));
