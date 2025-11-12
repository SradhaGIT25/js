"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [{ expected: { horizontal: false, vertical: false, diagonal: false }, input: [[1, 0, 0], [1, 0, 1], [1, 1, 1]] },
    { expected: { horizontal: false, vertical: true, diagonal: true }, input: [[1, 0, 1], [1, 0, 1], [1, 1, 1]] },
    { expected: { horizontal: true, vertical: true, diagonal: true }, input: [[1, 1, 1], [1, 0, 1], [1, 1, 1]] },
    { expected: { horizontal: true, vertical: true, diagonal: true }, input: [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] },
    { expected: { horizontal: false, vertical: true, diagonal: true }, input: [[1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] },
    { expected: false, input: [] },
    { expected: false, input: [1, 2, 3, 4] },
    { expected: false, input: "5" },
    { expected: false, input: 5 },
    { expected: false, input: ["1", "2", "3", "4"] },
    { expected: false, input: "" },
    { expected: false, input: ["1,2,3,4"] },
    { expected: false, input: true },
    { expected: false, input: [0] },
    { expected: false, input: false },
    { expected: false, input: -3 },
    { expected: false, input: {} },
    { expected: false, input: 0 },
    { expected: false, input: undefined },
    { expected: false, input: null }];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = (0, qn1_ts_1.default)(testCase.input);
        if (typeof testCase.expected === "boolean") {
            if (result === testCase.expected) {
                console.log("test ".concat(index + 1, " passed"));
            }
            else {
                console.log("test ".concat(index + 1, " failed"));
            }
        }
        else if (typeof testCase.expected === "object") {
            // for(let i=0;i<result.length;i++){
            if (!objectEquality(result, testCase.expected)) {
                console.log("test ".concat(index + 1, " failed"));
            }
            //   }
            console.log("test ".concat(index + 1, " passed"));
        }
    });
}
function objectEquality(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
    else {
        var array1 = Object.entries(obj1);
        var flat1 = array1.flat();
        var array2 = Object.entries(obj2);
        var flat2 = array2.flat();
        if (flat1.length === flat2.length) {
            for (var i = 0; i < flat1.length; i++) {
                if (!flat2.includes(flat1[i])) {
                    return "Not Equal";
                }
            }
            return "Equal";
        }
        else {
            return "Not Equal";
        }
    }
}
