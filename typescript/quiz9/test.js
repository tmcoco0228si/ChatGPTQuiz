//1 配列の要素を全て2倍にする関数を実装してください。
var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function arrNibai(arr) {
    return arr.map(function (value) {
        return value * 2;
    });
}
console.log(arrNibai(e));
//2 オブジェクトの配列から、指定されたプロパティを取り出した配列を返す関数を実装してください。
var obj = [
    { test: "test", example: "example" },
    { test: "teacher", math: "math" },
    { test: "meat", vegitarian: "veg" },
];
function selectObjectProp(objArr, str) {
    var result = [];
    result = objArr.map(function (obj) {
        return obj[str];
    });
    return result;
}
console.log(selectObjectProp(obj, "test"));
//3 オブジェクトを指定されたプロパティでグループ化したオブジェクトを返す関数を実装してください。
var test = [
    { id: 1, name: "Alice", group: "A" },
    { id: 2, name: "Bob", group: "B" },
    { id: 3, name: "Charlie", group: "A" },
    { id: 4, name: "Dave", group: "B" },
];
function pickUpObjectToGroups(objArr, key) {
    var newObj = [];
    objArr.map(function (obj) {
        var objName = obj[key];
        console.log(obj);
        if (!newObj[objName]) {
            newObj[objName] = [];
        }
        newObj[objName].push(obj);
    });
    return newObj;
}
console.log(pickUpObjectToGroups(test, "group"));
//4 配列の要素を指定された数ずつ分割した2次元配列を返す関数を実装してください。
var nizigen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function nizigenHairetu(arr, n) {
    var result = [];
    var i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, n + i));
        i += n;
    }
    return result;
}
console.log(nizigenHairetu(nizigen, 3));
