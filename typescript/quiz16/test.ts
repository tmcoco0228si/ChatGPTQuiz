// 配列操作
// 1 配列 numbers の中から、値が 10 以上の要素を取り出した新しい配列を作成する。
const numbers16 = [5, 8, 10, 12, 6, 15];
const newNumber16 = numbers16.filter((v) => {
  return v <= 10;
});
console.log(newNumber16);

// 2 配列 fruits の要素をアルファベット順に並べ替えた新しい配列を作成する。
const fruits16 = ["apple", "orange", "banana", "grape"];

console.log(fruits16.sort());

// 3 配列 colors の要素のうち、重複しているものを削除した新しい配列を作成する。
const colors16 = ["red", "green", "blue", "green", "yellow", "red", "purple"];

const newColor16 = Array.from(new Set(colors16));
console.log(newColor16);

// 4 配列 words の各要素を、先頭の文字だけ大文字にした新しい配列を作成する。
const words16 = ["hello", "world", "typescript", "programming"];
const newWord16 = words16.map((v) => {
  return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase;
});
console.log(newWord16);

// 5 配列 ages の中から、最大値と最小値を求める。
const ages16 = [25, 36, 18, 47, 12, 31];

console.log(`Max: ${Math.max(...ages16)}`);
console.log(`Min: ${Math.min(...ages16)}`);
// オブジェクト操作

// 1 オブジェクト person に、新しいプロパティ age を追加する。

// 2 オブジェクト product の値が null または undefined のプロパティを削除する。
// 3 オブジェクト user のすべてのプロパティの値を、数値型から文字列型に変換する。
// 4 オブジェクト book の title プロパティの値を、toUpperCase() メソッドを使って大文字に変換する。

// 5 オブジェクト data に含まれる、すべてのオブジェクトの id プロパティを配列にして取り出す。
