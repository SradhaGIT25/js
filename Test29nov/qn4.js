"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = replacingstr;
function replacingstr(str, obj) {
    if (typeof str !== "string" || str.length === 0 || str === null || str === undefined || typeof obj !== "object" || Array.isArray(obj)) {
        return false;
    }
    else {
        var s = "";
        var pattern = "{}";
        var index = void 0;
        for (var i = 0; i < str.length; i++) {
            if (!pattern.includes(str[i])) {
                s += str[i];
            }
            else {
                s += "";
            }
        }
        var words = s.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].includes(",")) {
                console.log(words[i]);
                index = i;
                words[i] = words[i].replace(",", "");
            }
        }
        for (var i = 0; i <= words.length; i++) {
            for (var key in obj) {
                if (words[i] === key) {
                    console.log(key);
                    words[i] = obj[key];
                    console.log(words[i], obj[key]);
                }
            }
        }
        var res = "";
        var stri = words.toString().replaceAll(",", " ");
        var splitstr = stri.split(" ");
        for (var i = 0; i < splitstr.length; i++) {
            if (i != index) {
                res += splitstr[i] + " ";
            }
            else {
                res += splitstr[i] + "," + " ";
            }
        }
        return (res);
    }
}
console.log(replacingstr("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }));
