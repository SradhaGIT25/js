"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn6_ts_1 = require("./qn6.ts");
var testCases = [{ expected: [1, 2, 3, 4], input: [1, 0, 2, "", 3, null, 4] },
    { expected: [1, 2, 3, 4], input: [1, 0, 2, "", 3, "", undefined, null, 4, NaN] },
    { expected: false, input: 0 },
    { expected: false, input: -12 },
    { expected: false, input: "11" },
    { expected: false, input: "string" },
    { expected: false, input: [] },
    { expected: false, input: -13 },
    { expected: false, input: true },
    { expected: false, input: false },
    { expected: false, input: "" },
    { expected: false, input: {} },
    { expected: false, input: "hg56" },
    { expected: false, input: "@@#" },
    { expected: false, input: "@##$S" },
    { expected: false, input: 1.53 },
    { expected: false, input: undefined },
    { expected: false, input: null }];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = (0, qn6_ts_1.default)(testCase.input);
        if (typeof testCase.expected === "boolean") {
            if (result === testCase.expected) {
                console.log("test ".concat(index + 1, " passed"));
            }
            else {
                console.log("test ".concat(index + 1, " failed"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== testCase.expected[i]) {
                    console.log("test ".concat(index + 1, " failed"));
                }
            }
            console.log("test ".concat(index + 1, " passed"));
        }
    });
}
