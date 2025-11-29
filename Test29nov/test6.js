"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn6_ts_1 = require("./qn6.ts");
var testCases = [{ expected: "a3b4c2", input1: "aaabbbbcc", input2: "encrypt" },
    { expected: "aaabbbbcc", input1: "a3b4c2", input2: "decrypt" },
    { expected: false, input1: -34, input2: "decrypt" },
    { expected: false, input1: null, input2: "decrypt" },
    { expected: false, input1: "34", input2: "decrypt" },
    { expected: false, input1: undefined, input2: "decrypt" },
    { expected: false, input1: true, input2: "decrypt" },
    { expected: false, input1: false, input2: "decrypt" },
    { expected: false, input1: "wyfgwyfg", input2: "decrypt" },
    { expected: false, input1: ["q", "webkitURL", "e"], input2: "decrypt" }];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = (0, qn6_ts_1.default)(testCase.input1, testCase.input2);
        if (typeof result === "boolean") {
            if (result === testCase.expected) {
                console.log("test ".concat(index + 1, " passed"));
            }
            else {
                console.log("test ".concat(index + 1, " passed"));
            }
        }
        else if (typeof result === "string") {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== testCase.expected[i]) {
                    console.log("test ".concat(index + 1, " failed"));
                }
            }
            console.log("test ".concat(index + 1, " passed"));
        }
    });
}
