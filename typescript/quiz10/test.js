/**
1 配列の中の最大値を見つける関数を作成する。

2 2つのオブジェクトが与えられた場合、それらのオブジェクトをマージして新しいオブジェクトを返す関数を作成する。

3 数字の配列が与えられた場合、その配列を降順でソートする関数を作成する。

4 与えられた配列を重複なしで並べ替える関数を作成する。
 */
//1
var num = [2, 2, 244, 4444];
function findMax(arr) {
    var result = 0;
    result = Math.max.apply(Math, arr);
    return result;
}
console.log(findMax(num));
//2
var a = {
    test: "test1"
};
var b = {
    example: "example"
};
function margeObj1(obj1, obj2) {
    var margeObj = {};
    for (var key in obj1) {
        margeObj[key] = obj1[key];
    }
    for (var key in obj2) {
        margeObj[key] = obj2[key];
    }
    return margeObj;
}
console.log(margeObj1(a, b));
//3
function arrSort(arr) {
    var result = [];
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr;
}
console.log(arrSort(num));
//4
function juhuju(arr) {
    var resultArr = [];
    resultArr = Array.from(new Set(arr));
    return resultArr;
}
console.log(juhuju(num));
