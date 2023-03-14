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
const person16: { [key: string]: any } = { name: "John", gender: "male" };

person16.age = 20;
console.log(person16);

// 2 オブジェクト product の値が null または undefined のプロパティを削除する。
const product16 = { name: "book", price: null, author: "Tom" };
const newObj: { [key: string]: any } = {};
for (const [key, value] of Object.entries(product16)) {
  console.log(key, value);
  if (value !== null && value !== undefined) {
    newObj[key] = value;
  }
}
console.log(newObj);

// 3 オブジェクト user のすべてのプロパティの値を、数値型から文字列型に変換する。
const user16: { [key: string]: any } = {
  name: "Alice",
  age: 25,
  address: "Tokyo",
  phone: 1234567890,
};

const newUser16: { [key: string]: any } = {};
for (const [key, value] of Object.entries(user16)) {
  newUser16[key] = String(value);
}

console.log(newUser16);

// 4 オブジェクト book の title プロパティの値を、toUpperCase() メソッドを使って大文字に変換する。
const book16: { [key: string]: any } = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 300,
};
book16.title = book16.title.toUpperCase();

console.log(book16);

// 5 オブジェクト data に含まれる、すべてのオブジェクトの id プロパティを配列にして取り出す。
const data16: { [key: string]: any } = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 20 },
];

let newData16: { [key: string]: any } = {};
newData16 = data16.map((v: { id: any; }) => {
  return v.id;
});

console.log(newData16);
