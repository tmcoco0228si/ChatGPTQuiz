/*問題1
次のような配列が与えられたとき、配列内の数値を全て足し合わせた値を求める関数を実装してください。 */
var numbers12 = [1, 2, 3, 4, 5];
// 期待される結果: 15
function allSum(arr) {
    var result = 0;
    arr.map(function (v) { return (result += v); });
    return result;
}
console.log(allSum(numbers12));
/* 問題2
次のようなオブジェクトが与えられたとき、そのオブジェクト内のキーと値を入れ替えた新しいオブジェクトを作成する関数を実装してください。*/
var obj12 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
// 期待される結果: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}
function changeObject(obj) {
    var newObj = {};
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log("".concat(key, ": ").concat(value));
        newObj[value] = key;
    }
    return newObj;
}
console.log(changeObject(obj12));
/* 問題3
次のような二次元配列が与えられたとき、その二次元配列を転置した新しい二次元配列を作成する関数を実装してください。

*/
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 期待される結果: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
