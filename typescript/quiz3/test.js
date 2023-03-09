/*
問題
以下の要件を満たす関数 filterAndSort を実装してください。

関数は2つの引数を取ります。
1つ目の引数は文字列型の配列 strArr です。
2つ目の引数はオブジェクト型の引数 options です。options には以下の2つのプロパティが存在します。
startsWith : 文字列型の値を持つ。 strArr の要素の中から、この値で始まる要素だけを取り出す。
sortDesc : 真偽値型の値を持つ。true の場合、結果の配列を降順にソートする。
関数は以下の処理を行います。
strArr の要素のうち、startsWith で指定された文字列で始まる要素だけを取り出す。
取り出された要素を sortDesc の値に応じて昇順または降順にソートする。
ソートされた結果を配列として返す。


制約
strArr の要素はすべて文字列型です。
strArr の要素数は 1 <= strArr.length <= 100 です。
startsWith は空文字列を許容します。
sortDesc のデフォルト値は false です
*/
var strArr = [
    "apple",
    "banana",
    "apricot",
    "kiwi",
    "peach",
    "lemon",
    "lime",
    "orange",
    "banana",
];
var options1 = { startsWith: "banana", sortDesc: false }; // startsWith が "a" sortDescがtrueの場合
function filterAndSort(strArr, obj) {
    var newArr = [];
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === obj.startsWith) {
            newArr.push(strArr[i]);
        }
    }
    if (!obj.sortDesc) {
        newArr.sort(function () {
            return -1;
        });
    }
    else {
        newArr.sort(function () {
            return +1;
        });
    }
    return newArr;
}
console.log(filterAndSort(strArr, options1));
