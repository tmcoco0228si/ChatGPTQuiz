/*以下のような配列 numbers があります。
 */
const numbers = [1, 2, 3, 4, 5];

/*
この配列から、以下の操作を行ってください。

配列の先頭に 0 を追加し、配列の末尾から 6 を追加する。
配列の要素をすべて2倍にする。
配列の要素を降順に並び替える。
配列の先頭から3番目から5番目までの要素を切り出す。

*/

console.log("    問題1    ");
numbers.unshift(0);
numbers.push(6);
console.log(numbers);

let newArr: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] * 2);
}
console.log(newArr);

function compareFunc(a, b) {
  return b - a;
}
console.log(newArr.sort(compareFunc));

console.log(newArr.slice(2, 5));
/*
以下のようなオブジェクト person があります。
*/
// const person = {
//   name: "Alice",
//   age: 30,
//   gender: "female",
//   address: {
//     prefecture: "Tokyo",
//     city: "Shibuya",
//     street: "1-1-1",
//   },
//   hobbies: ["reading", "travelling", "cooking"],
// };
/*
このオブジェクトから、以下の操作を行ってください。

person オブジェクトから、address プロパティを取り出す。
person オブジェクトに、email プロパティを追加する。
hobbies 配列から、'travelling' を削除する。
age プロパティの値を、31 に変更する。
 */
console.log("    問題2    ");

interface Obj {
  [prop: string | number]: any;
}
const person: Obj = {
  name: "Alice",
  age: 30,
  gender: "female",
  address: {
    prefecture: "Tokyo",
    city: "Shibuya",
    street: "1-1-1",
  },
  hobbies: ["reading", "travelling", "cooking"],
};

console.log(person.address);

person.email = "test@test.com";
console.log(person);

// delete person.hobbies[1];

for (let i = 0; i < person.hobbies.length; i++) {
  if (person.hobbies[i] === "travelling") {
    person.hobbies.splice(i, 1);
  }
}
console.log(person);

console.log((person.age = 31));
