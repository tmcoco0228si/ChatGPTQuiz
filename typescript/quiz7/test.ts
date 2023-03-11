// /*
// 以下は、さらに配列操作・オブジェクト操作の知識を問う簡易なコーディングテストの例です。30分程度で解決できるように設計されています。

// 配列の最大値を返す関数を実装してください。
// // 与えられた配列の各要素を1つずつ右にシフトする関数を実装してください。
// オブジェクトのプロパティをキーとして、値を合計したオブジェクトを返す関数を実装してください。
// 配列内にある数値から、指定された値に最も近い数値を返す関数を実装してください。
// 与えられた文字列を含むオブジェクトの配列から、指定されたプロパティに対応する値を持つオブジェクトの配列を返す関数を実装してください。
// これらの問題に取り組むことで、TypeScriptにおける配列操作・オブジェクト操作の基本的な知識を深めることができます。
// */

// // 問1: 配列の要素を2倍にする関数
// function doubleArray(arr: number[]): number[] {
//   return arr.map((val) => val * 2);
// }

// // 問2: 配列の要素を1つずつ右にシフトする関数
// function shiftArray(arr: number[]): number[] {
//   //スプレット構文で配列展開
//   const shiftedArr = [...arr];
//   // 配列の最後の要素を取り出す
//   const lastElement = shiftedArr.pop();
//   //取り出した配列最後の要素を配列最初の要素に入れ直す。
//   shiftedArr.unshift(lastElement!);
//   return shiftedArr;
// }

// // 問3: オブジェクトから指定されたキーの値を取り出す関数
// function getValueByKey(obj: { [key: string]: any }, key: string): any {
//   return obj[key];
// }

// // 問4: オブジェクトのプロパティの値を全て加算した結果を返す関数
// function sumObjectValues(obj: { [key: string]: number }): number {
//   let sum = 0;
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// }

// // 問5: 配列内の重複した要素を取り除いた配列を返す関数
// function removeDuplicateValues(arr: any[]): any[] {
//   return Array.from(new Set(arr));
// }

// const arr = [2, 2, 2, 2, 2, 2, 111, 111, 999];

// let resArr: any[] = removeDuplicateValues(arr);
