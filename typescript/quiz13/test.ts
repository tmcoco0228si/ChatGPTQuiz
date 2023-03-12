/* 
配列aに対して、配列bの要素を追加する関数を作成してください。
 */

const arrA1 = [1, 2, 3];
const arrB1 = [3, 4, 5];

function addArr(arrA: any[], arrB: any[]): any[] {
  arrB.map((value) => {
    arrA.push(value);
  });
  return arrA;
}
console.log(addArr(arrA1, arrB1));
/*
配列aに対して、配列bの要素を削除する関数を作成してください。
 */

const arrA2 = [1, 2, 3];
const arrB2 = [3, 4, 5];
function removeArr(arrA: any[], arrB: any[]): any[] {
  arrA.map((a, i) => {
    arrB.map((b, j) => {
      if (a === b) {
        arrA.splice(i, 1);
      }
    });
  });
  return arrA;
}
console.log(removeArr(arrA2, arrB2));

/*
オブジェクトaとオブジェクトbをマージする関数を作成してください。
*/
const objA = {
  a: "a",
};

const objB = { b: "b" };

function margeObj(obj1: any, obj2: any): any {
  for (const [key, value] of Object.entries(obj2)) {
    obj1[key] = value;
  }
  return obj1;
}
console.log(margeObj(objA, objB));

/* 
配列aから重複する要素を削除する関数を作成してください。
 */
const quiz13_4_Arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 44444444];
function quiz13_4(arr: any[]): any[] {
  const newArr = Array.from(new Set(arr));
  return newArr;
}
console.log(quiz13_4(quiz13_4_Arr));

/*
配列aに対して、各要素に関数を適用し、新しい配列を作成する関数を作成してください。
*/

const quiz13_5_Arr = ["aa", "bb", "cc"];

function quiz13_5(arr: any[], func: Function): any[] {
  const newArr = arr.map((v) => func(v));
  return newArr;
}

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

console.log(quiz13_5(quiz13_5_Arr, toUpperCase)); // ["AA", "BB", "CC"]
