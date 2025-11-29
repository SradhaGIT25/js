"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = compression;
function compression(str, opr) {
    if (typeof str !== "string" || str.length === 0 || str === null || str === undefined || typeof opr !== "string" || opr.length === 0 || opr === null || opr === undefined) {
        return false;
    }
    else {
        var pattern = /[a-z]/;
        for (var i = 0; i < opr.length; i++) {
            if (!pattern.test(opr[i])) {
                return false;
            }
        }
        var newstr = "";
        var letters = "abcdefghijklmnopqrstuvwxyz";
        var nums = "0123456789";
        if (opr === "encrypt") {
            var freq = {};
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var char = str_1[_i];
                if (char !== " ") {
                    if (freq[char]) {
                        freq[char] += 1;
                    }
                    else {
                        freq[char] = 1;
                    }
                }
            }
            var s = Object.entries(freq).flat(Infinity);
            var s1 = s.toString().replaceAll(",", "");
            return (s1);
        }
        else if (opr === "decrypt") {
            for (var i = 0; i < str.length; i++) {
                if (letters.includes(str[i])) {
                    if (nums.includes(str[i + 1])) {
                        var n = Number(str[i + 1]);
                        for (var k = 0; k < n; k++) {
                            newstr += str[i];
                            // console.log(newstr)
                        }
                    }
                }
            }
        }
        return newstr;
    }
}
console.log(compression("aaabbbbcc", "encrypt"));
console.log(compression("a3b4c2", "decrypt"));
