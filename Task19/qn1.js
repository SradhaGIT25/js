"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetectSymmetry;
function DetectSymmetry(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix === null || matrix === undefined) {
        return false;
    }
    else {
        for (var i = 0; i < matrix.length; i++) {
            if (!Array.isArray(matrix[i])) {
                return false;
            }
            for (var j = 0; j < matrix[i].length; j++) {
                if (typeof matrix[i][j] !== "number") {
                    return false;
                }
            }
        }
        var array = [];
        var obj = {};
        var r = matrix.length;
        var c = matrix[0].length;
        var v = 1;
        var h = 1;
        var d = 1;
        if (r !== c) {
            return false;
        }
        for (var i = 0; i < r; i++) {
            for (var j = 0; j < c; j++) {
                if (r === c) {
                    if (matrix[0][j] !== matrix[r - 1][j]) {
                        h = 0;
                    }
                    if (matrix[i][0] !== matrix[i][c - 1]) {
                        v = 0;
                    }
                }
            }
        }
        for (var i = 0; i < r; i++) {
            array.push(matrix[i][c - 1 - i]);
        }
        // console.log(array)
        for (var i = 0; i < array.length / 2; i++) {
            if (array[i] !== array[array.length - 1 - i]) {
                d = 0;
            }
        }
        if (h === 1) {
            obj.horizontal = true;
        }
        else {
            obj.horizontal = false;
        }
        if (v === 1) {
            obj.vertical = true;
        }
        else {
            obj.vertical = false;
        }
        if (d === 1) {
            obj.diagonal = true;
        }
        else {
            obj.diagonal = false;
        }
        return obj;
    }
}
// console.log(DetectSymmetry([[1,0,0],
//                             [1,0,1],
//                             [1,1,1]]))
// console.log(DetectSymmetry([[1,0,1],
//                             [1,0,1],
//                             [1,1,1]]));
// console.log(DetectSymmetry([[1,1,1],
//                             [1,0,1],
//                             [1,1,1]]));
// console.log(DetectSymmetry([[1,1,1,1],
//                             [1,1,1,1],
//                             [1,1,1,1],
//                             [1,1,1,1]]));
// console.log(DetectSymmetry([[1,1,0,1],
//                             [1,1,1,1],
//                             [1,1,1,1],
//                             [1,1,1,1]]));
