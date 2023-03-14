// 配列操作
// 1 配列 numbers の中から、値が 10 以上の要素を取り出した新しい配列を作成する。
var numbers16 = [5, 8, 10, 12, 6, 15];
var newNumber16 = numbers16.filter(function (v) {
    return v <= 10;
});
console.log(newNumber16);
// 2 配列 fruits の要素をアルファベット順に並べ替えた新しい配列を作成する。
var fruits16 = ["apple", "orange", "banana", "grape"];
console.log(fruits16.sort());
// 3 配列 colors の要素のうち、重複しているものを削除した新しい配列を作成する。
var colors16 = ["red", "green", "blue", "green", "yellow", "red", "purple"];
var newColor16 = Array.from(new Set(colors16));
console.log(newColor16);
// 4 配列 words の各要素を、先頭の文字だけ大文字にした新しい配列を作成する。
var words16 = ["hello", "world", "typescript", "programming"];
var newWord16 = words16.map(function (v) {
    return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase;
});
console.log(newWord16);
// 5 配列 ages の中から、最大値と最小値を求める。
var ages16 = [25, 36, 18, 47, 12, 31];
console.log("Max: ".concat(Math.max.apply(Math, ages16)));
console.log("Min: ".concat(Math.min.apply(Math, ages16)));
// オブジェクト操作
// 1 オブジェクト person に、新しいプロパティ age を追加する。
var person16 = { name: "John", gender: "male" };
person16.age = 20;
console.log(person16);
// 2 オブジェクト product の値が null または undefined のプロパティを削除する。
var product16 = { name: "book", price: null, author: "Tom" };
var newObj = {};
for (var _i = 0, _a = Object.entries(product16); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key, value);
    if (value !== null && value !== undefined) {
        newObj[key] = value;
    }
}
console.log(newObj);
// 3 オブジェクト user のすべてのプロパティの値を、数値型から文字列型に変換する。
var user16 = {
    name: "Alice",
    age: 25,
    address: "Tokyo",
    phone: 1234567890
};
var newUser16 = {};
for (var _c = 0, _d = Object.entries(user16); _c < _d.length; _c++) {
    var _e = _d[_c], key = _e[0], value = _e[1];
    newUser16[key] = String(value);
}
console.log(newUser16);
// 4 オブジェクト book の title プロパティの値を、toUpperCase() メソッドを使って大文字に変換する。
var book16 = {
    title: "TypeScript Handbook",
    author: "Microsoft",
    pages: 300
};
book16.title = book16.title.toUpperCase();
console.log(book16);
// 5 オブジェクト data に含まれる、すべてのオブジェクトの id プロパティを配列にして取り出す。
var data16 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 },
];
var newData16 = {};
newData16 = data16.map(function (v) {
    return v.id;
});
console.log(newData16);
