// testCases=[{expected : 16  , input : 2},
// {expected : 25  , input : 3},
// {expected :  36 , input : 4},
// {expected :  4 , input : 0},
// {expected :  0 , input : -2},
// {expected :  false , input : [] },
// {expected :  false , input : [1,2,3,4]},
// {expected :  false , input : "5"},
// {expected :  false , input : "" },
// {expected :  false , input : true },
// {expected :  false , input : false },
// {expected :  false , input : {} },
// {expected :  false , input : [1,2,3,4] },
// {expected :  false , input : undefined },
// {expected :  false , input : null }];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// type obj={
//     input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
//     output : number | boolean;
// }
// test(testCases);
// function test(testCases: obj[]):void{
//     testCases.forEach((testCase,index) =>{
//         const result: false | number = Waterfall(testCase.input);
//         // if(typeof testCase.expected === "boolean"){
//             if(result === testCase.expected){
//                 console.log(`test ${index + 1} passed`);
//             }
//             else{
//                 console.log(`test ${index + 1} failed`);
//         }
//     }
//     );
// }
function Waterfall(tasks) {
    return function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof value !== "number" || value === null || value === undefined) {
                            return [2 /*return*/, false];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tasks.length)) return [3 /*break*/, 4];
                        console.log(tasks[i]);
                        return [4 /*yield*/, tasks[i](value)];
                    case 2:
                        value = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, value];
                }
            });
        });
    };
}
var add = function (x) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, x + 2];
}); }); };
var square = function (x) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, x * x];
}); }); };
function pickResult(number) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Waterfall([add, square])(number)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
console.log(pickResult(2).then(function (value) { return console.log(value); }));
