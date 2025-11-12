"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SortByScoreRank;
function SortByScoreRank(data) {
    if (!Array.isArray(data) || data.length === 0 || data === null || data === undefined) {
        return false;
    }
    else {
        for (var i = 0; i < data.length; i++) {
            if (typeof data[i]) {
                return false;
            }
        }
        var arr = [];
        var obj = {};
        data.sort(function (a, b) { return b - a; });
        for (var i = 0; i < data.length; i++) {
            obj.score = data[i];
            arr.push(obj);
            obj = {};
        }
        var rank = 1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i + 1] === undefined) {
                arr[i].rank = rank;
            }
            else if (arr[i].score === (arr[i + 1]).score) {
                console.log(arr[i].score);
                console.log(arr[i + 1].score);
                console.log(rank);
                arr[i].rank = rank;
                arr[i + 1].rank = rank;
            }
            else {
                arr[i].rank = rank++;
            }
        }
        return (arr);
    }
}
// console.log(SortByScoreRank([100,100,90,80]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,53]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,0]))
// console.log(SortByScoreRank([100,100,90,80,78,200,45,53,-1]))
