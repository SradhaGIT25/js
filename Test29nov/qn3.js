"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = convertbytestokb;
function convertbytestokb(bytes) {
    if (typeof bytes !== "number" || bytes < 0 || bytes === null || bytes === undefined) {
        return false;
    }
    else {
        var kb = (bytes / 1024).toFixed(2) + " " + "KB";
        return (kb);
    }
}
console.log(convertbytestokb(1500));
console.log(convertbytestokb(1024));
