/*
問題1
次のような配列が与えられたとき、配列内の数字を全て2倍した新しい配列を作成する関数を実装してください。
*/
var numbers = [1, 2, 3, 4, 5];
// 期待される結果: [2, 4, 6, 8, 10]
function nibai(arr) {
    return arr.map(function (n) { return n * 2; });
}
console.log(nibai(numbers));
/*
問題2
次のような配列が与えられたとき、
配列内の重複した要素を削除した新しい配列を作成する関数を実装してください。
*/
var fruits = ["apple", "banana", "orange", "apple", "grape", "banana"];
// 期待される結果: ['apple', 'banana', 'orange', 'grape']
function deleteJuhuku(arr) {
    var result = Array.from(new Set(arr));
    return result;
}
console.log(deleteJuhuku(fruits));
/*
問題3
次のようなオブジェクトが与えられたとき、
そのオブジェクト内の値が偶数であるキーの値を全て足し合わせた合計値を求める関数を実装してください。
 */
var obj11 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
// 期待される結果: 6
function gusuSumReturn(arr) {
    var result = 0;
    for (var key in arr) {
        if (arr[key] % 2 === 0) {
            result += arr[key];
        }
    }
    return result;
}
console.log(gusuSumReturn(obj11));
