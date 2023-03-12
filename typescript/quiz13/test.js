/*
配列aに対して、配列bの要素を追加する関数を作成してください。
 */
var arrA1 = [1, 2, 3];
var arrB1 = [3, 4, 5];
function addArr(arrA, arrB) {
    arrB.map(function (value) {
        arrA.push(value);
    });
    return arrA;
}
console.log(addArr(arrA1, arrB1));
/*
配列aに対して、配列bの要素を削除する関数を作成してください。
 */
var arrA2 = [1, 2, 3];
var arrB2 = [3, 4, 5];
function removeArr(arrA, arrB) {
    arrA.map(function (a, i) {
        arrB.map(function (b, j) {
            if (a === b) {
                arrA.splice(i, 1);
            }
        });
    });
    return arrA;
}
console.log(removeArr(arrA2, arrB2));
/*
オブジェクトaとオブジェクトbをマージする関数を作成してください。
*/
var objA = {
    a: "a"
};
var objB = { b: "b" };
function margeObj(obj1, obj2) {
    for (var _i = 0, _a = Object.entries(obj2); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        obj1[key] = value;
    }
    return obj1;
}
console.log(margeObj(objA, objB));
/*
配列aから重複する要素を削除する関数を作成してください。
 */
var quiz13_4_Arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 44444444];
function quiz13_4(arr) {
    var newArr = Array.from(new Set(arr));
    return newArr;
}
console.log(quiz13_4(quiz13_4_Arr));
/*
配列aに対して、各要素に関数を適用し、新しい配列を作成する関数を作成してください。
*/
var quiz13_5_Arr = ["aa", "bb", "cc"];
function quiz13_5(arr, func) {
    var newArr = arr.map(function (v) { return func(v); });
    return newArr;
}
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(quiz13_5(quiz13_5_Arr, toUpperCase)); // ["AA", "BB", "CC"]
