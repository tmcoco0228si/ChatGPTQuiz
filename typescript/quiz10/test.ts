/**
1 配列の中の最大値を見つける関数を作成する。

2 2つのオブジェクトが与えられた場合、それらのオブジェクトをマージして新しいオブジェクトを返す関数を作成する。

3 数字の配列が与えられた場合、その配列を降順でソートする関数を作成する。

4 与えられた配列を重複なしで並べ替える関数を作成する。
 */

//1
const num = [2, 2, 244, 4444];
function findMax(arr: number[]): number {
  let result = 0;
  result = Math.max(...arr);

  return result;
}
console.log(findMax(num));
//2

const a = {
  test: "test1",
};

const b = {
  example: "example",
};
function margeObj1(
  obj1: { [x: string]: any; test?: string },
  obj2: { [x: string]: any; example?: string }
): any {
  let margeObj: { [x: string]: any; test?: string } = {};

  for (const key in obj1) {
    margeObj[key] = obj1[key];
  }

  for (const key in obj2) {
    margeObj[key] = obj2[key];
  }

  return margeObj;
}
console.log(margeObj1(a, b));

//3
function arrSort(arr: number[]): number[] {
  const result: number[] = [];

  arr.sort((a, b) => {
    return b - a;
  });
  return arr;
}

console.log(arrSort(num));
//4
function juhuju(arr: any[]): any[] {
  let resultArr: any = [];

  resultArr = Array.from(new Set(arr));

  return resultArr;
}

console.log(juhuju(num));
