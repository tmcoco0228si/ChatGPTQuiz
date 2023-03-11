/*
以下がテストの例です。

配列の要素を全て2倍にする関数を実装してください。
オブジェクトの配列から、指定されたプロパティを取り出した配列を返す関数を実装してください。
オブジェクトを指定されたプロパティでグループ化したオブジェクトを返す関数を実装してください。
配列の要素を指定された数ずつ分割した2次元配列を返す関数を実装してください。
上記のように、配列やオブジェクトの操作を問うテストを出題することがあります。ただし、具体的な実装例を提示することは避け、テスト対象者が自力で問題を解決できるようにすることが重要です。
*/
//1
// function nibai(arr: number[]): number[] {
//   const result = arr.map((value, index) => {
//     return value * 2;
//   });
//   return result;
// }
//answer
function doubleArray(arr) {
    return arr.map(function (num) { return num * 2; });
}
var arr1 = [1, 2, 3, 4, 5];
console.log(doubleArray(arr1));
//2
var arr2 = [
    { name: "John", age: 28 },
    { name: "Jane", age: 23 },
    { name: "Bob", age: 35 },
];
function pluck(objArr, prop) {
    var newArr = [];
    newArr = objArr.map(function (obj) { return obj[prop]; });
    if (newArr.length === 0 || newArr[0] === undefined) {
        console.log("No new");
    }
    return newArr;
}
console.log(pluck(arr2, "name"));
//3
function groupByProp(objArr, prop) {
    var groupedObj = {};
    for (var _i = 0, objArr_1 = objArr; _i < objArr_1.length; _i++) {
        var obj = objArr_1[_i];
        var key = obj[prop];
        console.log(key);
        if (!groupedObj[key]) {
            groupedObj[key] = [];
        }
        console.log(groupedObj);
        groupedObj[key].push(obj);
    }
    return groupedObj;
}
var objArr = [
    { id: 1, name: "Alice", group: "A" },
    { id: 2, name: "Bob", group: "B" },
    { id: 3, name: "Charlie", group: "A" },
    { id: 4, name: "Dave", group: "B" },
];
console.log(groupByProp(objArr, "group"));
//4
function chunkArray(arr, chunkSize) {
    var result = [];
    var i = 0;
    while (i < arr.length) {
        console.log(i);
        result.push(arr.slice(i, i + chunkSize));
        i += chunkSize;
        console.log(i);
    }
    return result;
}
console.log(chunkArray(arr1, 2));
