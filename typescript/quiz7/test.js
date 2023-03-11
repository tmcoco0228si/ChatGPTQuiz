/*
以下は、さらに配列操作・オブジェクト操作の知識を問う簡易なコーディングテストの例です。30分程度で解決できるように設計されています。

配列の最大値を返す関数を実装してください。
与えられた配列の各要素を1つずつ右にシフトする関数を実装してください。
オブジェクトのプロパティをキーとして、値を合計したオブジェクトを返す関数を実装してください。
配列内にある数値から、指定された値に最も近い数値を返す関数を実装してください。
与えられた文字列を含むオブジェクトの配列から、指定されたプロパティに対応する値を持つオブジェクトの配列を返す関数を実装してください。
これらの問題に取り組むことで、TypeScriptにおける配列操作・オブジェクト操作の基本的な知識を深めることができます。
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 問1: 配列の要素を2倍にする関数
function doubleArray(arr) {
    return arr.map(function (val) { return val * 2; });
}
// 問2: 配列の要素を1つずつ右にシフトする関数
function shiftArray(arr) {
    //スプレット構文で配列展開
    var shiftedArr = __spreadArray([], arr, true);
    // 配列の最後の要素を取り出す
    var lastElement = shiftedArr.pop();
    //取り出した配列最後の要素を配列最初の要素に入れ直す。
    shiftedArr.unshift(lastElement);
    return shiftedArr;
}
// 問3: オブジェクトから指定されたキーの値を取り出す関数
function getValueByKey(obj, key) {
    return obj[key];
}
// 問4: オブジェクトのプロパティの値を全て加算した結果を返す関数
function sumObjectValues(obj) {
    var sum = 0;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            sum += obj[key];
        }
    }
    return sum;
}
// 問5: 配列内の重複した要素を取り除いた配列を返す関数
function removeDuplicateValues(arr) {
    return Array.from(new Set(arr));
}
var arr = [2, 2, 2, 2, 2, 2, 111, 111, 999];
var resArr = removeDuplicateValues(arr);
