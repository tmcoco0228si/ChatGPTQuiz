"use strict";
/*
以下のような要件を満たすコードをTypeScriptで実装してください。

dataという配列があり、以下のようなオブジェクトが含まれている。

{
  id: number, // ユーザーID
  name: string, // ユーザー名
  age: number, // 年齢
  email: string // メールアドレス
}
dataには10個のオブジェクトが含まれる。
dataの各要素のidプロパティは一意の数値であり、かつ昇順にソートされている。
dataの各要素のageプロパティは数値である。
dataの各要素のemailプロパティは正しいメールアドレスの形式である。
dataの各要素のnameプロパティは、必ずしも全てが文字列とは限らない。
dataをidプロパティで昇順にソートした新しい配列sortedDataを作成してください。
sortedDataに含まれるオブジェクトのnameプロパティに対し、以下の処理を行ってください。
nameが文字列である場合は、nameの先頭に「Mr.」を付与する。
nameが文字列以外である場合は、「名前がありません」という文字列に置き換える。
sortedDataの各要素に対し、以下の処理を行ってください。
ageが18歳未満の場合は、isAdultプロパティにfalseを、18歳以上の場合はtrueを設定する。
sortedDataの各要素に対し、以下の処理を行ってください。
emailが「example.com」ドメインのアドレスである場合は、isBusinessEmailプロパティにtrueを、そうでない場合はfalseを設定する。

type DataType = {
  id: number,
  name: string | number,
  age: number,
  email: string
}

const data: DataType[] = [
  { id: 1, name: "John", age: 25, email: "john@example.com" },
  { id: 2, name: 42, age: 18, email: "jane@example.com" },
  { id: 3, name: "Alice", age: 30, email: "alice@example.com" },
  { id: 4, name: "Bob", age: 17, email: "bob@example.com" },
  { id: 5, name: "Charlie", age: 20, email: "charlie@example.com" },
  { id: 6, name: "Dave", age: 22, email: "dave@example.com" },
  { id: 7, name: "Eve", age: 16, email: "eve@example.com" },
  { id: 8, name: "Frank", age: 40, email: "frank@example.com" },
  { id: 9, name: "Grace", age: 35, email: "grace@example.com" },
  { id: 10, name: "Henry", age: 28, email: "henry@example.com" },
]

const sortedData = [...data].sort((a, b) => a.id - b.id);
const sortedData = data.sort((a, b) => a.id - b.id);

sortedData.forEach((data) => {
  if (typeof data.name === "string") {
    data.name = `Mr. ${datum.name}`;
  } else if (typeof  data.name === "number") {
    data.name = "名前がありません";
  }
  data.isAdult = data.age >= 18;
  data.isBusinessEmail = data.email.endsWith("@example.com");
});

console.log(sortedData);


*/
