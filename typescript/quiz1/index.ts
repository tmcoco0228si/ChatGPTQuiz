/*
問題1
指定された配列の要素をすべて2倍にして新しい配列を作成する関数 doubleArray を実装してください。
*/

function doubleArray(arr: number[]): number[] {
  let resultArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i] * 2);
  }

  return resultArr;
}

/*
問題2
指定されたオブジェクトの中から、指定されたキーに対応する値を取得する関数 getProperty を実装してください。キーに対応する値が存在しない場合は、undefinedを返してください。
*/

interface Obj {
  test1: "1";
  test2: "2";
  test3: "3";
}
// function getProperty(obj: Obj, key: string): any {
//   let result: string;
//   let objArr: string[];
//   objArr = Object.keys(obj);

//   return objArr.find((value) => {
//     if (key === value) {
//       return value;
//     } else {
//       return undefined;
//     }
//   });
// }

//答え
function getProperty(obj: { [key: string]: any }, key: string): any {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }
  return undefined;
}

/*
問題3
指定された配列の要素をすべて文字列に変換し、指定された区切り文字でつなげた文字列を作成する関数 joinArray を実装してください。
*/

function joinArray(str: [], req: string): string {
  let strArr: string[] = [];
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    strArr.push(String(str[i]));
  }

  for (let i = 0; i < strArr.length; i++) {
    resultStr += String(strArr[i]) + req;
  }

  return resultStr;
}

/*
問題4
指定されたオブジェクトのキーと値を入れ替えた新しいオブジェクトを作成する関数 invertObject を実装してください。ただし、値はすべて文字列であるものとします。
*/

// function invertObject(obj: { [key: string]: string }): any {
//   Object.values(obj);
// }

//答え
function invertObject(obj: { [key: string]: string }): {
  [key: string]: string;
} 
{
  const invertedObj: { [key: string]: string } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      invertedObj[obj[key]] = key;
    }
  }

  return invertedObj;
}
/*
問題5
指定された配列から、指定された要素を削除した新しい配列を作成する関数 removeElement を実装してください。
*/

// function removeElement(arr: [], index: number): [] {
//   let resultArr = [];

//   arr.slice(index);
//   resultArr = arr;

//   return arr;
// }

//答え
function removeElement(arr: any[], index: number): any[] {
  if (index < 0 || index >= arr.length) {
    throw new Error("Invalid index");
  }

  const resultArr = [...arr];
  resultArr.splice(index, 1);

  return resultArr;
}
