/*
以下がテストの例です。

配列の要素を全て2倍にする関数を実装してください。
オブジェクトの配列から、指定されたプロパティを取り出した配列を返す関数を実装してください。
オブジェクトを指定されたプロパティでグループ化したオブジェクトを返す関数を実装してください。
配列の要素を指定された数ずつ分割した2次元配列を返す関数を実装してください。
上記のように、配列やオブジェクトの操作を問うテストを出題することがあります。ただし、具体的な実装例を提示することは避け、テスト対象者が自力で問題を解決できるようにすることが重要です。
*/

//1
//answer
function doubleArray(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}

const arr1 = [1, 2, 3, 4, 5];
console.log(doubleArray(arr1));
//2
const arr2 = [
  { name: "John", age: 28 },
  { name: "Jane", age: 23 },
  { name: "Bob", age: 35 },
];

function pluck(objArr: { [key: string]: any }[], prop: string): any[] {
  let newArr: any = [];
  newArr = objArr.map((obj) => obj[prop]);
  if (newArr.length === 0 || newArr[0] === undefined) {
    console.log("No new");
  }
  return newArr;
}
console.log(pluck(arr2, "name"));

//3
function groupByProp(
  objArr: { [key: string]: any }[],
  prop: string
): { [key: string]: any[] } {
  const groupedObj: { [key: string]: any[] } = {};

  for (const obj of objArr) {
    const key = obj[prop];
    console.log(key);
    if (!groupedObj[key]) {
      groupedObj[key] = [];
    }
    console.log(groupedObj);
    groupedObj[key].push(obj);
  }

  return groupedObj;
}
const objArr = [
  { id: 1, name: "Alice", group: "A" },
  { id: 2, name: "Bob", group: "B" },
  { id: 3, name: "Charlie", group: "A" },
  { id: 4, name: "Dave", group: "B" },
];

console.log(groupByProp(objArr, "group"));
//4
function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  let i = 0;

  while (i < arr.length) {
    console.log(i);
    result.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
    console.log(i);
  }
  return result;
}
console.log(chunkArray<number>(arr1, 2));
