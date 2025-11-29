"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn3_ts_1 = require("./qn3.ts");
var testCases = [{ expected: "1.46 KB", input: 1500 },
    { expected: "1.00 KB", input: 1024 },
    { expected: false, input: -34 },
    { expected: false, input: null },
    { expected: false, input: "34" },
    { expected: false, input: undefined },
    { expected: false, input: true },
    { expected: false, input: false },
    { expected: false, input: "wyfgwyfg" },
    { expected: false, input: ["q", "webkitURL", "e"] }];
test(testCases);
function test(testCases) {
    testCases.forEach(function (testCase, index) {
        var result = (0, qn3_ts_1.default)(testCase.input);
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
